"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    icon: DollarSign,
    label: "Average service job value",
    value: "€350",
    color: "text-emerald-400",
  },
  {
    icon: Phone,
    label: "Missed calls per week",
    value: "10",
    color: "text-red-400",
  },
  {
    icon: TrendingUp,
    label: "Potential lost revenue / month",
    value: "€14,000+",
    color: "text-amber-400",
  },
];

export function ROISection() {
  return (
    <section className="py-24 bg-[#07111D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
              ROI Calculator
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Every missed call is{" "}
              <span className="text-red-400">real money</span> walking away.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              For most service businesses, a single missed call represents hundreds of euros in lost revenue. At 10 missed calls per week, that's over €14,000 in monthly opportunity cost — gone.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              VoiceAxis AI call automation captures every one of those opportunities automatically — answering in under a second, qualifying the lead, and booking the appointment before they call a competitor.
            </p>
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
              >
                Calculate Your ROI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Right: Calculator visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#0D1526]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Revenue Recovery Estimate
              </h3>

              <div className="space-y-5 mb-8">
                {metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Icon className={`w-4 h-4 ${metric.color}`} />
                        </div>
                        <span className="text-slate-300 text-sm">{metric.label}</span>
                      </div>
                      <span className={`font-bold text-lg ${metric.color}`}>{metric.value}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 pt-6 mb-6">
                <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20">
                  <div>
                    <div className="text-emerald-400 text-xs font-medium mb-1">With VoiceAxis</div>
                    <div className="text-white font-bold text-base">Revenue Recovered Monthly</div>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">€14k+</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-slate-400 text-xs text-center">
                  Based on 10 missed calls/week × €350 avg job value. Most businesses see 30–100% call capture improvement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
