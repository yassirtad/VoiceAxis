"use client";

import { motion } from "framer-motion";
import { Webhook, Code2, Zap, Calendar, Database } from "lucide-react";
import { integrations } from "@/config/integrations";

const integrationLogos: Record<string, { label: string; bg: string; icon: React.ElementType | null; emoji?: string }> = {
  hubspot: { label: "HubSpot", bg: "bg-orange-500/10 border-orange-500/20 text-orange-400", icon: null, emoji: "🔶" },
  salesforce: { label: "Salesforce", bg: "bg-blue-500/10 border-blue-500/20 text-blue-400", icon: null, emoji: "☁️" },
  gohighlevel: { label: "GoHighLevel", bg: "bg-green-500/10 border-green-500/20 text-green-400", icon: null, emoji: "🎯" },
  zapier: { label: "Zapier", bg: "bg-orange-400/10 border-orange-400/20 text-orange-300", icon: Zap, emoji: "" },
  make: { label: "Make", bg: "bg-violet-500/10 border-violet-500/20 text-violet-400", icon: null, emoji: "⚡" },
  google: { label: "Google Calendar", bg: "bg-red-500/10 border-red-500/20 text-red-400", icon: Calendar, emoji: "" },
  webhook: { label: "Webhooks", bg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400", icon: Webhook, emoji: "" },
  api: { label: "REST API", bg: "bg-slate-400/10 border-slate-400/20 text-slate-300", icon: Code2, emoji: "" },
};

export function IntegrationsSection() {
  return (
    <section className="py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Integrations
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Connects to your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              existing stack.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            VoiceAxis integrates natively with the tools your team already uses — syncing call data, leads, and appointments automatically.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {integrations.map((integration, i) => {
            const logo = integrationLogos[integration.icon];
            const Icon = logo?.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all group"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border text-base mb-4 ${logo?.bg}`}>
                  {Icon ? (
                    <Icon className="w-5 h-5" />
                  ) : (
                    <span>{logo?.emoji}</span>
                  )}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{integration.name}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{integration.description}</div>
                <div className="mt-3">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${logo?.bg}`}>
                    {integration.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20"
        >
          <Database className="w-6 h-6 text-blue-400 mx-auto mb-3" />
          <p className="text-white font-semibold mb-1">Need a custom integration?</p>
          <p className="text-slate-400 text-sm">
            Enterprise plans include custom API access, webhooks, and dedicated integration support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
