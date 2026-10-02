import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

type ValidationRequest = {
  licenseKey?: string;
  machineId?: string;
  appVersion?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ValidationRequest;

    const licenseKey =
      typeof body.licenseKey === 'string'
        ? body.licenseKey.trim().toUpperCase()
        : '';

    const machineId =
      typeof body.machineId === 'string' ? body.machineId.trim() : '';

    const appVersion =
      typeof body.appVersion === 'string' ? body.appVersion.trim() : '';

    if (!licenseKey || !machineId) {
      return NextResponse.json(
        {
          success: false,
          code: 'INVALID_REQUEST',
          message: 'License key and machine ID are required.',
        },
        { status: 400 },
      );
    }

    const license = await prisma.license.findUnique({
      where: {
        licenseKey,
      },
      include: {
        product: true,
        installations: {
          where: {
            machineId,
          },
        },
      },
    });

    if (!license) {
      return NextResponse.json(
        {
          success: false,
          code: 'LICENSE_NOT_FOUND',
          message: 'License not found.',
        },
        { status: 404 },
      );
    }

    /*
     * Check expiration before checking the license status.
     */
    if (license.expiresAt && license.expiresAt <= new Date()) {
      if (license.status === 'ACTIVE') {
        await prisma.license.update({
          where: {
            id: license.id,
          },
          data: {
            status: 'EXPIRED',
          },
        });

        await prisma.licenseEvent.create({
          data: {
            licenseId: license.id,
            type: 'EXPIRED',
            details: 'License expired during validation.',
          },
        });
      }

      return NextResponse.json(
        {
          success: false,
          code: 'LICENSE_EXPIRED',
          message: 'License has expired.',
        },
        { status: 403 },
      );
    }

    if (license.status !== 'ACTIVE') {
      return NextResponse.json(
        {
          success: false,
          code: 'LICENSE_NOT_ACTIVE',
          message: `License is ${license.status.toLowerCase()}.`,
        },
        { status: 403 },
      );
    }

    if (!license.product.isActive) {
      return NextResponse.json(
        {
          success: false,
          code: 'PRODUCT_INACTIVE',
          message: 'This product is no longer active.',
        },
        { status: 403 },
      );
    }

    const installation = license.installations[0];

    if (!installation) {
      return NextResponse.json(
        {
          success: false,
          code: 'MACHINE_NOT_REGISTERED',
          message: 'This machine is not registered for this license.',
        },
        { status: 403 },
      );
    }

    if (installation.status === 'BLOCKED') {
      return NextResponse.json(
        {
          success: false,
          code: 'INSTALLATION_BLOCKED',
          message: 'This machine has been blocked.',
        },
        { status: 403 },
      );
    }

    if (installation.status !== 'ACTIVE') {
      return NextResponse.json(
        {
          success: false,
          code: 'INSTALLATION_NOT_ACTIVE',
          message: 'This installation is not active.',
        },
        { status: 403 },
      );
    }

    const now = new Date();

    await prisma.installation.update({
      where: {
        id: installation.id,
      },
      data: {
        lastSeenAt: now,
        appVersion: appVersion || installation.appVersion,
      },
    });

    await prisma.licenseEvent.create({
      data: {
        licenseId: license.id,
        installationId: installation.id,
        type: 'VALIDATED',
        details: 'License validation successful.',
      },
    });

    return NextResponse.json({
      success: true,
      code: 'VALID',
      message: 'License is valid.',
      license: {
        id: license.id,
        licenseKey: license.licenseKey,
        type: license.type,
        status: license.status,
        expiresAt: license.expiresAt,
        maxInstallations: license.maxInstallations,
      },
      installation: {
        id: installation.id,
        machineId: installation.machineId,
        status: installation.status,
        lastSeenAt: now,
      },
      product: {
        name: license.product.name,
        code: license.product.code,
        version: license.product.version,
      },
    });
  } catch (error) {
    console.error('License validation error:', error);

    return NextResponse.json(
      {
        success: false,
        code: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred.',
      },
      { status: 500 },
    );
  }
}
