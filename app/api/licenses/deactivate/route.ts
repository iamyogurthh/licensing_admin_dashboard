import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

type DeactivationRequest = {
  licenseKey?: string;
  machineId?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DeactivationRequest;

    const licenseKey =
      typeof body.licenseKey === 'string'
        ? body.licenseKey.trim().toUpperCase()
        : '';

    const machineId =
      typeof body.machineId === 'string' ? body.machineId.trim() : '';

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

    if (installation.status === 'DEACTIVATED') {
      return NextResponse.json(
        {
          success: true,
          code: 'ALREADY_DEACTIVATED',
          message: 'This installation is already deactivated.',
        },
        { status: 200 },
      );
    }

    const now = new Date();

    await prisma.installation.update({
      where: {
        id: installation.id,
      },
      data: {
        status: 'DEACTIVATED',
        deactivatedAt: now,
      },
    });

    await prisma.licenseEvent.create({
      data: {
        licenseId: license.id,
        installationId: installation.id,
        type: 'DEACTIVATED',
        details: 'Installation deactivated by the application.',
      },
    });

    return NextResponse.json({
      success: true,
      code: 'DEACTIVATED',
      message: 'Installation deactivated successfully.',
      license: {
        id: license.id,
        licenseKey: license.licenseKey,
      },
      installation: {
        id: installation.id,
        machineId: installation.machineId,
        status: 'DEACTIVATED',
        deactivatedAt: now,
      },
    });
  } catch (error) {
    console.error('License deactivation error:', error);

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
