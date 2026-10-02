'use client';

import { useMemo, useState, useTransition } from 'react';
import {
  CheckCircle2,
  Clock,
  Eye,
  PauseCircle,
  PlayCircle,
  Search,
  XCircle,
} from 'lucide-react';

import {
  reactivateLicense,
  suspendLicense,
} from '@/app/dashboard/licenses/actions';

import { LicenseDialog } from '@/components/licenses/license-dialog';
import { RevokeLicenseDialog } from '@/components/licenses/revoke-license-dialog';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type License = {
  id: string;
  licenseKey: string;
  customerId: string;
  productId: string;
  type: 'TRIAL' | 'MONTHLY' | 'YEARLY' | 'PERPETUAL';
  status: 'ACTIVE' | 'SUSPENDED' | 'REVOKED' | 'EXPIRED';
  issuedAt: Date;
  expiresAt: Date | null;
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
  _count: {
    installations: number;
  };
};

type Customer = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  code: string;
};

type LicenseTableProps = {
  licenses: License[];
  customers: Customer[];
  products: Product[];
};

function getDisplayStatus(license: License) {
  if (
    license.status === 'ACTIVE' &&
    license.expiresAt &&
    license.expiresAt <= new Date()
  ) {
    return 'EXPIRED';
  }

  return license.status;
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case 'ACTIVE':
      return (
        <Badge variant="default" className="gap-1">
          <CheckCircle2 className="size-3" />
          Active
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
          <XCircle className="size-3" />
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

    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

function formatDate(date: Date | null) {
  if (!date) return 'Never';

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

function formatLicenseType(type: License['type']) {
  switch (type) {
    case 'TRIAL':
      return 'Trial';
    case 'MONTHLY':
      return 'Monthly';
    case 'YEARLY':
      return 'Yearly';
    case 'PERPETUAL':
      return 'Perpetual';
  }
}

function LicenseActions({
  license,
  customers,
  products,
}: {
  license: License;
  customers: Customer[];
  products: Product[];
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const displayStatus = getDisplayStatus(license);

  function handleSuspend() {
    setError('');

    startTransition(async () => {
      try {
        await suspendLicense(license.id);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Unable to suspend license.',
        );
      }
    });
  }

  function handleReactivate() {
    setError('');

    startTransition(async () => {
      try {
        await reactivateLicense(license.id);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Unable to reactivate license.',
        );
      }
    });
  }

  return (
    <div className="flex items-center justify-end gap-1">
      {displayStatus === 'ACTIVE' && (
        <Button
          variant="ghost"
          size="icon"
          title="Suspend license"
          disabled={isPending}
          onClick={handleSuspend}
        >
          <PauseCircle className="size-4" />
          <span className="sr-only">Suspend license</span>
        </Button>
      )}

      {displayStatus === 'SUSPENDED' && (
        <Button
          variant="ghost"
          size="icon"
          title="Reactivate license"
          disabled={isPending}
          onClick={handleReactivate}
        >
          <PlayCircle className="size-4" />
          <span className="sr-only">Reactivate license</span>
        </Button>
      )}

      {displayStatus !== 'REVOKED' && (
        <RevokeLicenseDialog
          licenseId={license.id}
          licenseKey={license.licenseKey}
        />
      )}

      <LicenseDialog
        customers={customers}
        products={products}
        license={{
          id: license.id,
          customerId: license.customerId,
          productId: license.productId,
          type: license.type,
          expiresAt: license.expiresAt,
          maxInstallations: license.maxInstallations,
        }}
      />

      {error && (
        <span className="sr-only" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function LicenseTable({
  licenses,
  customers,
  products,
}: LicenseTableProps) {
  const [search, setSearch] = useState('');

  const filteredLicenses = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return licenses;

    return licenses.filter((license) => {
      return (
        license.licenseKey.toLowerCase().includes(query) ||
        license.customer.name.toLowerCase().includes(query) ||
        license.product.name.toLowerCase().includes(query) ||
        license.product.code.toLowerCase().includes(query)
      );
    });
  }, [licenses, search]);

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search licenses..."
          className="pl-9"
        />
      </div>

      <div className="overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">License Key</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Expiration</th>
              <th className="px-4 py-3 font-medium">Installations</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredLicenses.map((license) => {
              const status = getDisplayStatus(license);

              return (
                <tr key={license.id} className="hover:bg-muted/30">
                  <td className="px-4 py-4">
                    <code className="rounded bg-muted px-2 py-1 text-xs font-medium">
                      {license.licenseKey}
                    </code>
                  </td>

                  <td className="px-4 py-4">
                    <div className="font-medium">{license.customer.name}</div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="font-medium">{license.product.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {license.product.code}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    {formatLicenseType(license.type)}
                  </td>

                  <td className="px-4 py-4">
                    <StatusBadge status={status} />
                  </td>

                  <td className="px-4 py-4 text-muted-foreground">
                    {formatDate(license.expiresAt)}
                  </td>

                  <td className="px-4 py-4">
                    <span className="font-medium">
                      {license._count.installations}
                    </span>
                    <span className="text-muted-foreground">
                      {' '}
                      / {license.maxInstallations}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <LicenseActions
                      license={license}
                      customers={customers}
                      products={products}
                    />
                  </td>
                </tr>
              );
            })}

            {filteredLicenses.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-12 text-center text-muted-foreground"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Eye className="size-8 opacity-40" />
                    <p>No licenses found.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredLicenses.length} of {licenses.length} licenses.
      </div>
    </div>
  );
}
