import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/config/faq";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ — AI Call Center Questions Answered | VoiceAxis",
  description:
    "Frequently asked questions about VoiceAxis AI call center platform: AI voice agents, call automation, CRM integrations, pricing, setup time, security, and how to get started.",
  keywords: [
    "AI call center FAQ",
    "AI voice agent questions",
    "how does AI call center work",
    "AI phone system FAQ",
    "VoiceAxis FAQ",
    "call automation questions",
  ],
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: "FAQ — AI Call Center Questions Answered | VoiceAxis",
    description:
      "Everything you need to know about AI call center technology and the VoiceAxis platform. Common questions about setup, pricing, integrations, and security.",
  },
};

const categories = [...new Set(faqItems.map((f) => f.category || "General"))];

const relatedLinks = [
  { label: "AI Call Center", href: "/ai-call-center", desc: "Platform overview & use cases" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "How AI voice agents work" },
  { label: "Pricing", href: "/pricing", desc: "Plans from €99/month" },
  { label: "Contact", href: "/contact", desc: "Talk to our team" },
];

export default function FAQPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            FAQ
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              questions.
            </span>
          </h1>
          <p className="text-slate-300 text-xl">
            Everything you need to know about AI call center technology and the VoiceAxis platform.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const items = faqItems.filter((f) => (f.category || "General") === category);
            return (
              <div key={category} className="mb-12">
                <h2 className="text-lg font-bold text-blue-400 mb-5 pb-2 border-b border-white/10">
                  {category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${category}-${i}`}
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-6 data-[state=open]:border-blue-500/30 data-[state=open]:bg-blue-500/[0.03] transition-colors"
                    >
                      <AccordionTrigger className="text-white font-medium text-left hover:no-underline py-5 hover:text-blue-300 transition-colors [&[data-state=open]]:text-blue-300">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}

          {/* Still have questions */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center">
            <h2 className="text-white font-bold text-xl mb-2">Still have questions?</h2>
            <p className="text-slate-400 text-sm mb-5">
              Our team is happy to answer any questions about the platform, pricing, or your specific use case.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact us →
            </a>
          </div>
        </div>
      </section>

      <InternalLinks heading="Explore AI call center solutions" links={relatedLinks} />
      <FinalCTA />
    </div>
  );
}
