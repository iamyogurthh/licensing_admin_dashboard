'use client';

import { useState, useTransition } from 'react';

import { createLicense, updateLicense } from '@/app/dashboard/licenses/actions';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Customer = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  code: string;
};

type License = {
  id: string;
  customerId: string;
  productId: string;
  type: 'TRIAL' | 'MONTHLY' | 'YEARLY' | 'PERPETUAL';
  expiresAt: Date | null;
  maxInstallations: number;
};

type LicenseDialogProps = {
  customers: Customer[];
  products: Product[];
  license?: License;
};

export function LicenseDialog({
  customers,
  products,
  license,
}: LicenseDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const isEditing = Boolean(license);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');

    const formData = new FormData(event.currentTarget);

    const customerId = String(formData.get('customerId') ?? '');

    const productId = String(formData.get('productId') ?? '');

    const type = String(formData.get('type') ?? 'PERPETUAL') as License['type'];

    const expiresAt = String(formData.get('expiresAt') ?? '');

    const maxInstallations = Number(formData.get('maxInstallations') ?? 1);

    const input = {
      customerId,
      productId,
      type,
      expiresAt,
      maxInstallations,
    };

    startTransition(async () => {
      try {
        if (license) {
          await updateLicense(license.id, input);
        } else {
          await createLicense(input);
        }

        setOpen(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Something went wrong.',
        );
      }
    });
  }

  const formattedExpiration = license?.expiresAt
    ? new Date(license.expiresAt).toISOString().slice(0, 10)
    : '';

  return (
    <>
      <Button
        variant={isEditing ? 'ghost' : 'default'}
        size={isEditing ? 'sm' : 'default'}
        onClick={() => {
          setError('');
          setOpen(true);
        }}
      >
        {isEditing ? 'Edit' : 'Create License'}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? 'Edit License' : 'Create License'}
            </DialogTitle>

            <DialogDescription>
              {isEditing
                ? 'Update the license configuration.'
                : 'Create a new license for a customer.'}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Customer */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="license-customer">Customer *</Label>

                <select
                  id="license-customer"
                  name="customerId"
                  defaultValue={license?.customerId ?? ''}
                  required
                  className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="">Select customer</option>

                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="license-product">Product *</Label>

                <select
                  id="license-product"
                  name="productId"
                  defaultValue={license?.productId ?? ''}
                  required
                  className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="">Select product</option>

                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} ({product.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div className="space-y-2">
                <Label htmlFor="license-type">License Type *</Label>

                <select
                  id="license-type"
                  name="type"
                  defaultValue={license?.type ?? 'PERPETUAL'}
                  required
                  className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="TRIAL">Trial</option>

                  <option value="MONTHLY">Monthly</option>

                  <option value="YEARLY">Yearly</option>

                  <option value="PERPETUAL">Perpetual</option>
                </select>
              </div>

              {/* Max installations */}
              <div className="space-y-2">
                <Label htmlFor="license-installations">
                  Max Installations *
                </Label>

                <Input
                  id="license-installations"
                  name="maxInstallations"
                  type="number"
                  min={1}
                  max={100}
                  defaultValue={license?.maxInstallations ?? 1}
                  required
                />
              </div>

              {/* Expiration */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="license-expires">Expiration Date</Label>

                <Input
                  id="license-expires"
                  name="expiresAt"
                  type="date"
                  defaultValue={formattedExpiration}
                />

                <p className="text-xs text-muted-foreground">
                  Leave empty for perpetual licenses.
                </p>
              </div>
            </div>

            {error && (
              <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isPending}
              >
                Cancel
              </Button>

              <Button type="submit" disabled={isPending}>
                {isPending
                  ? 'Saving...'
                  : isEditing
                    ? 'Save Changes'
                    : 'Create License'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
