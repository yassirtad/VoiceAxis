import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { VoiceQualitySection } from "@/components/home/VoiceQualitySection";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "VoiceAxis — AI Call Center Platform for Natural Business Conversations",
  description:
    "VoiceAxis is an AI call center platform with natural-sounding voice agents for inbound and outbound calling. Multilingual support, conversation workflows, CRM integrations, and scalable phone automation. From €99/month.",
  keywords: [
    "AI call center",
    "AI voice agents",
    "AI phone automation",
    "AI receptionist",
    "AI outbound calling",
    "multilingual AI calling",
    "AI appointment booking",
    "AI lead qualification",
    "business phone automation",
    "AI call infrastructure",
    "conversation workflows",
    "scalable call handling",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "VoiceAxis — AI Call Center Platform | Natural Voice Agents for Business",
    description:
      "AI voice agents that handle inbound and outbound calls with natural conversations, multilingual support, and seamless business integrations. Scalable AI call center infrastructure from €99/month.",
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
    "AI call center platform with natural-sounding voice agents for inbound and outbound calling, multilingual support, conversation workflows, and business integrations.",
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

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#software`,
  name: "VoiceAxis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI call center platform for natural inbound and outbound business conversations. Features include AI voice agents, multilingual calling, appointment booking, lead qualification, workflow automation, and CRM integrations.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "99",
    offerCount: "3",
  },
  featureList: [
    "Natural AI voice agents",
    "Inbound and outbound calling",
    "Multilingual support (12+ languages)",
    "AI appointment booking",
    "AI lead qualification",
    "Conversation workflows",
    "CRM integrations",
    "Analytics and transcripts",
    "Webhook and API access",
  ],
};

const relatedLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call handling" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated calling campaigns" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Hero />
      <TrustBar />
      <VoiceQualitySection />
      <CapabilitiesGrid />
      <HowItWorks />
      <IntegrationsSection />
      <IndustriesSection />
      <PricingSection />
      <FAQSection />
      <InternalLinks heading="Explore the full AI call center platform" links={relatedLinks} />
      <FinalCTA />
    </>
  );
}
