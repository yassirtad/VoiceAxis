"use client";

import { motion } from "framer-motion";
import { PhoneCall, Settings, Zap } from "lucide-react";
import { howItWorksSteps } from "@/config/features";

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  Settings,
  Zap,
};

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#07111D]" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            How It Works
          </div>
          <h2 id="how-it-works-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Up and running{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              in three steps.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Connect your phone system, configure your workflows, and let AI voice agents handle every call automatically.
          </p>
        </motion.div>

        {/* Desktop: horizontal 3-column */}
        <div className="hidden lg:grid grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-[3.25rem] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-blue-500/50" />

          {howItWorksSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || PhoneCall;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center px-8"
              >
                {/* Step circle */}
                <div className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6">
                  <Icon className="w-5 h-5 text-white" />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#07111D] border-2 border-blue-400 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-blue-400">{i + 1}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  <span className="text-blue-400 text-sm font-medium block mb-1">Step {i + 1}</span>
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-6">
          {howItWorksSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || PhoneCall;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {i < howItWorksSteps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-blue-500/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-8">
                  <span className="text-blue-400 text-xs font-medium">Step {i + 1}</span>
                  <h3 className="text-white font-bold text-lg mb-2 mt-0.5">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
