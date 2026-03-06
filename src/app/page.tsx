import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { ROISection } from "@/components/home/ROISection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "VoiceAxis — AI Call Center for Modern Businesses",
  description:
    "VoiceAxis is an AI call center platform that automates inbound calls, qualifies leads, books appointments, and runs outbound campaigns using AI voice agents. 24/7 availability. From €99/month.",
  keywords: [
    "AI call center",
    "AI receptionist",
    "AI voice agent",
    "AI voice agents",
    "AI phone automation",
    "AI call automation",
    "automated call center",
    "AI appointment booking",
    "AI lead qualification",
    "AI outbound calling",
    "call center automation platform",
    "AI phone system for business",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "VoiceAxis — AI Call Center Platform | Automate Every Business Call",
    description:
      "AI voice agents that answer every inbound call, qualify leads, book appointments, and run outbound campaigns — 24/7. Enterprise-grade AI phone operations from €99/month.",
    type: "website",
    url: siteConfig.url,
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: "VoiceAxis — AI Call Center Platform",
  description:
    "AI call center infrastructure that automates inbound calls, outbound campaigns, lead qualification, and appointment booking for modern businesses.",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#software` },
  primaryImageOfPage: { "@id": `${siteConfig.url}/#logo` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    ],
  },
};

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call answering" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated sales campaigns" },
  { label: "AI Appointment Booking", href: "/ai-appointment-booking", desc: "Calendar automation" },
  { label: "AI Voice Agent", href: "/ai-voice-agent", desc: "What is an AI voice agent?" },
  { label: "AI Call Automation", href: "/ai-call-automation", desc: "How call automation works" },
  { label: "AI Phone System", href: "/ai-phone-system", desc: "Replace your phone system" },
  { label: "AI Lead Qualification", href: "/ai-lead-qualification", desc: "Qualify every inbound lead" },
  { label: "View All Solutions", href: "/solutions", desc: "Full platform overview" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <TrustBar />
      <CapabilitiesGrid />
      <HowItWorks />
      <IndustriesSection />
      <PricingSection />
      <IntegrationsSection />
      <ROISection />
      <FAQSection />
      <InternalLinks heading="Explore the full AI call center platform" links={relatedLinks} />
      <FinalCTA />
    </>
  );
}
