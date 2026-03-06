"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Zap, Activity } from "lucide-react";

const stats = [
  { value: "10M+", label: "Calls handled", icon: Zap },
  { value: "12+", label: "Languages supported", icon: Globe },
  { value: "99.9%", label: "Platform uptime SLA", icon: Shield },
  { value: "<1s", label: "Voice response latency", icon: Activity },
];

const integrationLogos = [
  "HubSpot",
  "Salesforce",
  "GoHighLevel",
  "Zapier",
  "Make",
  "Google Calendar",
];

export function TrustBar() {
  return (
    <section
      aria-label="Platform statistics and integrations"
      className="py-14 bg-[#07111D] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-3 mx-auto">
                  <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Integrates with */}
        <div className="text-center">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">
            Connects with your existing business tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {integrationLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold text-slate-500 hover:text-slate-300 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
