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
     * Product must still be active.
     */
    if (!license.product.isActive) {
      return NextResponse.json(
        {
          success: false,
          code: 'PRODUCT_INACTIVE',
          message: 'This product is no longer active.',
          license: {
            licenseKey: license.licenseKey,
            status: license.status,
            expiresAt: license.expiresAt,
            productName: license.product.name,
          },
        },
        { status: 403 },
      );
    }

    /*
     * Check expiration by date.
     *
     * If the license is already expired but the database
     * still says ACTIVE, update it to EXPIRED.
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
          license: {
            licenseKey: license.licenseKey,
            status: 'EXPIRED',
            expiresAt: license.expiresAt,
            productName: license.product.name,
          },
        },
        { status: 403 },
      );
    }

    /*
     * If the license is suspended, revoked, or otherwise
     * inactive, return its current status to the desktop app.
     *
     * This is important because the HMS client must be able
     * to update its local encrypted license state.
     */
    if (license.status !== 'ACTIVE') {
      return NextResponse.json(
        {
          success: false,
          code: 'LICENSE_NOT_ACTIVE',
          message: `License is ${license.status.toLowerCase()}.`,
          license: {
            licenseKey: license.licenseKey,
            status: license.status,
            expiresAt: license.expiresAt,
            productName: license.product.name,
          },
        },
        { status: 403 },
      );
    }

    const installation = license.installations[0];

    /*
     * The license exists, but this machine was never activated.
     */
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

    /*
     * Installation was explicitly blocked.
     */
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

    /*
     * Installation exists but is not active.
     */
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

    /*
     * Update the last time this installation successfully
     * contacted the licensing server.
     */
    await prisma.installation.update({
      where: {
        id: installation.id,
      },
      data: {
        lastSeenAt: now,
        appVersion: appVersion || installation.appVersion,
      },
    });

    /*
     * Record the successful validation.
     */
    await prisma.licenseEvent.create({
      data: {
        licenseId: license.id,
        installationId: installation.id,
        type: 'VALIDATED',
        details: 'License validation successful.',
      },
    });

    /*
     * License is valid and the machine is registered.
     */
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

        /*
         * These fields are used by the HMS client when
         * updating its local license information.
         */
        productName: license.product.name,
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
