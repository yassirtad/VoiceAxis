import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SubscriptionCard } from "@/components/dashboard/SubscriptionCard";
import {
  PhoneCall,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  Zap,
  CalendarCheck,
  BarChart2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Calls This Month", value: "0", change: "—", icon: PhoneCall, color: "text-blue-400" },
  { label: "Leads Captured", value: "0", change: "—", icon: Users, color: "text-emerald-400" },
  { label: "Appointments Booked", value: "0", change: "—", icon: CalendarCheck, color: "text-violet-400" },
  { label: "Avg. Call Duration", value: "—", change: "—", icon: Clock, color: "text-cyan-400" },
];

const quickActions = [
  {
    title: "Set up AI Receptionist",
    desc: "Configure your inbound call answering agent",
    href: "/contact",
    icon: PhoneCall,
  },
  {
    title: "Launch Outbound Campaign",
    desc: "Dial your prospect list with AI agents",
    href: "/contact",
    icon: Zap,
  },
  {
    title: "View Analytics",
    desc: "Call volume, outcomes, and lead quality",
    href: "/dashboard/analytics",
    icon: BarChart2,
  },
];

export default async function DashboardPage() {
  const session = await auth();

  // Middleware handles redirect but double-check here
  if (!session) {
    redirect("/login");
  }

  const userName = session.user?.name ?? session.user?.email?.split("@")[0] ?? "there";

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">
          Good to see you, {userName} 👋
        </h1>
        <p className="text-slate-400 text-sm">
          Your AI call center is live and ready. Here&apos;s your overview.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs font-medium">{stat.label}</span>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Subscription */}
        <div className="lg:col-span-1">
          <SubscriptionCard planId="growth" />
        </div>

        {/* Quick actions + onboarding */}
        <div className="lg:col-span-2 space-y-6">
          {/* Onboarding banner */}
          <div className="bg-gradient-to-r from-blue-600/15 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white font-bold mb-1">Complete your setup</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Connect your phone number and configure your first AI agent to start handling calls.
                </p>
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                  >
                    Talk to onboarding team <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Quick actions</h3>
            <div className="space-y-2.5">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                        {action.title}
                      </div>
                      <div className="text-slate-500 text-xs">{action.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
