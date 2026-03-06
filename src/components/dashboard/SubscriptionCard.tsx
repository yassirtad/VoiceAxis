import { CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/config/pricing";

interface SubscriptionCardProps {
  planId?: string;
}

export function SubscriptionCard({ planId = "growth" }: SubscriptionCardProps) {
  const plan = pricingPlans.find((p) => p.id === planId) ?? pricingPlans[1];

  return (
    <div className="bg-gradient-to-b from-blue-600/15 to-blue-600/5 border border-blue-500/30 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            Current Plan
          </div>
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400">Active</span>
        </div>
      </div>

      {/* Usage bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-slate-400">Minutes used this month</span>
          <span className="text-white font-semibold">
            0 / {plan.minutes.toLocaleString()}
          </span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
            style={{ width: "0%" }}
          />
        </div>
        <p className="text-xs text-slate-600 mt-1.5">
          Overage: {plan.currency}{plan.overage}/min after {plan.minutes.toLocaleString()} min
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {plan.features.slice(0, 5).map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link href="/pricing">
        <Button
          variant="outline"
          className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 h-9 text-sm"
        >
          <Zap className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
          Upgrade Plan
        </Button>
      </Link>
    </div>
  );
}
