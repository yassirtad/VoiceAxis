import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { industries } from "@/config/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/solutions`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/pricing`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/industries`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/faq`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    // Primary SEO landing pages
    { url: `${base}/ai-receptionist`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${base}/ai-call-center`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${base}/ai-outbound-calling`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/ai-appointment-booking`, priority: 0.9, changeFrequency: "weekly" as const },
    // Topic cluster: AI call automation keywords
    { url: `${base}/ai-voice-agent`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/ai-call-automation`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/ai-phone-system`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${base}/ai-lead-qualification`, priority: 0.85, changeFrequency: "weekly" as const },
  ];

  const industryPages = industries.map((industry) => ({
    url: `${base}/industries/${industry.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...industryPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
