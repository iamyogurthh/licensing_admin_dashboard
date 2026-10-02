import {
  Activity,
  AlertTriangle,
  KeyRound,
  Monitor,
  Users,
} from 'lucide-react';

import { prisma } from '@/lib/prisma';
import { DashboardHeader } from '@/components/dashboard-header';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';

function formatEventType(type: string) {
  return type
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export default async function DashboardPage() {
  const now = new Date();

  const sevenDaysFromNow = new Date(now);
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

  const [
    totalCustomers,
    activeLicenses,
    activeInstallations,
    expiringLicenses,
    recentEvents,
  ] = await Promise.all([
    prisma.customer.count(),

    prisma.license.count({
      where: {
        status: 'ACTIVE',
      },
    }),

    prisma.installation.count({
      where: {
        status: 'ACTIVE',
      },
    }),

    prisma.license.count({
      where: {
        status: 'ACTIVE',
        expiresAt: {
          gte: now,
          lte: sevenDaysFromNow,
        },
      },
    }),

    prisma.licenseEvent.findMany({
      take: 8,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        license: {
          select: {
            licenseKey: true,
          },
        },
        installation: {
          select: {
            machineId: true,
          },
        },
      },
    }),
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />

      <main className="flex-1 space-y-8 p-6">
        {/* Page heading */}

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

          <p className="text-sm text-muted-foreground">
            Overview of your HMS licensing system.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Customers"
            value={totalCustomers}
            description="Registered customers"
            icon={Users}
          />

          <StatCard
            title="Active Licenses"
            value={activeLicenses}
            description="Currently active"
            icon={KeyRound}
          />

          <StatCard
            title="Installations"
            value={activeInstallations}
            description="Active installations"
            icon={Monitor}
          />

          <StatCard
            title="Expiring Soon"
            value={expiringLicenses}
            description="Within the next 7 days"
            icon={AlertTriangle}
          />
        </div>

        {/* Recent activity */}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="size-5" />

              <div>
                <CardTitle>Recent License Activity</CardTitle>

                <p className="mt-1 text-sm text-muted-foreground">
                  Latest activity from your licensing system.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {recentEvents.length === 0 ? (
              <div className="flex min-h-32 items-center justify-center text-sm text-muted-foreground">
                No license activity yet.
              </div>
            ) : (
              <div className="divide-y">
                {recentEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          {formatEventType(event.type)}
                        </Badge>

                        <span className="truncate text-sm font-medium">
                          {event.license.licenseKey}
                        </span>
                      </div>

                      {event.installation && (
                        <p className="mt-1 truncate text-xs text-muted-foreground">
                          Machine: {event.installation.machineId}
                        </p>
                      )}
                    </div>

                    <span className="shrink-0 text-xs text-muted-foreground">
                      {formatDate(event.createdAt)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <Icon className="size-4 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold tracking-tight">
          {value.toLocaleString()}
        </div>

        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
