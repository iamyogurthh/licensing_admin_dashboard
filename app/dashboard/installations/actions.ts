'use server';

import { revalidatePath } from 'next/cache';

import { getCurrentAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

async function requireAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    throw new Error('Unauthorized');
  }

  return admin;
}

export async function deactivateInstallation(id: string) {
  await requireAdmin();

  const installation = await prisma.installation.findUnique({
    where: { id },
    include: {
      license: true,
    },
  });

  if (!installation) {
    throw new Error('Installation not found.');
  }

  if (installation.status === 'DEACTIVATED') {
    throw new Error('Installation is already deactivated.');
  }

  await prisma.installation.update({
    where: { id },
    data: {
      status: 'DEACTIVATED',
      deactivatedAt: new Date(),
    },
  });

  await prisma.licenseEvent.create({
    data: {
      licenseId: installation.licenseId,
      installationId: installation.id,
      type: 'DEACTIVATED',
      details: `Installation ${installation.machineId} was deactivated by administrator.`,
    },
  });

  revalidatePath('/dashboard/installations');
  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}

export async function reactivateInstallation(id: string) {
  await requireAdmin();

  const installation = await prisma.installation.findUnique({
    where: { id },
    include: {
      license: true,
    },
  });

  if (!installation) {
    throw new Error('Installation not found.');
  }

  if (installation.status === 'ACTIVE') {
    throw new Error('Installation is already active.');
  }

  if (installation.license.status !== 'ACTIVE') {
    throw new Error(
      'The license must be active before this installation can be reactivated.',
    );
  }

  if (
    installation.license.expiresAt &&
    installation.license.expiresAt <= new Date()
  ) {
    throw new Error('The license has expired.');
  }

  const activeInstallationCount = await prisma.installation.count({
    where: {
      licenseId: installation.licenseId,
      status: 'ACTIVE',
      NOT: {
        id: installation.id,
      },
    },
  });

  if (activeInstallationCount >= installation.license.maxInstallations) {
    throw new Error(
      'The license has reached its maximum number of installations.',
    );
  }

  await prisma.installation.update({
    where: { id },
    data: {
      status: 'ACTIVE',
      deactivatedAt: null,
      lastSeenAt: new Date(),
    },
  });

  revalidatePath('/dashboard/installations');
  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}

export async function blockInstallation(id: string) {
  await requireAdmin();

  const installation = await prisma.installation.findUnique({
    where: { id },
  });

  if (!installation) {
    throw new Error('Installation not found.');
  }

  if (installation.status === 'BLOCKED') {
    throw new Error('Installation is already blocked.');
  }

  await prisma.installation.update({
    where: { id },
    data: {
      status: 'BLOCKED',
      deactivatedAt: new Date(),
    },
  });

  await prisma.licenseEvent.create({
    data: {
      licenseId: installation.licenseId,
      installationId: installation.id,
      type: 'DEACTIVATED',
      details: `Installation ${installation.machineId} was blocked by administrator.`,
    },
  });

  revalidatePath('/dashboard/installations');
  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}

export async function unblockInstallation(id: string) {
  await requireAdmin();

  const installation = await prisma.installation.findUnique({
    where: { id },
    include: {
      license: true,
    },
  });

  if (!installation) {
    throw new Error('Installation not found.');
  }

  if (installation.status !== 'BLOCKED') {
    throw new Error('Installation is not blocked.');
  }

  if (installation.license.status !== 'ACTIVE') {
    throw new Error('The license is not active.');
  }

  if (
    installation.license.expiresAt &&
    installation.license.expiresAt <= new Date()
  ) {
    throw new Error('The license has expired.');
  }

  const activeInstallationCount = await prisma.installation.count({
    where: {
      licenseId: installation.licenseId,
      status: 'ACTIVE',
    },
  });

  if (activeInstallationCount >= installation.license.maxInstallations) {
    throw new Error(
      'The license has reached its maximum number of installations.',
    );
  }

  await prisma.installation.update({
    where: { id },
    data: {
      status: 'ACTIVE',
      deactivatedAt: null,
      lastSeenAt: new Date(),
    },
  });

  revalidatePath('/dashboard/installations');
  revalidatePath('/dashboard/licenses');
  revalidatePath('/dashboard');
}
