"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Building2,
  Wrench,
  Shield,
  Car,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { industries } from "@/config/industries";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Building2,
  Wrench,
  Shield,
  Car,
  Briefcase,
};

export function IndustriesSection() {
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
            Industries
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for businesses that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              run on the phone.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From healthcare to automotive, VoiceAxis is purpose-built for industries where every call matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Briefcase;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/industries/${industry.slug}`}>
                  <div className="group h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${industry.color} border border-white/10 mb-5`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {industry.description}
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {industry.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-base font-bold text-white">{stat.value}</div>
                          <div className="text-[11px] text-slate-500 leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
