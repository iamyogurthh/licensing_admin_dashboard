import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

type ActivationRequest = {
  licenseKey?: string;
  machineId?: string;
  deviceName?: string;
  operatingSystem?: string;
  appVersion?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ActivationRequest;

    const licenseKey =
      typeof body.licenseKey === 'string'
        ? body.licenseKey.trim().toUpperCase()
        : '';

    const machineId =
      typeof body.machineId === 'string' ? body.machineId.trim() : '';

    const deviceName =
      typeof body.deviceName === 'string' ? body.deviceName.trim() : '';

    const operatingSystem =
      typeof body.operatingSystem === 'string'
        ? body.operatingSystem.trim()
        : '';

    const appVersion =
      typeof body.appVersion === 'string' ? body.appVersion.trim() : '';

    // -----------------------------------------------------
    // Validate request
    // -----------------------------------------------------

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

    // -----------------------------------------------------
    // Find license
    // -----------------------------------------------------

    const license = await prisma.license.findUnique({
      where: {
        licenseKey,
      },
      include: {
        product: true,
        customer: true,
        installations: true,
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

    // -----------------------------------------------------
    // Check license status
    // -----------------------------------------------------

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

    // -----------------------------------------------------
    // Check product status
    // -----------------------------------------------------

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

    // -----------------------------------------------------
    // Check expiration
    // -----------------------------------------------------

    if (license.expiresAt && license.expiresAt <= new Date()) {
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
          details: 'License expired during activation attempt.',
        },
      });

      return NextResponse.json(
        {
          success: false,
          code: 'LICENSE_EXPIRED',
          message: 'License has expired.',
        },
        { status: 403 },
      );
    }

    // -----------------------------------------------------
    // Check existing installation
    // -----------------------------------------------------

    const existingInstallation = license.installations.find(
      (installation) => installation.machineId === machineId,
    );

    if (existingInstallation) {
      // ---------------------------------------------------
      // Blocked installation
      // ---------------------------------------------------

      if (existingInstallation.status === 'BLOCKED') {
        return NextResponse.json(
          {
            success: false,
            code: 'INSTALLATION_BLOCKED',
            message: 'This machine has been blocked.',
          },
          { status: 403 },
        );
      }

      // ---------------------------------------------------
      // Already active
      // ---------------------------------------------------

      if (existingInstallation.status === 'ACTIVE') {
        const updatedInstallation = await prisma.installation.update({
          where: {
            id: existingInstallation.id,
          },
          data: {
            lastSeenAt: new Date(),
            deviceName: deviceName || existingInstallation.deviceName,
            operatingSystem:
              operatingSystem || existingInstallation.operatingSystem,
            appVersion: appVersion || existingInstallation.appVersion,
          },
        });

        await prisma.licenseEvent.create({
          data: {
            licenseId: license.id,
            installationId: existingInstallation.id,
            type: 'VALIDATED',
            details: 'Existing installation activated again.',
          },
        });

        return NextResponse.json({
          success: true,
          code: 'ALREADY_ACTIVATED',
          message: 'This machine is already activated.',

          license: {
            id: license.id,
            licenseKey: license.licenseKey,
            licenseType: license.type,
            status: license.status,
            expiresAt: license.expiresAt,
            maxInstallations: license.maxInstallations,

            // Customer information
            customerName: license.customer.name,

            // Product information
            productName: license.product.name,
          },

          installation: {
            id: updatedInstallation.id,
            machineId: updatedInstallation.machineId,
            status: updatedInstallation.status,
          },

          product: {
            name: license.product.name,
            code: license.product.code,
            version: license.product.version,
          },

          customer: {
            name: license.customer.name,
            email: license.customer.email,
            phone: license.customer.phone,
            company: license.customer.company,
          },
        });
      }

      // ---------------------------------------------------
      // Reactivate deactivated installation
      // ---------------------------------------------------

      if (existingInstallation.status === 'DEACTIVATED') {
        const installation = await prisma.installation.update({
          where: {
            id: existingInstallation.id,
          },
          data: {
            status: 'ACTIVE',
            deactivatedAt: null,
            lastSeenAt: new Date(),
            deviceName: deviceName || existingInstallation.deviceName,
            operatingSystem:
              operatingSystem || existingInstallation.operatingSystem,
            appVersion: appVersion || existingInstallation.appVersion,
          },
        });

        await prisma.licenseEvent.create({
          data: {
            licenseId: license.id,
            installationId: installation.id,
            type: 'ACTIVATED',
            details: `License reactivated on machine ${machineId}.`,
          },
        });

        return NextResponse.json(
          {
            success: true,
            code: 'ACTIVATED',
            message: 'License reactivated successfully.',

            license: {
              id: license.id,
              licenseKey: license.licenseKey,
              licenseType: license.type,
              status: license.status,
              expiresAt: license.expiresAt,
              maxInstallations: license.maxInstallations,

              // Customer information
              customerName: license.customer.name,

              // Product information
              productName: license.product.name,
            },

            installation: {
              id: installation.id,
              machineId: installation.machineId,
              status: installation.status,
              activatedAt: installation.activatedAt,
            },

            product: {
              name: license.product.name,
              code: license.product.code,
              version: license.product.version,
            },

            customer: {
              name: license.customer.name,
              email: license.customer.email,
              phone: license.customer.phone,
              company: license.customer.company,
            },
          },
          { status: 200 },
        );
      }
    }

    // -----------------------------------------------------
    // Count active installations
    // -----------------------------------------------------

    const activeInstallationCount = license.installations.filter(
      (installation) => installation.status === 'ACTIVE',
    ).length;

    // -----------------------------------------------------
    // Check installation limit
    // -----------------------------------------------------

    if (activeInstallationCount >= license.maxInstallations) {
      return NextResponse.json(
        {
          success: false,
          code: 'INSTALLATION_LIMIT_REACHED',
          message: 'The maximum number of installations has been reached.',
        },
        { status: 403 },
      );
    }

    // -----------------------------------------------------
    // Create new installation
    // -----------------------------------------------------

    const installation = await prisma.installation.create({
      data: {
        licenseId: license.id,
        machineId,
        deviceName: deviceName || null,
        operatingSystem: operatingSystem || null,
        appVersion: appVersion || null,
        activatedAt: new Date(),
        lastSeenAt: new Date(),
        status: 'ACTIVE',
      },
    });

    // -----------------------------------------------------
    // Create activation event
    // -----------------------------------------------------

    await prisma.licenseEvent.create({
      data: {
        licenseId: license.id,
        installationId: installation.id,
        type: 'ACTIVATED',
        details: `License activated on machine ${machineId}.`,
      },
    });

    // -----------------------------------------------------
    // Success
    // -----------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        code: 'ACTIVATED',
        message: 'License activated successfully.',

        license: {
          id: license.id,
          licenseKey: license.licenseKey,
          licenseType: license.type,
          status: license.status,
          expiresAt: license.expiresAt,
          maxInstallations: license.maxInstallations,

          // Customer information
          customerName: license.customer.name,

          // Product information
          productName: license.product.name,
        },

        installation: {
          id: installation.id,
          machineId: installation.machineId,
          status: installation.status,
          activatedAt: installation.activatedAt,
        },

        product: {
          name: license.product.name,
          code: license.product.code,
          version: license.product.version,
        },

        customer: {
          name: license.customer.name,
          email: license.customer.email,
          phone: license.customer.phone,
          company: license.customer.company,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('License activation error:', error);

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
