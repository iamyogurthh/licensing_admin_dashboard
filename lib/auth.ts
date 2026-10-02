import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

const SESSION_COOKIE = 'hms_admin_session';

export async function createSession(adminId: string) {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, adminId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function destroySession() {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE);
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();

  const adminId = cookieStore.get(SESSION_COOKIE)?.value;

  if (!adminId) {
    return null;
  }

  const admin = await prisma.admin.findUnique({
    where: {
      id: adminId,
    },
  });

  if (!admin) {
    return null;
  }

  return admin;
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}
