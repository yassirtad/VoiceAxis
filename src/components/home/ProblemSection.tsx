"use client";

import { motion } from "framer-motion";
import { PhoneMissed, Clock, Users, FileX, MessageSquareOff } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed calls = lost revenue",
    description:
      "Every unanswered call is a lost opportunity. Businesses miss 30–60% of inbound calls during peak hours and outside business hours.",
    stat: "62%",
    statLabel: "of callers never call back",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: Clock,
    title: "Slow response drives leads away",
    description:
      "Speed-to-lead is everything. Leads that receive a response within 5 minutes are 100x more likely to convert than those contacted after 30 minutes.",
    stat: "100x",
    statLabel: "more likely to convert in 5 min",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Users,
    title: "Human agents don't scale",
    description:
      "Hiring, training, and managing call center staff is expensive, slow, and inconsistent. Staff turnover creates constant gaps in coverage.",
    stat: "$4,000",
    statLabel: "avg monthly cost per agent",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: FileX,
    title: "Unqualified leads waste time",
    description:
      "Sales teams spend hours on unqualified leads. Without automated qualification, your best reps are burning time on the wrong prospects.",
    stat: "73%",
    statLabel: "of leads never qualified",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: MessageSquareOff,
    title: "No follow-up system",
    description:
      "Most businesses have no structured follow-up process. Without consistent follow-up, deals fall through the cracks and never close.",
    stat: "80%",
    statLabel: "of sales need 5+ follow-ups",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-4">
            The Problem
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Most businesses lose customers
            <span className="text-red-400"> on the phone.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            While you're busy running your business, customers are calling — and leaving when no one answers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative p-6 rounded-xl border bg-gradient-to-br from-white/[0.02] to-transparent border-white/10 hover:border-white/20 transition-colors group ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${problem.bg} border mb-4`}>
                  <Icon className={`w-5 h-5 ${problem.color}`} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{problem.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {problem.description}
                </p>
                <div className={`flex items-baseline gap-2 pt-4 border-t border-white/5`}>
                  <span className={`text-2xl font-bold ${problem.color}`}>{problem.stat}</span>
                  <span className="text-xs text-slate-500">{problem.statLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
