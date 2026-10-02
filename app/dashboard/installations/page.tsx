import { Monitor } from 'lucide-react';

import { prisma } from '@/lib/prisma';

import { InstallationTable } from '@/components/installations/installation-table';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function InstallationsPage() {
  const installations = await prisma.installation.findMany({
    orderBy: {
      activatedAt: 'desc',
    },
    include: {
      license: {
        select: {
          id: true,
          licenseKey: true,
          maxInstallations: true,

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
        },
      },
    },
  });

  return (
    <main className="flex-1 space-y-8 p-6">
      <div>
        <div className="flex items-center gap-2">
          <Monitor className="size-6" />

          <h1 className="text-2xl font-semibold tracking-tight">
            Installations
          </h1>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          Monitor and manage activated HMS installations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Installation List</CardTitle>
        </CardHeader>

        <CardContent>
          <InstallationTable installations={installations} />
        </CardContent>
      </Card>
    </main>
  );
}
