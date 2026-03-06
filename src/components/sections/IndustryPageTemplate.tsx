import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Industry } from "@/config/industries";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";

interface IndustryPageTemplateProps {
  industry: Industry;
  Icon: React.ElementType;
}

const industryRelatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call answering" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound caller" },
  { label: "AI Appointment Booking", href: "/ai-appointment-booking", desc: "Calendar automation in-call" },
  { label: "Pricing", href: "/pricing", desc: "Plans from €99/month" },
];

export function IndustryPageTemplate({ industry, Icon }: IndustryPageTemplateProps) {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.title, href: `/industries/${industry.slug}` },
        ]}
      />
      {/* Hero */}
      <section className={`relative pt-8 pb-20 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-30`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
            <Icon className="w-3 h-3" />
            {industry.title}
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            {industry.headline}
          </h1>
          <p className="text-slate-200 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            {industry.subheadline}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {industry.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl px-8 h-12">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-12 px-8">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What VoiceAxis automates for {industry.title}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">{industry.description}</p>
              <ul className="space-y-3">
                {industry.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-7 rounded-2xl bg-gradient-to-br ${industry.color} border border-white/10`}>
              <h3 className="text-white font-bold text-lg mb-5">Key outcomes</h3>
              <div className="space-y-5">
                {industry.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="text-slate-200 text-sm">{stat.label}</span>
                    <span className="text-white font-bold text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/pricing">
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/20">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI phone operations */}
      <section className="py-16 bg-[#07111D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Why {industry.title.toLowerCase()} businesses use AI phone automation
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Never miss a caller",
                desc: "Every inbound call is answered in under 1 second — at any hour, any day.",
              },
              {
                title: "Qualify before you call back",
                desc: "Know exactly what each caller needs before your team picks up the phone.",
              },
              {
                title: "Scale without hiring",
                desc: "Handle 10x the call volume without adding staff or infrastructure costs.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore related AI call center solutions" links={industryRelatedLinks} />
      <FinalCTA />
    </div>
  );
}
