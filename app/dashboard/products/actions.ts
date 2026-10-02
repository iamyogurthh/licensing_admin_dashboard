'use server';

import { revalidatePath } from 'next/cache';

import { getCurrentAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

type ProductInput = {
  name: string;
  code: string;
  description?: string;
  version?: string;
};

async function requireAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    throw new Error('Unauthorized');
  }

  return admin;
}

function cleanOptional(value: string | undefined) {
  const trimmed = value?.trim();

  return trimmed || null;
}

export async function createProduct(input: ProductInput) {
  await requireAdmin();

  const name = input.name.trim();
  const code = input.code.trim().toUpperCase();

  if (!name) {
    throw new Error('Product name is required.');
  }

  if (!code) {
    throw new Error('Product code is required.');
  }

  const existingProduct = await prisma.product.findUnique({
    where: {
      code,
    },
  });

  if (existingProduct) {
    throw new Error('A product with this code already exists.');
  }

  await prisma.product.create({
    data: {
      name,
      code,
      description: cleanOptional(input.description),
      version: cleanOptional(input.version),
    },
  });

  revalidatePath('/dashboard/products');
  revalidatePath('/dashboard');
}

export async function updateProduct(id: string, input: ProductInput) {
  await requireAdmin();

  const name = input.name.trim();
  const code = input.code.trim().toUpperCase();

  if (!name) {
    throw new Error('Product name is required.');
  }

  if (!code) {
    throw new Error('Product code is required.');
  }

  const existingProduct = await prisma.product.findFirst({
    where: {
      code,
      NOT: {
        id,
      },
    },
  });

  if (existingProduct) {
    throw new Error('A product with this code already exists.');
  }

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      code,
      description: cleanOptional(input.description),
      version: cleanOptional(input.version),
    },
  });

  revalidatePath('/dashboard/products');
  revalidatePath('/dashboard');
}

export async function toggleProductStatus(id: string) {
  await requireAdmin();

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    throw new Error('Product not found.');
  }

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      isActive: !product.isActive,
    },
  });

  revalidatePath('/dashboard/products');
  revalidatePath('/dashboard');
}

export async function deleteProduct(id: string) {
  await requireAdmin();

  const licenseCount = await prisma.license.count({
    where: {
      productId: id,
    },
  });

  if (licenseCount > 0) {
    throw new Error('This product cannot be deleted because it has licenses.');
  }

  await prisma.product.delete({
    where: {
      id,
    },
  });

  revalidatePath('/dashboard/products');
  revalidatePath('/dashboard');
}
