import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  UserCheck,
  CalendarCheck,
  PhoneOutgoing,
  Headphones,
  PhoneMissed,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { coreFeatures, platformStats } from "@/config/features";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Call Center Solutions — All 6 Automation Modules",
  description:
    "Explore all VoiceAxis AI call center solutions: AI receptionist, lead qualification, appointment booking, outbound calling, customer support automation, and missed call recovery. From €99/month.",
  keywords: [
    "AI call center platform",
    "AI voice agent solutions",
    "AI phone automation",
    "AI receptionist platform",
    "call center automation software",
    "AI call center modules",
    "AI phone operations",
  ],
  alternates: { canonical: `${siteConfig.url}/solutions` },
  openGraph: {
    title: "AI Call Center Solutions — All 6 Automation Modules | VoiceAxis",
    description:
      "Six AI-powered modules that automate every phase of your business phone operations — from first ring to closed deal. From €99/month.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  UserCheck,
  CalendarCheck,
  PhoneOutgoing,
  HeadphonesIcon: Headphones,
  PhoneMissed,
};

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-pink-500 to-rose-500",
];

const seoLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call answering" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated sales campaigns" },
  { label: "AI Appointment Booking", href: "/ai-appointment-booking", desc: "Calendar automation in-call" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
];

const relatedLinks = [
  { label: "AI Call Center", href: "/ai-call-center", desc: "Platform overview & use cases" },
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound answering" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound caller" },
  { label: "Pricing", href: "/pricing", desc: "Plans from €99/month" },
];

export default function SolutionsPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "Solutions", href: "/solutions" }]} />
      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            Platform Solutions
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            AI Phone Operations{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Six AI-powered modules that automate every phase of your business phone operations — from first ring to closed deal.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {platformStats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {coreFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon] || PhoneCall;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={feature.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradients[i]}/10 border border-white/10 mb-5`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{feature.title}</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">{feature.description}</p>
                    <ul className="space-y-3 mb-8">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-slate-200 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/pricing">
                      <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-3">
                        {feature.bullets.map((bullet, j) => (
                          <div
                            key={bullet}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-xs text-white font-bold flex-shrink-0`}>
                              {j + 1}
                            </div>
                            <span className="text-slate-200 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO links section */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Explore by solution</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group"
              >
                <div className="text-white font-semibold mb-1 group-hover:text-blue-300 transition-colors">{link.label}</div>
                <div className="text-slate-400 text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Related AI call center resources" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
