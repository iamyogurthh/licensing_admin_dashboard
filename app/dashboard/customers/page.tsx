import { Users } from 'lucide-react';

import { prisma } from '@/lib/prisma';
import { CustomerDialog } from '@/components/customers/customer-dialog';
import { CustomerTable } from '@/components/customers/customer-table';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className="flex-1 space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Users className="size-6" />

            <h1 className="text-2xl font-semibold tracking-tight">Customers</h1>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage customers who own HMS licenses.
          </p>
        </div>

        {/* Add Customer */}
        <CustomerDialog />
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>

        <CardContent>
          <CustomerTable customers={customers} />
        </CardContent>
      </Card>
    </main>
  );
}
