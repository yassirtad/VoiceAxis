import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, PhoneCall, Clock, Users, Zap } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Receptionist — 24/7 Automated Phone Answering for Businesses",
  description:
    "Replace your phone receptionist with an AI voice agent that answers every call in under 1 second, 24/7. Handles inbound calls, appointment booking, and lead capture automatically.",
  keywords: [
    "AI receptionist",
    "AI phone answering",
    "automated receptionist",
    "AI front desk",
    "virtual receptionist AI",
    "24/7 AI answering service",
    "AI call answering",
    "automated phone receptionist",
  ],
  alternates: {
    canonical: `${siteConfig.url}/ai-receptionist`,
  },
  openGraph: {
    title: "AI Receptionist — 24/7 Automated Phone Answering",
    description:
      "AI voice agent that answers every business call instantly. No hold times. No missed calls. No staffing cost.",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "Answers in under 1 second",
    description: "No hold music, no rings, no missed calls. Every caller gets an immediate, professional response.",
  },
  {
    icon: Users,
    title: "Handles unlimited simultaneous calls",
    description: "Whether it's 1 call or 100 at the same time — the AI handles them all without degradation.",
  },
  {
    icon: Zap,
    title: "Books appointments in-call",
    description: "Syncs with your calendar in real time and confirms bookings during the conversation.",
  },
  {
    icon: PhoneCall,
    title: "Transfers to humans when needed",
    description: "Detects caller intent and escalates complex calls to the right team member automatically.",
  },
];

const useCases = [
  "Answer every call when your team is busy",
  "Handle after-hours and weekend inquiries",
  "Capture leads from every inbound call",
  "Book appointments without staff involvement",
  "Qualify callers before transferring to sales",
  "Provide consistent, on-brand responses",
];

const faqs = [
  {
    q: "What is an AI receptionist?",
    a: "An AI receptionist is an AI voice agent that automatically answers inbound phone calls, greets callers, collects information, answers common questions, books appointments, and transfers calls to the appropriate person — all without a human operator.",
  },
  {
    q: "How is an AI receptionist different from a voicemail or IVR?",
    a: "Unlike voicemail or traditional IVR (press 1 for...), an AI receptionist has a natural two-way conversation with callers. It understands what callers say, responds appropriately, and completes tasks like booking appointments or capturing lead information — just like a human receptionist would.",
  },
  {
    q: "Can the AI receptionist transfer calls?",
    a: "Yes. The AI detects when a caller needs to speak with a human and performs a warm or cold transfer to the appropriate team member or department.",
  },
  {
    q: "How quickly can an AI receptionist be set up?",
    a: "Setup is fast and handled by our team. We take care of everything — script design, phone number configuration, and testing — so your AI receptionist is live as quickly as possible.",
  },
];

const relatedLinks = [
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
  { label: "AI Appointment Booking", href: "/ai-appointment-booking", desc: "Calendar automation" },
  { label: "AI Call Automation", href: "/ai-call-automation", desc: "How call automation works" },
];

export default function AIReceptionistPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "AI Receptionist", href: "/ai-receptionist" }]} />
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VoiceAxis AI Receptionist",
            applicationCategory: "BusinessApplication",
            description:
              "AI voice agent that automatically answers inbound business calls 24/7, books appointments, captures leads, and transfers to human agents when needed.",
            url: "https://voiceaxis.com/ai-receptionist",
            offers: {
              "@type": "Offer",
              price: "99",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "99",
                priceCurrency: "EUR",
                unitText: "MONTH",
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            AI Receptionist
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your business phone,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              answered by AI. Always.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            An AI receptionist that answers every call in under 1 second — 24/7, 365 days a year. No hold times. No missed calls. No staffing costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/25 px-8 h-12"
              >
                Get Started — from €99/mo
                <ArrowRight className="ml-2 w-4 h-4" />
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
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {["Answers in &lt;1 second", "24/7 availability", "Unlimited simultaneous calls"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is an AI receptionist */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">What is an AI receptionist?</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            An AI receptionist is an artificial intelligence voice agent that automatically handles inbound phone calls for your business. Using advanced natural language processing, it understands what callers say, responds naturally, and completes tasks like scheduling appointments, capturing lead information, answering FAQs, and transferring calls — all without human involvement.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Unlike traditional phone systems (IVR/touchtone menus or voicemail), an AI receptionist engages in real conversations. Callers interact with it naturally — just as they would with a human receptionist — creating a professional, efficient experience regardless of call volume or time of day.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Built for businesses that can&apos;t afford to miss a call
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What the AI receptionist handles</h2>
              <ul className="space-y-3">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{useCase}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/pricing">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                    Start for €99/month <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0A0F1E] border border-white/10">
              <div className="text-sm font-semibold text-slate-400 mb-5">Live call simulation</div>
              {[
                { role: "Caller", text: "Hi, I'd like to book an appointment for next week.", side: "left" },
                { role: "AI", text: "Of course! I can check availability right now. What day works best for you?", side: "right" },
                { role: "Caller", text: "Tuesday afternoon if possible.", side: "left" },
                { role: "AI", text: "I have Tuesday at 2:00 PM and 4:00 PM available. Which do you prefer?", side: "right" },
                { role: "Caller", text: "2 PM is perfect.", side: "left" },
                { role: "AI", text: "Confirmed! I've booked you for Tuesday at 2:00 PM. You'll receive a confirmation shortly.", side: "right" },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`flex mb-3 ${msg.side === "right" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-xs ${
                      msg.side === "right"
                        ? "bg-blue-600/20 border border-blue-500/30 text-blue-100"
                        : "bg-white/5 border border-white/10 text-slate-300"
                    }`}
                  >
                    <div className={`text-[10px] font-medium mb-1 ${msg.side === "right" ? "text-blue-400" : "text-slate-500"}`}>
                      {msg.role}
                    </div>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-400">
                <CheckCircle2 className="w-3 h-3" /> Appointment booked automatically
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">AI Receptionist FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
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
