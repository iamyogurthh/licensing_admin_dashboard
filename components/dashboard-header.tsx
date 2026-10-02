import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger />

      <Separator orientation="vertical" className="mr-2 h-4" />

      <div className="flex-1">
        <h1 className="text-sm font-semibold">Dashboard</h1>

        <p className="hidden text-xs text-muted-foreground sm:block">
          HMS License Administration
        </p>
      </div>

      <ThemeToggle />
    </header>
  );
}
