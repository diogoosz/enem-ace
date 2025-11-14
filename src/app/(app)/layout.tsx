
'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { UserMenu } from "@/components/layout/user-menu";
import { useFirebase } from "@/firebase";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/components/auth/auth-provider";
import { Loader2 } from "lucide-react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useFirebase();
  const { userPlan, isUserLoading: isAuthContextLoading } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isUserLoading || isAuthContextLoading) {
      return;
    }

    if (!user) {
      router.push('/login');
      return;
    }
    
    if (!user.emailVerified) {
      router.push('/verificar-email');
      return;
    }

    if (!userPlan && pathname !== '/planos') {
      router.push('/planos');
      return;
    }

  }, [user, isUserLoading, userPlan, isAuthContextLoading, router, pathname]);

  if (isUserLoading || isAuthContextLoading) {
     return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // If user is not authenticated or has no plan, we shouldn't render the layout
  // This prevents brief flashes of the app layout before redirection
  if (!user || (!userPlan && pathname !== '/planos')) {
     return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-sidebar-primary" />
            <h1 className="font-headline text-xl font-semibold text-sidebar-primary">
              ENEM Ace
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter>
          <UserMenu />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 md:hidden">
            <SidebarTrigger className="md:hidden"/>
            <div className="flex items-center gap-2">
                <Logo className="size-6 text-primary" />
                <h1 className="font-headline text-lg font-semibold text-primary">
                ENEM Ace
                </h1>
            </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
