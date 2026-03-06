"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  UserCheck,
  CalendarCheck,
  PhoneOutgoing,
  Headphones,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import { coreFeatures } from "@/config/features";

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  UserCheck,
  CalendarCheck,
  PhoneOutgoing,
  HeadphonesIcon: Headphones,
  GitBranch,
};

const gradients = [
  "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40",
  "from-violet-500/10 to-violet-600/5 border-violet-500/20 hover:border-violet-500/40",
  "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40",
  "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40",
  "from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40",
  "from-pink-500/10 to-pink-600/5 border-pink-500/20 hover:border-pink-500/40",
];

const iconColors = [
  "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "text-pink-400 bg-pink-500/10 border-pink-500/20",
];

export function CapabilitiesGrid() {
  return (
    <section className="py-24 bg-[#0A0F1E]" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Platform Capabilities
          </div>
          <h2
            id="capabilities-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            One platform. Every business call,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              fully handled.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Six integrated AI calling modules — from inbound reception to outbound campaigns, lead qualification, booking, support, and workflow automation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || PhoneCall;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${gradients[i]} border transition-all duration-300 cursor-pointer`}
              >
                <div className={`inline-flex p-3 rounded-xl border ${iconColors[i]} mb-5`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                <ul className="space-y-1.5" aria-label={`${feature.title} features`}>
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-500" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
          >
            Explore the full platform →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
