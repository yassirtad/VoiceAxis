import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Building2,
  Wrench,
  Shield,
  Car,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { industries } from "@/config/industries";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Industries — AI Call Center for Healthcare, Real Estate & More",
  description:
    "VoiceAxis AI call center solutions for healthcare clinics, real estate brokerages, home service companies, insurance agencies, automotive dealerships, and marketing agencies. Industry-specific workflows and integrations.",
  keywords: [
    "AI call center healthcare",
    "AI receptionist real estate",
    "AI phone automation home services",
    "insurance AI calling",
    "automotive AI receptionist",
    "AI call center by industry",
    "AI phone system for business",
  ],
  alternates: { canonical: `${siteConfig.url}/industries` },
  openGraph: {
    title: "Industries — AI Call Center Solutions by Industry | VoiceAxis",
    description:
      "AI call center solutions purpose-built for healthcare, real estate, home services, insurance, automotive, and agencies. Industry-specific workflows from €99/month.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Building2,
  Wrench,
  Shield,
  Car,
  Briefcase,
};

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call answering" },
  { label: "AI Appointment Booking", href: "/ai-appointment-booking", desc: "Calendar automation in-call" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound caller" },
  { label: "Pricing", href: "/pricing", desc: "Plans from €99/month" },
];

export default function IndustriesPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "Industries", href: "/industries" }]} />
      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            Industries
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Built for businesses that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              run on the phone.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            VoiceAxis is purpose-built for industries where every call drives revenue — with industry-specific workflows, scripts, and integrations.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <Link key={industry.id} href={`/industries/${industry.slug}`}>
                  <div className={`group h-full p-7 rounded-2xl bg-gradient-to-br ${industry.color} border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer`}>
                    <div className="inline-flex p-3 rounded-xl bg-white/10 border border-white/10 mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-white font-bold text-xl mb-3 group-hover:text-blue-200 transition-colors">
                      {industry.title}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Use cases */}
                    <div className="space-y-1.5 mb-6">
                      {industry.useCases.slice(0, 3).map((useCase) => (
                        <div key={useCase} className="flex items-center gap-2 text-xs text-slate-300">
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                          {useCase}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-5 pt-5 border-t border-white/10">
                      {industry.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-base font-bold text-white">{stat.value}</div>
                          <div className="text-[10px] text-slate-400 leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm text-blue-300 font-medium">
                      View industry solutions
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore AI call center solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
