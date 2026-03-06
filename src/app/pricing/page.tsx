import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { PricingCards } from "@/components/pricing/PricingCards";
import { pricingFAQ } from "@/config/pricing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing — AI Call Center Plans Starting at €99/month",
  description:
    "VoiceAxis AI call center pricing: Starter €99/mo (300 min), Growth €299/mo (1,500 min), Enterprise €890/mo (5,000 min). Monthly and yearly billing. Cancel any time.",
  keywords: [
    "AI call center pricing",
    "AI receptionist cost",
    "AI phone automation pricing",
    "call center automation plans",
    "AI voice agent pricing",
    "how much does AI call center cost",
    "AI phone system pricing",
  ],
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    title: "Pricing — AI Call Center Plans Starting at €99/month | VoiceAxis",
    description:
      "Transparent AI call center pricing. Starter €99/mo, Growth €299/mo, Enterprise €890/mo. Monthly and yearly billing available.",
  },
};

const relatedLinks = [
  { label: "AI Call Center", href: "/ai-call-center", desc: "Platform overview & capabilities" },
  { label: "Solutions", href: "/solutions", desc: "All 6 automation modules" },
  { label: "Industries", href: "/industries", desc: "Industry-specific solutions" },
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound answering" },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "Pricing", href: "/pricing" }]} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "VoiceAxis AI Call Center",
            description: "AI voice agents for call center automation",
            url: `${siteConfig.url}/pricing`,
            brand: { "@type": "Brand", name: "VoiceAxis" },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            Pricing
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Transparent pricing.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              No surprises.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-3">
            Start with what you need. Scale as you grow.
          </p>
          <p className="text-slate-500 text-sm">Save ~20% with yearly billing</p>
        </div>
      </section>

      {/* Pricing cards with toggle */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />

          {/* Pricing FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Pricing FAQ</h2>
            <div className="space-y-4">
              {pricingFAQ.map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                  <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InternalLinks heading="Related AI call center resources" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
