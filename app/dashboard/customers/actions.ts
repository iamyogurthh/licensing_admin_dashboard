'use server';

import { revalidatePath } from 'next/cache';

import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

type CustomerInput = {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  address?: string;
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

export async function createCustomer(input: CustomerInput) {
  await requireAdmin();

  const name = input.name.trim();

  if (!name) {
    throw new Error('Customer name is required.');
  }

  await prisma.customer.create({
    data: {
      name,
      email: cleanOptional(input.email),
      phone: cleanOptional(input.phone),
      company: cleanOptional(input.company),
      address: cleanOptional(input.address),
    },
  });

  revalidatePath('/dashboard/customers');
  revalidatePath('/dashboard');
}

export async function updateCustomer(id: string, input: CustomerInput) {
  await requireAdmin();

  const name = input.name.trim();

  if (!name) {
    throw new Error('Customer name is required.');
  }

  await prisma.customer.update({
    where: {
      id,
    },
    data: {
      name,
      email: cleanOptional(input.email),
      phone: cleanOptional(input.phone),
      company: cleanOptional(input.company),
      address: cleanOptional(input.address),
    },
  });

  revalidatePath('/dashboard/customers');
  revalidatePath('/dashboard');
}

export async function deleteCustomer(id: string) {
  await requireAdmin();

  await prisma.customer.delete({
    where: {
      id,
    },
  });

  revalidatePath('/dashboard/customers');
  revalidatePath('/dashboard');
}
