import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, UserCheck, TrendingUp, Filter, Zap } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Lead Qualification — Qualify Every Inbound Call Automatically",
  description:
    "AI lead qualification uses AI voice agents to assess every inbound caller in real time — asking qualification questions, scoring leads, and routing hot prospects to your sales team instantly.",
  keywords: [
    "AI lead qualification",
    "automated lead qualification",
    "AI qualify leads phone",
    "AI lead scoring calls",
    "AI sales lead qualification",
    "lead qualification automation",
    "inbound lead qualification AI",
    "AI qualify inbound calls",
  ],
  alternates: { canonical: `${siteConfig.url}/ai-lead-qualification` },
  openGraph: {
    title: "AI Lead Qualification — Qualify Every Inbound Call Automatically",
    description:
      "Stop wasting sales time on unqualified leads. AI voice agents qualify every caller in real time and route hot prospects to your team instantly.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "AI Lead Qualification: Automate Every Inbound Lead Assessment",
  description:
    "AI lead qualification uses AI voice agents to automatically assess and score inbound callers using dynamic qualification questions — routing hot leads to sales immediately.",
  url: `${siteConfig.url}/ai-lead-qualification`,
  author: { "@id": `${siteConfig.url}/#organization` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

const qualificationSteps = [
  { step: "1", title: "Call received", desc: "AI answers the inbound call in under 1 second." },
  { step: "2", title: "Caller greeted & intent identified", desc: "AI detects the caller's purpose through natural conversation." },
  { step: "3", title: "Qualification questions asked", desc: "Dynamic questions based on your BANT, CHAMP, or custom qualification framework." },
  { step: "4", title: "Lead scored in real time", desc: "AI scores the lead based on responses and your predefined criteria." },
  { step: "5", title: "Routing decision made", desc: "Hot leads are transferred live. Others receive follow-up scheduling." },
  { step: "6", title: "Data synced to CRM", desc: "Lead score, transcript, and all captured data pushed to your CRM instantly." },
];

const qualificationCriteria = [
  { category: "Budget", examples: ["Do you have a budget allocated?", "What's your monthly call volume?"] },
  { category: "Authority", examples: ["Are you the decision-maker?", "Who else is involved in this decision?"] },
  { category: "Need", examples: ["What's your biggest pain point with calls?", "How are you handling calls currently?"] },
  { category: "Timeline", examples: ["When are you looking to get started?", "Are you evaluating other options?"] },
];

const benefits = [
  { icon: Filter, title: "Filter 100% of inbound leads", desc: "Every caller is qualified — not just the ones who reach a human." },
  { icon: Zap, title: "Instant hot lead routing", desc: "Hot leads are transferred live to a rep within seconds of qualification." },
  { icon: TrendingUp, title: "Higher conversion rates", desc: "Sales teams close more because they only talk to pre-qualified prospects." },
  { icon: UserCheck, title: "Consistent qualification", desc: "Same criteria applied to every lead — no human inconsistency." },
];

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call answering" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated sales campaigns" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
];

export default function AILeadQualificationPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumb items={[{ label: "AI Lead Qualification", href: "/ai-lead-qualification" }]} />

      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-6">
            AI Lead Qualification
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Qualify Every Inbound Lead{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Before Your Team Picks Up.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10">
            AI voice agents assess every inbound caller in real time — asking your qualification questions, scoring the lead, and routing hot prospects to your sales team instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl px-8 h-12">
                Start Qualifying Leads <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Problem / Definition */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-3xl font-bold text-white mb-6">What is AI lead qualification?</h2>
            <div className="space-y-4">
              <p className="text-slate-200 text-lg leading-relaxed">
                <strong className="text-white">AI lead qualification</strong> is the use of AI voice agents to automatically assess inbound callers against your qualification criteria — identifying which leads are worth your sales team's time before any human interaction occurs.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Instead of every call going to a human rep (who must manually assess each caller), AI voice agents conduct structured qualification conversations in real time. They ask the right questions, score the lead, and either transfer hot prospects immediately or schedule a follow-up.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The result: your sales team spends time only on high-intent, pre-qualified leads — not cold callers, time-wasters, or early-stage inquiries that aren't ready to buy.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How AI lead qualification works
          </h2>
          <ol className="space-y-4">
            {qualificationSteps.map((step) => (
              <li key={step.step} className="flex gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Qualification frameworks */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Qualification criteria your AI agent uses
          </h2>
          <p className="text-slate-400 text-center text-sm mb-10">
            Configure any qualification framework — BANT, CHAMP, MEDDIC, or your own custom criteria.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualificationCriteria.map((criterion) => (
              <div key={criterion.category} className="p-5 rounded-xl bg-[#0A0F1E] border border-white/10">
                <h3 className="text-amber-400 font-bold text-sm mb-3">{criterion.category}</h3>
                <ul className="space-y-2">
                  {criterion.examples.map((ex) => (
                    <li key={ex} className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                      <span className="text-amber-500/60 mt-0.5">›</span>
                      <span>&quot;{ex}&quot;</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Why businesses use AI lead qualification
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore related AI solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
