"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { platformStats } from "@/config/features";

const solutionPoints = [
  "Answers every call instantly — 24/7, no exceptions",
  "Qualifies leads with dynamic conversation flows",
  "Books appointments directly in the call",
  "Runs outbound campaigns at scale, automatically",
  "Transfers to human agents when needed",
  "Syncs all data to your CRM in real time",
];

export function SolutionSection() {
  return (
    <section className="relative py-24 bg-[#07111D]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Platform diagram */}
            <div className="relative bg-[#0D1526]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                  VoiceAxis Platform
                </div>
              </div>

              {/* Inbound / Outbound grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                  <div className="text-2xl mb-2">📥</div>
                  <div className="text-sm font-semibold text-white">Inbound</div>
                  <div className="text-xs text-slate-400 mt-1">Reception & Support</div>
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-center">
                  <div className="text-2xl mb-2">📤</div>
                  <div className="text-sm font-semibold text-white">Outbound</div>
                  <div className="text-xs text-slate-400 mt-1">Sales & Campaigns</div>
                </div>
              </div>

              {/* Core engine */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 text-center mb-6">
                <div className="text-sm font-bold text-white mb-1">AI Voice Engine</div>
                <div className="text-xs text-slate-400">Natural language · Multi-language · Custom voice</div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-3 gap-3">
                {["Lead Data", "Transcripts", "Analytics"].map((item) => (
                  <div
                    key={item}
                    className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-center"
                  >
                    <div className="text-xs text-slate-300 font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {platformStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0D1526]/80 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
              The Solution
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              AI Phone Operations{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                System
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              VoiceAxis replaces manual call handling with an AI phone operations platform that automates every touchpoint — from the first ring to the final follow-up. No hold times. No missed calls. No manual work.
            </p>

            <ul className="space-y-3 mb-10">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/solutions">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
              >
                Explore the Platform
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
