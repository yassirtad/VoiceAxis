"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Globe,
  Zap,
  MessageSquare,
  Volume2,
  RefreshCw,
} from "lucide-react";

const voiceCapabilities = [
  {
    icon: Mic,
    title: "Natural Voice Output",
    description:
      "Studio-quality AI voices that are clear, warm, and conversational — designed to sound like a real person, not a machine.",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    gradient: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: MessageSquare,
    title: "Human-Like Conversation Flow",
    description:
      "Context-aware dialogues with smart turn-taking, natural pacing, and the ability to follow complex, multi-turn conversations.",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    gradient: "from-violet-500/10 to-violet-600/5 border-violet-500/20 hover:border-violet-500/40",
  },
  {
    icon: RefreshCw,
    title: "Interruption Handling",
    description:
      "Gracefully manages mid-sentence interruptions, topic changes, and caller corrections — just like a skilled human agent.",
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    gradient: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    icon: Zap,
    title: "Real-Time Response",
    description:
      "Sub-second voice response latency delivers fluid, natural-paced conversations with no noticeable processing delay.",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Communicate fluently in 12+ languages with region-appropriate accents — serving global and multilingual customer bases.",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    gradient: "from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40",
  },
  {
    icon: Volume2,
    title: "Consistent Voice Performance",
    description:
      "Every call sounds identical — the same tone, the same quality, the same professionalism. No bad days, no fatigue, no variance.",
    color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    gradient: "from-pink-500/10 to-pink-600/5 border-pink-500/20 hover:border-pink-500/40",
  },
];

const waveformBars = [3, 6, 9, 12, 8, 14, 10, 5, 11, 7, 13, 4, 9, 6, 11, 8, 5, 10, 7, 12];

export function VoiceQualitySection() {
  return (
    <section
      aria-labelledby="voice-quality-heading"
      className="relative py-24 bg-[#07111D] overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            Voice Technology
          </div>
          <h2
            id="voice-quality-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Built for Natural
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Business Conversations.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            VoiceAxis AI voice agents are engineered for real-world business calls — natural, responsive, and consistent across every interaction.
          </p>
        </motion.div>

        {/* Waveform visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-16"
          aria-hidden="true"
        >
          <div className="flex items-end gap-1 h-14 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
            {waveformBars.map((height, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [1, 1.8, 0.6, 1.4, 1] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.07,
                  ease: "easeInOut",
                }}
                className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-cyan-400"
                style={{ height: `${height * 3}px`, transformOrigin: "bottom" }}
              />
            ))}
          </div>
          <div className="ml-4 text-sm text-slate-400 font-medium flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AI Voice Agent · Active Call
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {voiceCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${cap.gradient} border transition-all duration-300`}
              >
                <div className={`inline-flex p-3 rounded-xl border ${cap.color} mb-5`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
