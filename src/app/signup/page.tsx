import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, CheckCircle2 } from "lucide-react";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { LoginForm } from "@/components/auth/LoginForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Account — VoiceAxis",
  description: "Create your VoiceAxis account to access your AI call center dashboard.",
  robots: { index: false, follow: false },
};

const perks = [
  "AI call center dashboard",
  "Call recordings & transcripts",
  "Lead qualification reports",
  "CRM sync & analytics",
];

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] flex flex-col items-center justify-center px-4 py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-10 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <PhoneCall className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Voice<span className="text-blue-400">Axis</span>
          </span>
        </Link>

        {/* Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-slate-400 text-sm">
              Your subscription is active. Set up your account to get started.
            </p>
          </div>

          {/* What you get */}
          <div className="mb-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <p className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
              Included in your plan
            </p>
            <ul className="space-y-2">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Google */}
          <Suspense>
            <GoogleButton callbackUrl="/dashboard" label="Sign up with Google" />
          </Suspense>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-500 text-xs font-medium">or use email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Email form */}
          <Suspense>
            <LoginForm isSignup={true} />
          </Suspense>
        </div>

        {/* Login link */}
        <p className="text-center mt-6 text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Sign in →
          </Link>
        </p>
      </div>
    </div>
  );
}
