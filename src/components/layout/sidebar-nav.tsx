
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FileText, BarChart3, Calendar, Edit, Target, Lightbulb, TrendingUp, Gem } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/questoes", icon: BookOpen, label: "Questões" },
  { href: "/simulados", icon: FileText, label: "Simulados" },
  { href: "/redacao", icon: Edit, label: "Redação" },
  { href: "/plano-de-estudos", icon: Calendar, label: "Plano de Estudos" },
  { href: "/metas", icon: Target, label: "Metas Diárias" },
  { href: "/relatorios", icon: BarChart3, label: "Relatórios" },
  { href: "/evolucao", icon: TrendingUp, label: "Evolução" },
  { href: "/questoes-extras", icon: Lightbulb, label: "Questões Extras" },
  { href: "/planos", icon: Gem, label: "Planos" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname.startsWith(item.href)}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
