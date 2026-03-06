"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import { pricingPlans } from "@/config/pricing";

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-24 bg-[#07111D]" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Pricing
          </div>
          <h2 id="pricing-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transparent pricing.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              No surprises.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Start with what you need. Scale as you grow.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  billing === "monthly"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  billing === "yearly"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Yearly
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full transition-all ${
                    billing === "yearly"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {pricingPlans.map((plan, i) => {
            const displayPrice =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyMonthly;
            const billingNote =
              billing === "yearly"
                ? `€${plan.yearlyPrice.toLocaleString()} billed yearly`
                : "per month";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-blue-600/20 to-blue-600/5 border-2 border-blue-500/50 shadow-xl shadow-blue-500/10"
                    : "bg-white/[0.03] border border-white/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{plan.currency}</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.id}-${billing}`}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="text-5xl font-bold text-white"
                      >
                        {displayPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${plan.id}-note-${billing}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="text-xs text-slate-500 mt-1 mb-2"
                    >
                      {billingNote}
                    </motion.p>
                  </AnimatePresence>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="text-slate-300 font-medium">
                      {plan.minutes.toLocaleString()} minutes included
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Overage: {plan.currency}{plan.overage}/min
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations?.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-2.5 opacity-40">
                      <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className={`w-full h-11 font-semibold ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/pricing" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors inline-block">
            View full pricing & comparison table →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
