import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { ConditionalNav } from "@/components/layout/ConditionalNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — AI Call Center Infrastructure`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Business Software",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — AI Call Center Infrastructure`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — AI Call Center Platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — AI Call Center Infrastructure`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@voiceaxis",
    site: "@voiceaxis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
};

// Global Organization + WebSite schema — injected on every page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.png`,
    width: 120,
    height: 40,
  },
  description:
    "VoiceAxis is an AI call center infrastructure platform that enables businesses to automate inbound and outbound phone operations using AI voice agents.",
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [siteConfig.links.twitter, siteConfig.links.linkedin],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#software`,
  name: "VoiceAxis AI Call Center",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI call center platform that automates inbound calls, outbound campaigns, lead qualification, and appointment booking using AI voice agents.",
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "99",
    highPrice: "890",
    priceCurrency: "EUR",
    offerCount: "3",
  },
  featureList: [
    "AI Receptionist",
    "AI Lead Qualification",
    "AI Appointment Booking",
    "AI Outbound Calling",
    "Customer Support Automation",
    "Missed Call Recovery",
    "CRM Integrations",
    "Call Transcripts",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased bg-[#0A0F1E]">
        <SessionProvider>
          <ConditionalNav>
            {children}
          </ConditionalNav>
        </SessionProvider>
      </body>
    </html>
  );
}
