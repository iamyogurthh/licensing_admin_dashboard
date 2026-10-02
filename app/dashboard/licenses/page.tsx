import { KeyRound } from 'lucide-react';

import { prisma } from '@/lib/prisma';

import { LicenseDialog } from '@/components/licenses/license-dialog';
import { LicenseTable } from '@/components/licenses/license-table';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function LicensesPage() {
  const [licenses, customers, products] = await Promise.all([
    prisma.license.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
          },
        },
        product: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        _count: {
          select: {
            installations: true,
          },
        },
      },
    }),

    prisma.customer.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'asc',
      },
    }),

    prisma.product.findMany({
      where: {
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        code: true,
      },
      orderBy: {
        name: 'asc',
      },
    }),
  ]);

  return (
    <main className="flex-1 space-y-8 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <KeyRound className="size-6" />

            <h1 className="text-2xl font-semibold tracking-tight">Licenses</h1>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Create and manage HMS software licenses.
          </p>
        </div>

        <LicenseDialog customers={customers} products={products} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>License List</CardTitle>
        </CardHeader>

        <CardContent>
          <LicenseTable
            licenses={licenses}
            customers={customers}
            products={products}
          />
        </CardContent>
      </Card>
    </main>
  );
}
