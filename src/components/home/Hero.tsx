"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Zap } from "lucide-react";

const flowSteps = [
  { icon: "📞", label: "Customer Call", color: "from-blue-500/20 to-blue-600/10 border-blue-500/30" },
  { icon: "🤖", label: "AI Voice Agent", color: "from-violet-500/20 to-violet-600/10 border-violet-500/30" },
  { icon: "✅", label: "Lead Qualified", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30" },
  { icon: "📅", label: "Appointment Booked", color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30" },
];

export function Hero() {
  return (
    <section
      aria-label="AI Call Center Platform hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1E]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6"
              aria-label="Category: AI Call Center Infrastructure"
            >
              <Zap className="w-3 h-3" aria-hidden="true" />
              AI Call Center Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
            >
              AI Call Center{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                for Modern Businesses.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg"
            >
              Automate inbound calls, qualify leads, book appointments, and run outbound campaigns with AI voice agents — 24/7, with zero hold time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-500/35 transition-all px-6 h-12 font-semibold"
                  aria-label="Get started with VoiceAxis"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 h-12 px-6 backdrop-blur-sm"
                  aria-label="View pricing plans"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>

            {/* Platform stats */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 max-w-sm"
            >
              {[
                { value: "24/7", label: "Always On" },
                { value: "< 1s", label: "Answer Speed" },
                { value: "10M+", label: "Calls Handled" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="text-xs text-slate-500 mt-0.5">{stat.label}</dt>
                  <dd className="text-xl font-bold text-white">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: Animated Flow */}
          <div className="relative" aria-label="AI call automation flow visualization" role="img">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-[#0D1526]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-xs text-emerald-400 font-medium">LIVE</span>
                  </div>
                  <span className="text-xs text-slate-500">AI Operations Center</span>
                </div>

                <ol className="space-y-3" aria-label="Call automation steps">
                  {flowSteps.map((step, i) => (
                    <motion.li
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                      className="relative"
                    >
                      <div className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${step.color} border`}>
                        <div className="text-2xl" role="img" aria-label={step.label}>{step.icon}</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">{step.label}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="h-1 bg-white/20 rounded-full flex-1" role="progressbar" aria-label={`Step ${i + 1} progress`}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: i === flowSteps.length - 1 ? "100%" : `${60 + i * 10}%` }}
                                transition={{ duration: 1, delay: 1 + i * 0.2 }}
                                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                              />
                            </div>
                            <span className="text-xs text-slate-400">
                              {i === flowSteps.length - 1 ? "✓" : `${1 + i}s`}
                            </span>
                          </div>
                        </div>
                      </div>
                      {i < flowSteps.length - 1 && (
                        <div className="flex justify-center my-1" aria-hidden="true">
                          <div className="w-px h-3 bg-gradient-to-b from-white/20 to-transparent" />
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ol>

                <dl className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  {[
                    { value: "0s", label: "Hold Time" },
                    { value: "24/7", label: "Available" },
                    { value: "100%", label: "Answered" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <dt className="text-xs text-slate-500 order-2">{stat.label}</dt>
                      <dd className="text-xl font-bold text-white order-1">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-emerald-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                aria-label="Appointment booked confirmation"
              >
                Appointment Booked ✓
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-[#0D1526] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                aria-label="Leads captured today counter"
              >
                <PhoneCall className="w-3 h-3 text-blue-400" aria-hidden="true" />
                +48 leads captured today
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
