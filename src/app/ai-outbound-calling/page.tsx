import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, TrendingUp, PhoneOutgoing, Target, BarChart3 } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Outbound Calling — Automated Sales Call Campaigns",
  description:
    "Run automated outbound call campaigns with AI voice agents. Prospect, follow up, re-engage, and book appointments at scale without a sales team.",
  keywords: [
    "AI outbound calling",
    "automated outbound calls",
    "AI sales calls",
    "AI cold calling",
    "outbound call automation",
    "AI prospecting calls",
    "automated follow-up calls",
    "AI sales campaign",
  ],
  alternates: {
    canonical: `${siteConfig.url}/ai-outbound-calling`,
  },
};

const useCases = [
  {
    icon: TrendingUp,
    title: "Lead follow-up campaigns",
    description: "Automatically follow up on inbound leads within seconds of form submission — before they contact a competitor.",
    stat: "5x faster than manual follow-up",
  },
  {
    icon: PhoneOutgoing,
    title: "Sales prospecting",
    description: "Dial through prospect lists at scale, qualify interest, and book discovery calls with your sales team.",
    stat: "10x the outreach capacity",
  },
  {
    icon: Target,
    title: "Re-engagement campaigns",
    description: "Re-activate dormant leads and past customers with personalized outbound campaigns at the right moment.",
    stat: "30% average re-engagement rate",
  },
  {
    icon: BarChart3,
    title: "Appointment reminders",
    description: "Reduce no-shows with automated pre-appointment calls and confirmation workflows.",
    stat: "60% reduction in no-shows",
  },
];

const features = [
  "Automated dial sequences with intelligent retry logic",
  "Personalized scripts per contact based on CRM data",
  "Real-time call outcome tracking and logging",
  "Warm transfers to human agents for hot leads",
  "Compliance controls (DNC lists, time zone restrictions)",
  "CRM sync for every call outcome",
  "A/B testing for scripts and timing",
  "Campaign analytics and performance reports",
];

const faqs = [
  {
    q: "What is AI outbound calling?",
    a: "AI outbound calling uses AI voice agents to make automated phone calls on behalf of your business — for sales prospecting, lead follow-up, appointment reminders, and re-engagement campaigns. The AI conducts natural conversations, qualifies leads, and transfers hot prospects to human sales reps.",
  },
  {
    q: "Is AI outbound calling legal and compliant?",
    a: "Yes, when configured correctly. VoiceAxis includes built-in compliance tools: DNC (Do Not Call) list management, time zone restrictions, call frequency limits, and consent tracking. Customers are responsible for ensuring their campaigns comply with applicable telemarketing laws (TCPA, GDPR, etc.).",
  },
  {
    q: "How does AI outbound calling compare to a sales team?",
    a: "AI outbound calling dramatically increases reach and speed. An AI agent can make hundreds of calls simultaneously while a human agent handles one at a time. The AI handles the top-of-funnel (initial reach, qualification) so your human sales team focuses only on high-intent conversations.",
  },
];

const relatedLinks = [
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound lead" },
  { label: "AI Call Automation", href: "/ai-call-automation", desc: "How call automation works" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
];

export default function AIOutboundCallingPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "AI Outbound Calling", href: "/ai-outbound-calling" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VoiceAxis AI Outbound Calling",
            description:
              "AI outbound calling platform for automated sales campaigns, lead follow-up, prospecting, and appointment setting.",
            url: "https://voiceaxis.com/ai-outbound-calling",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-6">
            AI Outbound Calling
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Outbound sales calls,
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              fully automated by AI.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
            Launch outbound call campaigns at scale — prospecting, follow-up, and re-engagement — without adding sales headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white shadow-xl px-8 h-12">
                Start Outbound Campaigns <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Use cases */}
      <section className="py-20 bg-[#07111D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What AI outbound calling automates
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div key={useCase.title} className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{useCase.title}</h3>
                      <span className="text-xs text-violet-400 font-medium">{useCase.stat}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Platform capabilities</h2>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-[#07111D] border border-white/10">
              <h3 className="text-white font-bold mb-4 text-sm">Campaign performance snapshot</h3>
              <div className="space-y-4">
                {[
                  { label: "Calls dialed", value: "1,240", change: "+12% vs last week" },
                  { label: "Contact rate", value: "34%", change: "Industry avg: 18%" },
                  { label: "Qualified leads", value: "87", change: "+23 from last week" },
                  { label: "Appointments booked", value: "41", change: "€14,350 pipeline" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-slate-400 text-xs">{item.label}</div>
                      <div className="text-white font-bold text-lg">{item.value}</div>
                    </div>
                    <span className="text-emerald-400 text-xs font-medium">{item.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">AI Outbound Calling FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#0A0F1E] border border-white/10">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore the full AI call center platform" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
