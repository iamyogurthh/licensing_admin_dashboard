'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    router.push('/login');
    router.refresh();
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleLogout} title="Sign out">
      <LogOut className="size-4" />
      <span className="sr-only">Sign out</span>
    </Button>
  );
}
