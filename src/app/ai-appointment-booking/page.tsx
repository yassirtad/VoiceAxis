import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, CalendarCheck, Clock, Bell, RefreshCw } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Appointment Booking — Automated Scheduling Over the Phone",
  description:
    "Book appointments automatically during AI phone calls. No human needed. Syncs with Google Calendar, CRM, and your existing scheduling tools.",
  keywords: [
    "AI appointment booking",
    "automated appointment scheduling",
    "AI scheduling over phone",
    "voice appointment booking",
    "AI calendar booking",
    "automated appointment setting",
    "AI booking system",
    "phone appointment automation",
  ],
  alternates: {
    canonical: `${siteConfig.url}/ai-appointment-booking`,
  },
};

const benefits = [
  {
    icon: CalendarCheck,
    title: "Books during the call",
    description: "AI checks real-time calendar availability and confirms the appointment before the caller hangs up — no callbacks required.",
  },
  {
    icon: Clock,
    title: "24/7 scheduling",
    description: "Callers can book appointments at any hour, including weekends and holidays, without staff availability constraints.",
  },
  {
    icon: Bell,
    title: "Automated reminders",
    description: "AI sends confirmation messages and pre-appointment reminders via call, SMS, or email to reduce no-shows.",
  },
  {
    icon: RefreshCw,
    title: "Reschedules and cancellations",
    description: "Handles appointment modifications automatically — callers can reschedule or cancel via another AI call.",
  },
];

const integrations = [
  "Google Calendar",
  "Outlook / Microsoft 365",
  "HubSpot CRM",
  "Salesforce",
  "GoHighLevel",
  "Calendly (via API)",
  "Acuity Scheduling (via API)",
  "Custom calendar systems (webhooks)",
];

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound answering" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound lead" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
];

export default function AIAppointmentBookingPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "AI Appointment Booking", href: "/ai-appointment-booking" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VoiceAxis AI Appointment Booking",
            description:
              "AI voice agent that books appointments automatically during inbound phone calls, syncing with calendars and CRM systems in real time.",
            url: "https://voiceaxis.com/ai-appointment-booking",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
            AI Appointment Booking
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Appointments booked.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              During the call. Automatically.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
            AI voice agents that check your calendar, confirm availability, and book appointments in real time — without any human involvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl px-8 h-12">
                Start Automating Bookings <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* How it works */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            How AI appointment booking works
          </h2>
          <p className="text-slate-400 text-center mb-10">
            A 4-step process that happens entirely within the phone call.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "1", title: "Caller calls in", desc: "AI answers instantly and greets the caller." },
              { step: "2", title: "Intent detected", desc: "AI identifies the caller wants to schedule an appointment." },
              { step: "3", title: "Availability checked", desc: "AI queries your calendar in real time for open slots." },
              { step: "4", title: "Appointment confirmed", desc: "AI books the slot and sends confirmation automatically." },
            ].map((s) => (
              <div key={s.step} className="p-5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-400 font-bold">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Built for high-volume scheduling</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Calendar & scheduling integrations</h2>
          <p className="text-slate-400 text-center text-sm mb-8">Connects with the tools you already use</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-center"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-xs font-medium">{integration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore related AI solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
