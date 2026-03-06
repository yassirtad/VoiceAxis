import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, Users } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About VoiceAxis — AI Call Center Infrastructure Company",
  description:
    "VoiceAxis builds AI call center infrastructure for modern businesses. 500+ businesses. 10M+ calls automated. Learn about our mission to make AI phone operations accessible to every business.",
  keywords: [
    "VoiceAxis about",
    "AI call center company",
    "AI voice agent platform",
    "AI phone infrastructure",
    "call center AI company",
  ],
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About VoiceAxis — AI Call Center Infrastructure Company",
    description:
      "VoiceAxis builds AI call center infrastructure. 500+ businesses, 10M+ calls automated. From €99/month.",
  },
};

const values = [
  {
    icon: Zap,
    title: "Speed is the product",
    description:
      "Every second a customer waits is a second they consider a competitor. We build for instant response at every touchpoint.",
  },
  {
    icon: Shield,
    title: "Reliability first",
    description:
      "Phone operations are mission-critical. We run on enterprise infrastructure with 99.9% uptime SLA and zero tolerance for failure.",
  },
  {
    icon: Globe,
    title: "Built to scale",
    description:
      "From 100 calls a month to 100,000 — the platform scales automatically without adding headcount or complexity.",
  },
  {
    icon: Users,
    title: "Human when it counts",
    description:
      "AI handles the volume. Humans handle the nuance. Our platform knows when to transfer, when to escalate, and when to let AI close.",
  },
];

const relatedLinks = [
  { label: "AI Call Center", href: "/ai-call-center", desc: "Platform overview & use cases" },
  { label: "Solutions", href: "/solutions", desc: "All 6 automation modules" },
  { label: "Industries", href: "/industries", desc: "Industry-specific solutions" },
  { label: "Pricing", href: "/pricing", desc: "Plans from €99/month" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "About", href: "/about" }]} />
      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            About VoiceAxis
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            We build the infrastructure for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI phone operations.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            VoiceAxis is an AI call center platform that enables businesses to automate inbound and outbound phone operations without replacing the human relationships that matter.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our mission</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Every business that relies on the phone — clinics, agencies, service companies, real estate teams — loses customers every single day because no one answered, or the response came too late.
              </p>
              <p className="text-slate-400 leading-relaxed">
                VoiceAxis exists to fix that. We give businesses enterprise-grade AI phone infrastructure so they can compete at scale without the cost and complexity of a traditional call center.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0A0F1E] border border-white/10">
              <div className="space-y-4">
                {[
                  { label: "Founded", value: "2023" },
                  { label: "Calls Automated", value: "10M+" },
                  { label: "Businesses Served", value: "500+" },
                  { label: "Industries", value: "6+" },
                  { label: "Uptime", value: "99.9%" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How we build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What is an AI call center — structured for AI search */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">What is an AI call center?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              An AI call center is a phone operation system that uses artificial intelligence and natural language processing to handle inbound and outbound calls without human agents. Instead of routing callers to a person, AI voice agents handle the conversation — qualifying leads, answering questions, booking appointments, or escalating to a human when needed.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Unlike traditional IVR (interactive voice response) systems that use touchtone menus, AI call centers use conversational AI to engage naturally with callers — understanding intent, responding dynamically, and completing tasks like scheduling or data collection in real time.
            </p>
            <p className="text-slate-400 leading-relaxed">
              VoiceAxis is AI call center infrastructure — a platform that gives businesses the tools to deploy, manage, and optimize AI voice agents across their entire phone operation.
            </p>
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore the VoiceAxis platform" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
