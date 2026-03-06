import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { LoginForm } from "@/components/auth/LoginForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Login — VoiceAxis",
  description: "Sign in to your VoiceAxis account to access your AI call center dashboard.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
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
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-slate-400 text-sm">
              Sign in to your account to access your dashboard
            </p>
          </div>

          {/* Google */}
          <Suspense>
            <GoogleButton callbackUrl="/dashboard" label="Continue with Google" />
          </Suspense>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-500 text-xs font-medium">or continue with email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Email form */}
          <Suspense>
            <LoginForm isSignup={false} />
          </Suspense>

          {/* Forgot password */}
          <div className="mt-4 text-center">
            <Link
              href="/contact"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Forgot your password? Contact support →
            </Link>
          </div>
        </div>

        {/* Sign up link */}
        <p className="text-center mt-6 text-sm text-slate-500">
          Don&apos;t have an account yet?{" "}
          <Link href="/pricing" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            View plans →
          </Link>
        </p>
      </div>
    </div>
  );
}
