'use client';

import { useMemo, useState, useTransition } from 'react';
import {
  Ban,
  CheckCircle2,
  Clock,
  Monitor,
  PlayCircle,
  Search,
  ShieldBan,
  XCircle,
} from 'lucide-react';

import {
  blockInstallation,
  deactivateInstallation,
  reactivateInstallation,
  unblockInstallation,
} from '@/app/dashboard/installations/actions';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Installation = {
  id: string;
  machineId: string;
  deviceName: string | null;
  operatingSystem: string | null;
  appVersion: string | null;
  activatedAt: Date;
  lastSeenAt: Date | null;
  deactivatedAt: Date | null;
  status: 'ACTIVE' | 'DEACTIVATED' | 'BLOCKED';

  license: {
    id: string;
    licenseKey: string;
    maxInstallations: number;

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
};

function StatusBadge({ status }: { status: Installation['status'] }) {
  switch (status) {
    case 'ACTIVE':
      return (
        <Badge className="gap-1">
          <CheckCircle2 className="size-3" />
          Active
        </Badge>
      );

    case 'DEACTIVATED':
      return (
        <Badge variant="secondary" className="gap-1">
          <XCircle className="size-3" />
          Deactivated
        </Badge>
      );

    case 'BLOCKED':
      return (
        <Badge variant="destructive" className="gap-1">
          <ShieldBan className="size-3" />
          Blocked
        </Badge>
      );
  }
}

function formatDate(date: Date | null) {
  if (!date) return 'Never';

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date));
}

function InstallationActions({ installation }: { installation: Installation }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  function runAction(action: () => Promise<void>) {
    setError('');

    startTransition(async () => {
      try {
        await action();
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Something went wrong.',
        );
      }
    });
  }

  if (installation.status === 'ACTIVE') {
    return (
      <div className="flex items-center justify-end gap-1">
        <Button
          variant="ghost"
          size="icon"
          title="Deactivate installation"
          disabled={isPending}
          onClick={() =>
            runAction(() => deactivateInstallation(installation.id))
          }
        >
          <XCircle className="size-4" />
          <span className="sr-only">Deactivate installation</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive"
          title="Block installation"
          disabled={isPending}
          onClick={() => runAction(() => blockInstallation(installation.id))}
        >
          <Ban className="size-4" />
          <span className="sr-only">Block installation</span>
        </Button>

        {error && (
          <span className="sr-only" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  if (installation.status === 'DEACTIVATED') {
    return (
      <div className="flex items-center justify-end gap-1">
        <Button
          variant="ghost"
          size="icon"
          title="Reactivate installation"
          disabled={isPending}
          onClick={() =>
            runAction(() => reactivateInstallation(installation.id))
          }
        >
          <PlayCircle className="size-4" />
          <span className="sr-only">Reactivate installation</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive"
          title="Block installation"
          disabled={isPending}
          onClick={() => runAction(() => blockInstallation(installation.id))}
        >
          <Ban className="size-4" />
          <span className="sr-only">Block installation</span>
        </Button>

        {error && (
          <span className="sr-only" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end gap-1">
      <Button
        variant="ghost"
        size="icon"
        title="Unblock installation"
        disabled={isPending}
        onClick={() => runAction(() => unblockInstallation(installation.id))}
      >
        <PlayCircle className="size-4" />
        <span className="sr-only">Unblock installation</span>
      </Button>

      {error && (
        <span className="sr-only" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function InstallationTable({
  installations,
}: {
  installations: Installation[];
}) {
  const [search, setSearch] = useState('');

  const filteredInstallations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return installations;

    return installations.filter((installation) => {
      return (
        installation.machineId.toLowerCase().includes(query) ||
        installation.deviceName?.toLowerCase().includes(query) ||
        installation.operatingSystem?.toLowerCase().includes(query) ||
        installation.appVersion?.toLowerCase().includes(query) ||
        installation.license.licenseKey.toLowerCase().includes(query) ||
        installation.license.customer.name.toLowerCase().includes(query) ||
        installation.license.product.name.toLowerCase().includes(query)
      );
    });
  }, [installations, search]);

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search installations..."
          className="pl-9"
        />
      </div>

      <div className="overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">Device</th>

              <th className="px-4 py-3 font-medium">Machine ID</th>

              <th className="px-4 py-3 font-medium">Customer</th>

              <th className="px-4 py-3 font-medium">Product</th>

              <th className="px-4 py-3 font-medium">License</th>

              <th className="px-4 py-3 font-medium">Status</th>

              <th className="px-4 py-3 font-medium">Last Seen</th>

              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredInstallations.map((installation) => (
              <tr key={installation.id} className="hover:bg-muted/30">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                      <Monitor className="size-4" />
                    </div>

                    <div>
                      <p className="font-medium">
                        {installation.deviceName || 'Unknown Device'}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {installation.operatingSystem || 'Unknown OS'}
                        {installation.appVersion
                          ? ` • v${installation.appVersion}`
                          : ''}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <code className="rounded bg-muted px-2 py-1 text-xs">
                    {installation.machineId}
                  </code>
                </td>

                <td className="px-4 py-4 font-medium">
                  {installation.license.customer.name}
                </td>

                <td className="px-4 py-4">
                  <div className="font-medium">
                    {installation.license.product.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {installation.license.product.code}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <code className="text-xs">
                    {installation.license.licenseKey}
                  </code>
                </td>

                <td className="px-4 py-4">
                  <StatusBadge status={installation.status} />
                </td>

                <td className="px-4 py-4 text-muted-foreground">
                  {formatDate(installation.lastSeenAt)}
                </td>

                <td className="px-4 py-4">
                  <InstallationActions installation={installation} />
                </td>
              </tr>
            ))}

            {filteredInstallations.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-12 text-center text-muted-foreground"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="size-8 opacity-40" />
                    <p>No installations found.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredInstallations.length} of {installations.length}{' '}
        installations.
      </div>
    </div>
  );
}
