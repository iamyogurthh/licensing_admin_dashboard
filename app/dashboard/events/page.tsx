import { History } from 'lucide-react';

import { prisma } from '@/lib/prisma';

import { EventTable } from '@/components/events/event-table';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function EventsPage() {
  const events = await prisma.licenseEvent.findMany({
    orderBy: {
      createdAt: 'desc',
    },

    include: {
      license: {
        select: {
          id: true,
          licenseKey: true,

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

      installation: {
        select: {
          id: true,
          machineId: true,
          deviceName: true,
        },
      },
    },

    take: 500,
  });

  return (
    <main className="flex-1 space-y-8 p-6">
      <div>
        <div className="flex items-center gap-2">
          <History className="size-6" />

          <h1 className="text-2xl font-semibold tracking-tight">Events</h1>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          View the activity history of your licensing system.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>License Activity</CardTitle>
        </CardHeader>

        <CardContent>
          <EventTable events={events} />
        </CardContent>
      </Card>
    </main>
  );
}
