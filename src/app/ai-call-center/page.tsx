import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { coreFeatures } from "@/config/features";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Call Center Platform — Automate Your Entire Phone Operation",
  description:
    "VoiceAxis is an AI call center platform that automates inbound and outbound phone operations for businesses. Replace traditional call centers with AI voice agents.",
  keywords: [
    "AI call center",
    "AI call center platform",
    "AI phone operations",
    "automated call center",
    "AI call center software",
    "call center automation",
    "AI phone system",
    "AI contact center",
  ],
  alternates: {
    canonical: `${siteConfig.url}/ai-call-center`,
  },
  openGraph: {
    title: "AI Call Center Platform — Full Phone Automation",
    description:
      "Replace your call center with AI. Automate inbound handling, outbound campaigns, lead qualification, and appointment booking.",
  },
};

const comparisons = [
  { aspect: "Answer speed", traditional: "Average 45–90 sec hold", ai: "Under 1 second" },
  { aspect: "Availability", traditional: "Business hours only", ai: "24/7, 365 days" },
  { aspect: "Simultaneous calls", traditional: "Limited by headcount", ai: "Unlimited" },
  { aspect: "Cost per call", traditional: "€3–8 per call", ai: "€0.12–0.18/min" },
  { aspect: "Consistency", traditional: "Varies by agent", ai: "100% consistent" },
  { aspect: "Scaling", traditional: "Hire, train, manage", ai: "Instant, on-demand" },
  { aspect: "Scalability", traditional: "Hire more staff", ai: "Instant, unlimited" },
];

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound answering" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated sales campaigns" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound lead" },
];

export default function AICallCenterPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "AI Call Center", href: "/ai-call-center" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VoiceAxis AI Call Center",
            applicationCategory: "BusinessApplication",
            description:
              "AI call center platform that automates inbound and outbound phone operations using AI voice agents. Replaces traditional call centers for businesses.",
            url: "https://voiceaxis.com/ai-call-center",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            AI Call Center Platform
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The AI call center for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              modern businesses.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Replace your traditional call center with AI voice agents that handle inbound and outbound calls automatically — 24/7, at scale, without the overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/25 px-8 h-12"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 h-12 px-8"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is an AI call center */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">What is an AI call center?</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            An AI call center is a phone operation system that uses artificial intelligence — specifically, AI voice agents powered by natural language processing — to handle inbound and outbound business calls without human agents. Instead of hiring, training, and managing call center staff, businesses deploy AI voice agents that handle conversations automatically.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            AI call centers differ from traditional call centers in three fundamental ways: they operate 24/7 without breaks, they scale instantly to handle unlimited simultaneous calls, and they cost a fraction of human staffing while maintaining consistent quality.
          </p>
          <p className="text-slate-400 leading-relaxed">
            VoiceAxis is AI call center infrastructure — a complete platform for deploying, managing, and optimizing AI voice agents across your entire business phone operation.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI call center vs. traditional call center
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-slate-400 text-sm font-medium">Aspect</th>
                  <th className="text-center p-4 text-slate-400 text-sm font-medium">Traditional Call Center</th>
                  <th className="text-center p-4 text-blue-400 text-sm font-bold">VoiceAxis AI Call Center</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.aspect} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                    <td className="p-4 text-slate-300 text-sm font-medium">{row.aspect}</td>
                    <td className="p-4 text-center text-slate-400 text-sm">{row.traditional}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {row.ai}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Capabilities summary */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How AI call automation works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((feature) => (
              <div key={feature.id} className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore AI call center capabilities" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
