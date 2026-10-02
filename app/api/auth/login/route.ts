import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createSession, verifyPassword } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json(
        {
          message: 'Email and password are required.',
        },
        { status: 400 },
      );
    }

    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      return NextResponse.json(
        {
          message: 'Invalid email or password.',
        },
        { status: 401 },
      );
    }

    const passwordValid = await verifyPassword(password, admin.passwordHash);

    if (!passwordValid) {
      return NextResponse.json(
        {
          message: 'Invalid email or password.',
        },
        { status: 401 },
      );
    }

    await createSession(admin.id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Login error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong.',
      },
      { status: 500 },
    );
  }
}
