'use client';

import { useMemo, useState } from 'react';
import {
  Activity,
  Ban,
  CheckCircle2,
  Clock,
  KeyRound,
  Monitor,
  PauseCircle,
  Search,
  ShieldAlert,
  XCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

type LicenseEventType =
  | 'CREATED'
  | 'ACTIVATED'
  | 'VALIDATED'
  | 'DEACTIVATED'
  | 'SUSPENDED'
  | 'REVOKED'
  | 'EXPIRED';

type Event = {
  id: string;
  type: LicenseEventType;
  ipAddress: string | null;
  userAgent: string | null;
  details: string | null;
  createdAt: Date;

  license: {
    id: string;
    licenseKey: string;

    customer: {
      id: string;
      name: string;
    };

    product: {
      id: string;
      name: string;
      code: string;
    };
  };

  installation: {
    id: string;
    machineId: string;
    deviceName: string | null;
  } | null;
};

function EventBadge({ type }: { type: LicenseEventType }) {
  switch (type) {
    case 'CREATED':
      return (
        <Badge variant="outline" className="gap-1">
          <KeyRound className="size-3" />
          Created
        </Badge>
      );

    case 'ACTIVATED':
      return (
        <Badge className="gap-1">
          <CheckCircle2 className="size-3" />
          Activated
        </Badge>
      );

    case 'VALIDATED':
      return (
        <Badge variant="secondary" className="gap-1">
          <ShieldAlert className="size-3" />
          Validated
        </Badge>
      );

    case 'DEACTIVATED':
      return (
        <Badge variant="secondary" className="gap-1">
          <XCircle className="size-3" />
          Deactivated
        </Badge>
      );

    case 'SUSPENDED':
      return (
        <Badge variant="secondary" className="gap-1">
          <PauseCircle className="size-3" />
          Suspended
        </Badge>
      );

    case 'REVOKED':
      return (
        <Badge variant="destructive" className="gap-1">
          <Ban className="size-3" />
          Revoked
        </Badge>
      );

    case 'EXPIRED':
      return (
        <Badge variant="outline" className="gap-1">
          <Clock className="size-3" />
          Expired
        </Badge>
      );
  }
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date));
}

export function EventTable({ events }: { events: Event[] }) {
  const [search, setSearch] = useState('');

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return events;

    return events.filter((event) => {
      return (
        event.type.toLowerCase().includes(query) ||
        event.license.licenseKey.toLowerCase().includes(query) ||
        event.license.customer.name.toLowerCase().includes(query) ||
        event.license.product.name.toLowerCase().includes(query) ||
        event.license.product.code.toLowerCase().includes(query) ||
        event.installation?.machineId?.toLowerCase().includes(query) ||
        event.installation?.deviceName?.toLowerCase().includes(query) ||
        event.ipAddress?.toLowerCase().includes(query) ||
        event.details?.toLowerCase().includes(query)
      );
    });
  }, [events, search]);

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search events..."
          className="pl-9"
        />
      </div>

      <div className="overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">Event</th>

              <th className="px-4 py-3 font-medium">License</th>

              <th className="px-4 py-3 font-medium">Customer</th>

              <th className="px-4 py-3 font-medium">Product</th>

              <th className="px-4 py-3 font-medium">Installation</th>

              <th className="px-4 py-3 font-medium">Details</th>

              <th className="px-4 py-3 font-medium">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredEvents.map((event) => (
              <tr key={event.id} className="hover:bg-muted/30">
                <td className="px-4 py-4">
                  <EventBadge type={event.type} />
                </td>

                <td className="px-4 py-4">
                  <code className="rounded bg-muted px-2 py-1 text-xs">
                    {event.license.licenseKey}
                  </code>
                </td>

                <td className="px-4 py-4 font-medium">
                  {event.license.customer.name}
                </td>

                <td className="px-4 py-4">
                  <div className="font-medium">
                    {event.license.product.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {event.license.product.code}
                  </div>
                </td>

                <td className="px-4 py-4">
                  {event.installation ? (
                    <div className="flex items-center gap-2">
                      <Monitor className="size-4 text-muted-foreground" />

                      <div>
                        <p className="font-medium">
                          {event.installation.deviceName || 'Unknown Device'}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {event.installation.machineId}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>

                <td className="max-w-xs px-4 py-4">
                  <p className="truncate text-muted-foreground">
                    {event.details || '—'}
                  </p>

                  {event.ipAddress && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      IP: {event.ipAddress}
                    </p>
                  )}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
                  {formatDate(event.createdAt)}
                </td>
              </tr>
            ))}

            {filteredEvents.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-12 text-center text-muted-foreground"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Activity className="size-8 opacity-40" />
                    <p>No events found.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredEvents.length} of {events.length} events.
      </div>
    </div>
  );
}
