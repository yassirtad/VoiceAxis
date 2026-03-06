import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/config/pricing";

export const metadata: Metadata = {
  title: "Subscription Activated — VoiceAxis",
  description: "Your VoiceAxis subscription is now active. Create your account to access your AI call center dashboard.",
  robots: { index: false, follow: false },
};

interface SuccessPageProps {
  searchParams: Promise<{ plan?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { plan: planId } = await searchParams;
  const plan = pricingPlans.find((p) => p.id === planId) ?? null;

  return (
    <div className="min-h-screen bg-[#0A0F1E] flex flex-col items-center justify-center px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative w-full max-w-lg text-center">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-12 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <PhoneCall className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Voice<span className="text-blue-400">Axis</span>
          </span>
        </Link>

        {/* Animated checkmark */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-xl" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Subscription activated!
        </h1>

        {plan ? (
          <div className="mb-6">
            <p className="text-slate-300 text-lg mb-4">
              Welcome to <span className="text-white font-semibold">VoiceAxis {plan.name}</span>.
              Your AI call center is ready.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm">
              <span className="text-slate-400">Plan:</span>
              <span className="text-white font-semibold">{plan.name}</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-slate-400">Minutes:</span>
              <span className="text-white font-semibold">{plan.minutes.toLocaleString()}/mo</span>
            </div>
          </div>
        ) : (
          <p className="text-slate-300 text-lg mb-6">
            Your AI call center subscription is now active. Set up your account to get started.
          </p>
        )}

        {/* Steps */}
        <div className="mb-10 text-left bg-white/[0.03] border border-white/10 rounded-2xl p-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Next steps
          </p>
          <ol className="space-y-3">
            {[
              { step: "1", text: "Create your account or log in below" },
              { step: "2", text: "Access your AI call center dashboard" },
              { step: "3", text: "Configure your AI voice agents and workflows" },
              { step: "4", text: "Connect your phone number — you're live!" },
            ].map((item) => (
              <li key={item.step} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 font-bold text-xs flex-shrink-0">
                  {item.step}
                </span>
                {item.text}
              </li>
            ))}
          </ol>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/25 px-8 h-12 font-semibold w-full sm:w-auto"
            >
              Create Account <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 h-12 px-8 font-semibold w-full sm:w-auto"
            >
              Log In
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          Confirmation will be sent to your email. Check spam if not received.
        </p>
      </div>
    </div>
  );
}
