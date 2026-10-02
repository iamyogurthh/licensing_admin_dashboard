'use client';

import { useState, useTransition } from 'react';

import { createProduct, updateProduct } from '@/app/dashboard/products/actions';

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

type Product = {
  id: string;
  name: string;
  code: string;
  description: string | null;
  version: string | null;
  isActive: boolean;
};

type ProductDialogProps = {
  product?: Product;
};

export function ProductDialog({ product }: ProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const isEditing = Boolean(product);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');

    const formData = new FormData(event.currentTarget);

    const input = {
      name: String(formData.get('name') ?? ''),
      code: String(formData.get('code') ?? ''),
      description: String(formData.get('description') ?? ''),
      version: String(formData.get('version') ?? ''),
    };

    startTransition(async () => {
      try {
        if (product) {
          await updateProduct(product.id, input);
        } else {
          await createProduct(input);
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
      <Button
        variant={isEditing ? 'ghost' : 'default'}
        size={isEditing ? 'sm' : 'default'}
        onClick={() => {
          setError('');
          setOpen(true);
        }}
      >
        {isEditing ? 'Edit' : 'Add Product'}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? 'Edit Product' : 'Add Product'}
            </DialogTitle>

            <DialogDescription>
              {isEditing
                ? 'Update the product information.'
                : 'Create a product that can be assigned to HMS licenses.'}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="product-name">Product Name *</Label>

                <Input
                  id="product-name"
                  name="name"
                  placeholder="Hostel Management System"
                  defaultValue={product?.name ?? ''}
                  required
                />
              </div>

              {/* Code */}
              <div className="space-y-2">
                <Label htmlFor="product-code">Product Code *</Label>

                <Input
                  id="product-code"
                  name="code"
                  placeholder="HMS"
                  defaultValue={product?.code ?? ''}
                  required
                  className="uppercase"
                />

                <p className="text-xs text-muted-foreground">
                  A unique identifier for the product.
                </p>
              </div>

              {/* Version */}
              <div className="space-y-2">
                <Label htmlFor="product-version">Version</Label>

                <Input
                  id="product-version"
                  name="version"
                  placeholder="1.0.0"
                  defaultValue={product?.version ?? ''}
                />
              </div>

              {/* Description */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="product-description">Description</Label>

                <textarea
                  id="product-description"
                  name="description"
                  placeholder="Product description..."
                  defaultValue={product?.description ?? ''}
                  rows={4}
                  className="border-input bg-background placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-20 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
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
                    : 'Create Product'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
