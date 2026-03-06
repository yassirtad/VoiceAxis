export const siteConfig = {
  name: "VoiceAxis",
  tagline: "AI Call Center Infrastructure",
  description:
    "VoiceAxis is an AI call center platform that automates inbound calls, qualifies leads, books appointments, and runs outbound campaigns using AI voice agents. 24/7 availability. From €99/month.",
  url: "https://voiceaxis.com",
  ogImage: "https://voiceaxis.com/og-image.png",
  email: "hello@voiceaxis.com",
  phone: "+1 (800) 555-0199",
  address: "San Francisco, CA",
  links: {
    twitter: "https://twitter.com/voiceaxis",
    linkedin: "https://linkedin.com/company/voiceaxis",
  },
  nav: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],
  // Primary keyword targets for SEO
  keywords: [
    // Core product terms
    "AI call center",
    "AI call center platform",
    "AI receptionist",
    "AI voice agent",
    "AI voice agents",
    // Feature terms
    "AI outbound calling",
    "AI appointment booking",
    "AI lead qualification",
    "AI call automation",
    "AI phone automation",
    // Solution terms
    "automated call center",
    "call center automation",
    "AI phone system",
    "AI phone operations",
    "AI phone system for business",
    // Long-tail
    "AI call center software",
    "automated phone answering service",
    "AI inbound call handling",
    "replace call center with AI",
    "24/7 AI phone answering",
  ],
  // Topic cluster — used for internal linking structures
  topicCluster: {
    core: [
      { label: "AI Call Center", href: "/ai-call-center" },
      { label: "AI Receptionist", href: "/ai-receptionist" },
      { label: "AI Outbound Calling", href: "/ai-outbound-calling" },
      { label: "AI Appointment Booking", href: "/ai-appointment-booking" },
    ],
    supporting: [
      { label: "AI Voice Agent", href: "/ai-voice-agent" },
      { label: "AI Call Automation", href: "/ai-call-automation" },
      { label: "AI Phone System", href: "/ai-phone-system" },
      { label: "AI Lead Qualification", href: "/ai-lead-qualification" },
    ],
    industries: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Home Services", href: "/industries/home-services" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Agencies", href: "/industries/agencies" },
    ],
  },
};
