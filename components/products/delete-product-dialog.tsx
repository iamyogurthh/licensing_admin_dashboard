'use client';

import { useState, useTransition } from 'react';
import { Trash2 } from 'lucide-react';

import { deleteProduct } from '@/app/dashboard/products/actions';

import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type DeleteProductDialogProps = {
  productId: string;
  productName: string;
};

export function DeleteProductDialog({
  productId,
  productName,
}: DeleteProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  function handleDelete() {
    setError('');

    startTransition(async () => {
      try {
        await deleteProduct(productId);

        setOpen(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Unable to delete product.',
        );
      }
    });
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:text-destructive"
        title="Delete product"
        onClick={() => {
          setError('');
          setOpen(true);
        }}
      >
        <Trash2 className="size-4" />

        <span className="sr-only">Delete product</span>
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product?</AlertDialogTitle>

            <AlertDialogDescription>
              Are you sure you want to delete{' '}
              <span className="font-medium text-foreground">{productName}</span>
              ? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {error && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>

            <AlertDialogAction
              onClick={(event) => {
                event.preventDefault();
                handleDelete();
              }}
              disabled={isPending}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
