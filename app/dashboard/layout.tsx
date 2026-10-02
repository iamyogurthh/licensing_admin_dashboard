import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/auth';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar admin={admin} />

      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
