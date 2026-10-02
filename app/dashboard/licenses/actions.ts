'use server';

import { revalidatePath } from 'next/cache';

import { getCurrentAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

type LicenseInput = {
  customerId: string;
  productId: string;
  type: 'TRIAL' | 'MONTHLY' | 'YEARLY' | 'PERPETUAL';
  expiresAt?: string;
  maxInstallations: number;
};

async function requireAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    throw new Error('Unauthorized');
  }

  return admin;
}

function generateLicenseKey() {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  function segment(length: number) {
    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    return result;
  }

  return `HMS-${segment(5)}-${segment(5)}-${segment(5)}-${segment(5)}`;
}

async function createUniqueLicenseKey() {
  for (let attempt = 0; attempt < 10; attempt++) {
    const licenseKey = generateLicenseKey();

    const existing = await prisma.license.findUnique({
      where: {
        licenseKey,
      },
    });

    if (!existing) {
      return licenseKey;
    }
  }

  throw new Error('Unable to generate a unique license key. Please try again.');
}

function getExpirationDate(type: LicenseInput['type'], expiresAt?: string) {
  if (type === 'PERPETUAL') {
    return null;
  }

  if (expiresAt) {
    const date = new Date(expiresAt);

    if (!Number.isNaN(date.getTime())) {
      return date;
    }
  }

  const date = new Date();

  if (type === 'TRIAL') {
    date.setDate(date.getDate() + 30);
  }

  if (type === 'MONTHLY') {
    date.setMonth(date.getMonth() + 1);
  }

  if (type === 'YEARLY') {
    date.setFullYear(date.getFullYear() + 1);
  }

  return date;
}

export async function createLicense(input: LicenseInput) {
  await requireAdmin();

  if (!input.customerId) {
    throw new Error('Customer is required.');
  }

  if (!input.productId) {
    throw new Error('Product is required.');
  }

  if (input.maxInstallations < 1) {
    throw new Error('Maximum installations must be at least 1.');
  }

  const [customer, product] = await Promise.all([
    prisma.customer.findUnique({
      where: {
        id: input.customerId,
      },
    }),

    prisma.product.findUnique({
      where: {
        id: input.productId,
      },
    }),
  ]);

  if (!customer) {
    throw new Error('Customer not found.');
  }

  if (!product) {
    throw new Error('Product not found.');
  }

  if (!product.isActive) {
    throw new Error('Cannot create a license for an inactive product.');
  }

  const expiresAt = getExpirationDate(input.type, input.expiresAt);

  const licenseKey = await createUniqueLicenseKey();

  const license = await prisma.license.create({
    data: {
      licenseKey,
      customerId: input.customerId,
      productId: input.productId,
      type: input.type,
      status: 'ACTIVE',
      expiresAt,
      maxInstallations: input.maxInstallations,
    },
  });

  await prisma.licenseEvent.create({
    data: {
      licenseId: license.id,
      type: 'CREATED',
      details: `License created for ${customer.name} - ${product.name}`,
    },
  });

  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');

  return license;
}

export async function updateLicense(id: string, input: LicenseInput) {
  await requireAdmin();

  if (!input.customerId) {
    throw new Error('Customer is required.');
  }

  if (!input.productId) {
    throw new Error('Product is required.');
  }

  if (input.maxInstallations < 1) {
    throw new Error('Maximum installations must be at least 1.');
  }

  const license = await prisma.license.findUnique({
    where: {
      id,
    },
  });

  if (!license) {
    throw new Error('License not found.');
  }

  const product = await prisma.product.findUnique({
    where: {
      id: input.productId,
    },
  });

  if (!product) {
    throw new Error('Product not found.');
  }

  if (!product.isActive) {
    throw new Error('Cannot assign a license to an inactive product.');
  }

  const expiresAt = getExpirationDate(input.type, input.expiresAt);

  await prisma.license.update({
    where: {
      id,
    },
    data: {
      customerId: input.customerId,
      productId: input.productId,
      type: input.type,
      expiresAt,
      maxInstallations: input.maxInstallations,
    },
  });

  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}

export async function suspendLicense(id: string) {
  await requireAdmin();

  const license = await prisma.license.findUnique({
    where: {
      id,
    },
  });

  if (!license) {
    throw new Error('License not found.');
  }

  await prisma.license.update({
    where: {
      id,
    },
    data: {
      status: 'SUSPENDED',
    },
  });

  await prisma.licenseEvent.create({
    data: {
      licenseId: id,
      type: 'SUSPENDED',
      details: 'License suspended by administrator.',
    },
  });

  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}

export async function reactivateLicense(id: string) {
  await requireAdmin();

  const license = await prisma.license.findUnique({
    where: {
      id,
    },
  });

  if (!license) {
    throw new Error('License not found.');
  }

  if (license.expiresAt && license.expiresAt <= new Date()) {
    throw new Error('This license has expired and cannot be reactivated.');
  }

  await prisma.license.update({
    where: {
      id,
    },
    data: {
      status: 'ACTIVE',
    },
  });

  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}

export async function revokeLicense(id: string) {
  await requireAdmin();

  const license = await prisma.license.findUnique({
    where: {
      id,
    },
  });

  if (!license) {
    throw new Error('License not found.');
  }

  await prisma.license.update({
    where: {
      id,
    },
    data: {
      status: 'REVOKED',
    },
  });

  await prisma.licenseEvent.create({
    data: {
      licenseId: id,
      type: 'REVOKED',
      details: 'License revoked by administrator.',
    },
  });

  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}
