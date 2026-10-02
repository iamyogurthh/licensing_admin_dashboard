'use client';

import { useState, useTransition } from 'react';
import { Ban } from 'lucide-react';

import { revokeLicense } from '@/app/dashboard/licenses/actions';

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

type Props = {
  licenseId: string;
  licenseKey: string;
};

export function RevokeLicenseDialog({ licenseId, licenseKey }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  function handleRevoke() {
    setError('');

    startTransition(async () => {
      try {
        await revokeLicense(licenseId);
        setOpen(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Unable to revoke license.',
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
        title="Revoke license"
        onClick={() => {
          setError('');
          setOpen(true);
        }}
      >
        <Ban className="size-4" />
        <span className="sr-only">Revoke license</span>
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke License?</AlertDialogTitle>

            <AlertDialogDescription>
              This will permanently revoke license{' '}
              <span className="font-medium text-foreground">{licenseKey}</span>.
              The license will no longer be usable for activation.
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
                handleRevoke();
              }}
              disabled={isPending}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {isPending ? 'Revoking...' : 'Revoke License'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
