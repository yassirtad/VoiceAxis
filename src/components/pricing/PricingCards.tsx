"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import { pricingPlans, comparisonFeatures } from "@/config/pricing";

export function PricingCards() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      {/* Billing toggle */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4 p-1.5 rounded-full bg-white/5 border border-white/10">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              billing === "monthly"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
              billing === "yearly"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Yearly
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all ${
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

      {/* Plan cards */}
      <div className="grid lg:grid-cols-3 gap-6 mb-20">
        {pricingPlans.map((plan, i) => {
          const displayPrice =
            billing === "monthly" ? plan.monthlyPrice : plan.yearlyMonthly;
          const billingNote =
            billing === "yearly"
              ? `€${plan.yearlyPrice.toLocaleString()} billed yearly`
              : "per month";

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-600/20 to-blue-600/5 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10"
                  : "bg-white/[0.03] border border-white/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500 text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-white font-bold text-2xl mb-2">{plan.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold text-white">{plan.currency}</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${plan.id}-${billing}`}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="text-6xl font-bold text-white"
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
                    transition={{ duration: 0.2 }}
                    className="text-xs text-slate-500 mb-2"
                  >
                    {billingNote}
                  </motion.p>
                </AnimatePresence>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <span className="text-slate-200 font-medium">
                    {plan.minutes.toLocaleString()} minutes included
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  Overage: {plan.currency}{plan.overage}/min
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
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
                  className={`w-full h-12 font-semibold text-base ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full" aria-label="Plan feature comparison">
            <thead>
              <tr className="border-b border-white/10">
                <th scope="col" className="text-left p-4 text-slate-400 text-sm font-medium">Feature</th>
                {pricingPlans.map((plan) => (
                  <th key={plan.id} scope="col" className="text-center p-4 text-white font-bold text-sm">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                >
                  <td className="p-4 text-slate-300 text-sm">{row.feature}</td>
                  {[row.starter, row.growth, row.enterprise].map((has, j) => (
                    <td key={j} className="p-4 text-center">
                      {has ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" aria-label="Included" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
