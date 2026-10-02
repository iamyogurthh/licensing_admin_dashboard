'use client';

import { useState, useTransition } from 'react';

import {
  createCustomer,
  updateCustomer,
} from '@/app/dashboard/customers/actions';

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
  email: string | null;
  phone: string | null;
  company: string | null;
  address: string | null;
};

type CustomerDialogProps = {
  customer?: Customer;
};

export function CustomerDialog({ customer }: CustomerDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const isEditing = Boolean(customer);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');

    const formData = new FormData(event.currentTarget);

    const input = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      company: String(formData.get('company') ?? ''),
      address: String(formData.get('address') ?? ''),
      notes: String(formData.get('notes') ?? ''),
    };

    startTransition(async () => {
      try {
        if (customer) {
          await updateCustomer(customer.id, input);
        } else {
          await createCustomer(input);
        }

        setOpen(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Something went wrong.',
        );
      }
    });
  }

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant={isEditing ? 'ghost' : 'default'}
        size={isEditing ? 'sm' : 'default'}
        onClick={() => {
          setError('');
          setOpen(true);
        }}
      >
        {isEditing ? 'Edit' : 'Add Customer'}
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? 'Edit Customer' : 'Add Customer'}
            </DialogTitle>

            <DialogDescription>
              {isEditing
                ? "Update the customer's information."
                : 'Create a new customer for the licensing system.'}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="customer-name">Name *</Label>

                <Input
                  id="customer-name"
                  name="name"
                  placeholder="John Doe"
                  defaultValue={customer?.name ?? ''}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="customer-email">Email</Label>

                <Input
                  id="customer-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  defaultValue={customer?.email ?? ''}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="customer-phone">Phone</Label>

                <Input
                  id="customer-phone"
                  name="phone"
                  placeholder="+95 9..."
                  defaultValue={customer?.phone ?? ''}
                />
              </div>

              {/* Company */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="customer-company">Company</Label>

                <Input
                  id="customer-company"
                  name="company"
                  placeholder="Company name"
                  defaultValue={customer?.company ?? ''}
                />
              </div>

              {/* Address */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="customer-address">Address</Label>

                <Input
                  id="customer-address"
                  name="address"
                  placeholder="Customer address"
                  defaultValue={customer?.address ?? ''}
                />
              </div>
            </div>

            {/* Error */}
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
                    : 'Create Customer'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
