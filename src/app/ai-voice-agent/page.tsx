import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Mic, Brain, PhoneCall, Volume2 } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Voice Agent — What It Is & How It Automates Business Calls",
  description:
    "An AI voice agent is an AI-powered system that conducts real phone conversations autonomously. Discover how AI voice agents replace call center staff and automate inbound and outbound calls.",
  keywords: [
    "AI voice agent",
    "AI voice agents",
    "what is an AI voice agent",
    "AI voice agent for business",
    "AI voice agent platform",
    "AI phone agent",
    "conversational AI voice",
    "AI voice calling",
    "automated voice agent",
  ],
  alternates: { canonical: `${siteConfig.url}/ai-voice-agent` },
  openGraph: {
    title: "AI Voice Agent — What It Is & How It Works",
    description:
      "AI voice agents are AI systems that conduct real phone calls on behalf of businesses. Learn how they work and how to deploy one.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "What Is an AI Voice Agent? Complete Guide for Businesses",
  description:
    "An AI voice agent is a software system that uses artificial intelligence to conduct real phone conversations autonomously — answering calls, qualifying leads, booking appointments, and completing tasks without human involvement.",
  url: `${siteConfig.url}/ai-voice-agent`,
  author: { "@id": `${siteConfig.url}/#organization` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  about: [
    { "@type": "Thing", name: "AI Voice Agent" },
    { "@type": "Thing", name: "Call Center Automation" },
    { "@type": "Thing", name: "Natural Language Processing" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI voice agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI voice agent is a software system that uses artificial intelligence — specifically natural language processing and speech synthesis — to conduct real phone conversations autonomously. It can answer inbound calls, make outbound calls, understand what callers say, respond naturally, and complete tasks like booking appointments or qualifying leads.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI voice agent work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI voice agents work by combining speech-to-text (converting caller speech to text), large language model processing (understanding intent and generating responses), and text-to-speech (converting responses back to natural-sounding speech). This happens in real time, enabling fluid two-way conversations.",
      },
    },
    {
      "@type": "Question",
      name: "What can AI voice agents do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI voice agents can answer inbound calls, qualify leads, book appointments, handle customer support inquiries, run outbound calling campaigns, perform missed call recovery, and transfer calls to human agents when needed.",
      },
    },
  ],
};

const capabilities = [
  { icon: Mic, title: "Real-time speech understanding", desc: "Converts caller speech to text instantly using advanced ASR (automatic speech recognition)." },
  { icon: Brain, title: "Conversational AI reasoning", desc: "Understands caller intent, context, and nuance using large language model processing." },
  { icon: Volume2, title: "Natural voice synthesis", desc: "Responds in a natural, human-like voice using neural text-to-speech technology." },
  { icon: PhoneCall, title: "Task completion", desc: "Completes real actions: booking appointments, updating CRM records, transferring calls." },
];

const useCases = [
  "Answering every inbound call within 1 second",
  "Qualifying sales leads with dynamic questions",
  "Booking appointments directly in the call",
  "Running outbound prospecting campaigns",
  "Handling customer support tier-1 inquiries",
  "Recovering missed calls with automatic callbacks",
  "Sending post-call summaries to your team",
  "Syncing call outcomes to your CRM in real time",
];

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call answering" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated sales campaigns" },
  { label: "AI Call Automation", href: "/ai-call-automation", desc: "How call automation works" },
];

export default function AIVoiceAgentPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ label: "AI Voice Agent", href: "/ai-voice-agent" }]} />

      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/25 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-6">
            AI Voice Agent
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            What Is an{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI Voice Agent?
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            An AI voice agent is a software system that uses artificial intelligence to conduct real phone conversations autonomously — answering calls, qualifying leads, booking appointments, and completing tasks without any human involvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl px-8 h-12">
                Deploy AI Voice Agents <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Definition — AI-search optimized */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article aria-label="Definition: What is an AI voice agent">
            <h2 className="text-3xl font-bold text-white mb-6">Defining an AI voice agent</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-slate-200 text-lg leading-relaxed">
                An <strong className="text-white">AI voice agent</strong> (also called an AI phone agent or conversational voice AI) is an automated system that uses speech recognition, natural language processing (NLP), and voice synthesis to conduct telephone conversations in real time — without a human operator.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Unlike a traditional IVR (interactive voice response) system that uses pre-recorded menus, an AI voice agent engages in open-ended, natural dialogue. It understands what the caller says, processes their intent, and responds appropriately — completing tasks or gathering information just as a human agent would.
              </p>
              <p className="text-slate-400 leading-relaxed">
                AI voice agents are deployed for inbound call handling (answering, qualifying, routing), outbound calling (prospecting, follow-up, reminders), and hybrid workflows that combine both. They operate 24/7, handle unlimited simultaneous calls, and integrate with CRM systems to log every interaction automatically.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">How AI voice agents work</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Four technology layers working in real time to create a seamless phone conversation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-violet-400">Step {i + 1}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{cap.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Architecture explanation */}
          <div className="p-7 rounded-2xl bg-[#07111D] border border-white/10">
            <h3 className="text-white font-bold text-lg mb-4">The technical stack behind AI voice agents</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {[
                { title: "Speech Recognition (ASR)", body: "Converts caller audio to text in real time using neural network models. Modern ASR achieves >95% accuracy even with accents, background noise, and natural speech patterns." },
                { title: "Language Processing (LLM)", body: "Large language models understand the caller's intent, maintain conversation context, and generate appropriate responses — enabling open-ended, natural dialogue rather than scripted menus." },
                { title: "Voice Synthesis (TTS)", body: "Neural text-to-speech converts the AI's responses back into natural-sounding speech, with controllable tone, pace, and style. Modern TTS is indistinguishable from human speech to most callers." },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="text-blue-400 font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What AI voice agents can do for your business</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                VoiceAxis AI voice agents handle the full spectrum of business phone operations — from the first inbound ring to outbound follow-up campaigns.
              </p>
              <ul className="space-y-2.5">
                {useCases.map((uc) => (
                  <li key={uc} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-slate-200 text-sm">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#0A0F1E] border border-white/10">
                <h3 className="text-white font-semibold mb-3">AI voice agent vs. human agent</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { aspect: "Availability", human: "Business hours only", ai: "24/7, 365 days" },
                    { aspect: "Simultaneous calls", human: "1 call at a time", ai: "Unlimited" },
                    { aspect: "Answer speed", human: "30–90s hold time", ai: "< 1 second" },
                    { aspect: "Monthly cost", human: "€2,000–4,000/agent", ai: "From €99/month" },
                    { aspect: "Consistency", human: "Varies by agent", ai: "100% consistent" },
                  ].map((row) => (
                    <div key={row.aspect} className="grid grid-cols-3 gap-2 py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-slate-400 font-medium">{row.aspect}</span>
                      <span className="text-slate-500 text-center">{row.human}</span>
                      <span className="text-emerald-400 font-medium text-center">{row.ai}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-white">VoiceAxis AI voice agents</strong> are deployed on enterprise-grade infrastructure with 99.9% uptime, sub-second response times, and native integrations with HubSpot, Salesforce, GoHighLevel, and 100+ other tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">AI Voice Agent FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-white font-semibold mb-2">{faq.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore AI voice agent solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
