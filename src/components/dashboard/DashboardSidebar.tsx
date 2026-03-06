"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  PhoneCall,
  BarChart2,
  Settings,
  LogOut,
  Zap,
  Users,
  CalendarCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Calls", href: "/dashboard/calls", icon: PhoneCall },
  { label: "Leads", href: "/dashboard/leads", icon: Users },
  { label: "Appointments", href: "/dashboard/appointments", icon: CalendarCheck },
  { label: "Campaigns", href: "/dashboard/campaigns", icon: Zap },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-[#07111D] border-r border-white/5 flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-white/5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <PhoneCall className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">
          Voice<span className="text-blue-400">Axis</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-blue-600/15 text-blue-400 border border-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="px-3 pb-6 border-t border-white/5 pt-4">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
