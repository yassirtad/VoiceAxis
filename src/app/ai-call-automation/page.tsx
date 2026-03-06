import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Workflow, Clock, DollarSign, BarChart2 } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Call Automation — Automate Business Phone Calls with AI",
  description:
    "AI call automation uses AI voice agents to handle inbound and outbound business calls automatically. No hold times, no missed calls, no manual follow-up. Learn how it works.",
  keywords: [
    "AI call automation",
    "automated call handling",
    "AI phone call automation",
    "business call automation",
    "automate business calls",
    "call workflow automation",
    "AI automated calling",
    "phone process automation",
  ],
  alternates: { canonical: `${siteConfig.url}/ai-call-automation` },
  openGraph: {
    title: "AI Call Automation — Automate Every Business Phone Call",
    description:
      "AI call automation replaces manual call handling with AI voice agents. Inbound, outbound, follow-up — fully automated.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "AI Call Automation: How to Automate Business Phone Calls",
  description:
    "AI call automation uses AI voice agents to automatically handle inbound and outbound business calls — qualifying leads, booking appointments, and following up without human intervention.",
  url: `${siteConfig.url}/ai-call-automation`,
  author: { "@id": `${siteConfig.url}/#organization` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

const benefits = [
  { icon: Clock, stat: "0s", label: "Hold time", desc: "AI answers instantly. No queues, no wait, no frustration." },
  { icon: Workflow, stat: "100%", label: "Calls handled", desc: "Every inbound and outbound call is processed automatically." },
  { icon: DollarSign, stat: "80%", label: "Cost reduction", desc: "Compared to equivalent human call center staffing." },
  { icon: BarChart2, stat: "24/7", label: "Operations", desc: "Weekdays, weekends, holidays — AI never takes a day off." },
];

const workflowTypes = [
  {
    title: "Inbound call automation",
    desc: "AI answers every incoming call, routes it to the right workflow, qualifies the caller, and completes tasks like appointment booking or support resolution — all without a human.",
    steps: ["Call received → AI answers in <1s", "Caller intent detected", "Workflow triggered", "Task completed or human transfer"],
  },
  {
    title: "Outbound call automation",
    desc: "AI dials your prospect or customer lists, delivers personalized conversations, qualifies interest, and books meetings — at scale and on any schedule you define.",
    steps: ["Contact list loaded", "AI dials and delivers script", "Lead qualified / meeting booked", "Outcome logged to CRM"],
  },
  {
    title: "Follow-up automation",
    desc: "AI automatically follows up on missed calls, quote requests, form submissions, or dormant leads — reaching out at the optimal time with the right message.",
    steps: ["Trigger event detected", "AI initiates outbound call", "Conversation and qualification", "Next action scheduled"],
  },
];

const relatedLinks = [
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound answering" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound lead" },
];

export default function AICallAutomationPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumb items={[{ label: "AI Call Automation", href: "/ai-call-automation" }]} />

      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/25 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
            AI Call Automation
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Every{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Business Phone Call.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10">
            AI call automation replaces manual phone handling with AI voice agents that answer, qualify, book, and follow up — automatically, around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl px-8 h-12">
                Automate Your Calls <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* What is AI call automation */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-3xl font-bold text-white mb-6">What is AI call automation?</h2>
            <div className="space-y-4">
              <p className="text-slate-200 text-lg leading-relaxed">
                <strong className="text-white">AI call automation</strong> is the use of artificial intelligence — specifically AI voice agents powered by natural language processing — to handle business phone calls without human operators. It encompasses both inbound automation (answering and processing incoming calls) and outbound automation (dialing and conducting outgoing calls at scale).
              </p>
              <p className="text-slate-300 leading-relaxed">
                Rather than routing callers to an available human agent, AI call automation uses AI voice agents that understand natural speech, hold real conversations, complete tasks like scheduling and data capture, and connect callers to humans only when genuinely needed.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Businesses use AI call automation to eliminate hold times, recover missed revenue from unanswered calls, scale outbound campaigns without additional headcount, and ensure consistent, compliant customer interactions every time.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            The business impact of AI call automation
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.label} className="p-6 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="inline-flex w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{benefit.stat}</div>
                  <div className="text-sm font-semibold text-slate-300 mb-1.5">{benefit.label}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow types */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Three types of call automation workflows
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {workflowTypes.map((wf) => (
              <div key={wf.title} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-white font-bold text-lg mb-3">{wf.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{wf.desc}</p>
                <ol className="space-y-2">
                  {wf.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits list */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Benefits of AI call automation
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Eliminates hold times entirely",
              "Answers every call in under 1 second",
              "Handles unlimited simultaneous calls",
              "Operates 24/7 without staffing costs",
              "Consistent, on-brand conversations every time",
              "Instant CRM sync after every call",
              "Qualifies leads before your team engages",
              "Recovers missed revenue from unanswered calls",
              "Scales outbound campaigns without hiring",
              "Reduces cost-per-acquisition significantly",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-200 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore AI call automation solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
