import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, PhoneCall, X } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Phone System for Business — Replace Your Old Phone Setup with AI",
  description:
    "VoiceAxis is an AI phone system that automates inbound and outbound calls for businesses. No hardware, no hold music, no missed calls. AI voice agents handle every call automatically.",
  keywords: [
    "AI phone system",
    "AI phone system for business",
    "AI business phone",
    "automated phone system",
    "AI phone answering system",
    "smart phone system business",
    "virtual AI phone system",
    "replace phone system AI",
  ],
  alternates: { canonical: `${siteConfig.url}/ai-phone-system` },
  openGraph: {
    title: "AI Phone System for Business — Powered by AI Voice Agents",
    description:
      "Replace your old phone system with AI. VoiceAxis answers every call, routes intelligently, and automates your entire phone operation.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "VoiceAxis AI Phone System",
  description:
    "An AI-powered business phone system that automates inbound and outbound calls using AI voice agents. No hardware required, instant setup, 24/7 operation.",
  url: `${siteConfig.url}/ai-phone-system`,
  brand: { "@id": `${siteConfig.url}/#organization` },
  category: "Business Software / Phone System",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "99",
    highPrice: "890",
    priceCurrency: "EUR",
    offerCount: "3",
  },
};

const comparison = [
  { feature: "Answers calls 24/7", traditional: false, ai: true },
  { feature: "Zero hold time", traditional: false, ai: true },
  { feature: "Unlimited simultaneous calls", traditional: false, ai: true },
  { feature: "AI lead qualification", traditional: false, ai: true },
  { feature: "Automatic appointment booking", traditional: false, ai: true },
  { feature: "Outbound calling campaigns", traditional: false, ai: true },
  { feature: "CRM sync after every call", traditional: false, ai: true },
  { feature: "Natural voice conversations", traditional: false, ai: true },
  { feature: "Call transcripts & summaries", traditional: false, ai: true },
  { feature: "No hardware or setup fees", traditional: false, ai: true },
  { feature: "Inbound call routing", traditional: true, ai: true },
  { feature: "Voicemail", traditional: true, ai: true },
];

const relatedLinks = [
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound answering" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
  { label: "AI Call Automation", href: "/ai-call-automation", desc: "How call automation works" },
];

export default function AIPhoneSystemPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumb items={[{ label: "AI Phone System", href: "/ai-phone-system" }]} />

      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            AI Phone System
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Business Phone System,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Powered by AI.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10">
            Replace your outdated phone system with an AI-powered platform that answers every call, qualifies every lead, and books every appointment — automatically, 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl px-8 h-12">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 h-12 px-8">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-3xl font-bold text-white mb-6">What is an AI phone system?</h2>
            <div className="space-y-4">
              <p className="text-slate-200 text-lg leading-relaxed">
                An <strong className="text-white">AI phone system</strong> is a business phone platform that uses artificial intelligence — specifically AI voice agents — to handle inbound and outbound calls automatically, replacing or augmenting traditional phone infrastructure.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Unlike a traditional phone system (PBX, VoIP, or cloud phone) that routes calls to human staff, an AI phone system routes calls to AI voice agents that conduct natural conversations, complete tasks, and only involve humans when necessary.
              </p>
              <p className="text-slate-400 leading-relaxed">
                VoiceAxis is an AI phone system built for businesses that rely on the phone for sales, service, and scheduling. It requires no hardware, integrates with your existing CRM and calendar tools, and gets you up and running quickly without complex configurations.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI phone system vs. traditional phone system
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full" aria-label="Feature comparison: AI phone system vs traditional">
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="text-left p-4 text-slate-400 text-sm font-medium">Feature</th>
                  <th scope="col" className="text-center p-4 text-slate-400 text-sm font-medium">Traditional Phone System</th>
                  <th scope="col" className="text-center p-4 text-emerald-400 text-sm font-bold">VoiceAxis AI Phone System</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                    <td className="p-4 text-slate-300 text-sm">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.traditional ? (
                        <CheckCircle2 className="w-4 h-4 text-slate-400 mx-auto" aria-label="Supported" />
                      ) : (
                        <X className="w-4 h-4 text-red-500/60 mx-auto" aria-label="Not supported" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" aria-label="Supported" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Everything in a modern AI phone system
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "AI voice agents", desc: "Natural-sounding AI that conducts real conversations, not robotic menus." },
              { title: "Inbound + outbound", desc: "Handle incoming calls and launch outbound campaigns from one platform." },
              { title: "Number porting", desc: "Keep your existing phone numbers — we port them to the AI platform." },
              { title: "Call routing", desc: "Intelligent routing based on caller intent, not just touchtone input." },
              { title: "CRM integration", desc: "Sync every call, lead, and appointment to HubSpot, Salesforce, and more." },
              { title: "Real-time analytics", desc: "Call volumes, outcomes, lead quality, and ROI — all in one dashboard." },
            ].map((feature) => (
              <div key={feature.title} className="p-5 rounded-xl bg-[#0A0F1E] border border-white/10">
                <h3 className="text-white font-semibold mb-1.5 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore related AI phone solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
