"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Star } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-24 bg-[#07111D] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-blue-500/30 mb-8 mx-auto"
            aria-hidden="true"
          >
            <PhoneCall className="w-7 h-7 text-white" />
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
            <span className="text-slate-400 text-sm ml-1">Trusted by 500+ businesses</span>
          </div>

          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Start automating your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              business calls today.
            </span>
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Deploy AI voice agents that answer every call, qualify every lead, and book every appointment — automatically.
          </p>
          <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto">
            Join 500+ healthcare clinics, real estate teams, home service companies, and agencies already running AI phone operations with VoiceAxis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-500/35 transition-all px-8 h-13 text-base font-semibold"
                aria-label="Get started with VoiceAxis"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 h-13 px-8 text-base backdrop-blur-sm"
                aria-label="View pricing plans"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
