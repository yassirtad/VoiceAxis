export type BillingInterval = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyMonthly: number; // effective monthly price when billed yearly
  currency: string;
  minutes: number;
  overage: number;
  badge?: string;
  description: string;
  features: string[];
  limitations?: string[];
  cta: string;
  highlighted: boolean;
  stripeLink: string; // Stripe Payment Link — same for monthly & yearly (update in Stripe dashboard)
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 99,
    yearlyPrice: 950,
    yearlyMonthly: 79,
    currency: "€",
    minutes: 300,
    overage: 0.18,
    description:
      "Everything you need to automate inbound calls and capture leads automatically.",
    features: [
      "AI receptionist",
      "Inbound call handling",
      "Appointment booking",
      "Call transfer to human",
      "Call summaries",
      "Lead capture",
      "Email notifications",
      "Dashboard access",
    ],
    limitations: [
      "Single AI agent",
      "No outbound calls",
      "No CRM integrations",
      "No advanced workflows",
    ],
    cta: "Choose Starter",
    highlighted: false,
    stripeLink: "https://buy.stripe.com/5kQ7sK8f33Cu0Zj0wE2Fa06",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 299,
    yearlyPrice: 2870,
    yearlyMonthly: 239,
    currency: "€",
    minutes: 1500,
    overage: 0.15,
    badge: "Most Popular",
    description:
      "Full inbound and outbound AI operations for growing businesses.",
    features: [
      "Everything in Starter",
      "Outbound AI calls",
      "Lead qualification",
      "CRM integrations",
      "Multiple AI agents",
      "Call routing",
      "Campaign automation",
      "Call transcripts",
      "Performance dashboard",
      "Priority support",
    ],
    cta: "Choose Growth",
    highlighted: true,
    stripeLink: "https://buy.stripe.com/9B69AS66V6OG8rLcfm2Fa07",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 890,
    yearlyPrice: 8550,
    yearlyMonthly: 712,
    currency: "€",
    minutes: 5000,
    overage: 0.12,
    description:
      "Enterprise-grade AI phone infrastructure with unlimited scale and custom workflows.",
    features: [
      "Everything in Growth",
      "Unlimited AI agents",
      "Advanced workflow automation",
      "Custom integrations (API / webhooks)",
      "Advanced routing logic",
      "Multi-location support",
      "Custom voice models",
      "Advanced analytics dashboard",
      "Campaign performance tracking",
      "SLA support",
    ],
    cta: "Choose Enterprise",
    highlighted: false,
    stripeLink: "https://buy.stripe.com/9B65kCgLzeh88rL6V22Fa09",
  },
];

export const pricingFAQ = [
  {
    question: "What happens if I exceed my included minutes?",
    answer:
      "Overage minutes are billed at your plan rate: €0.18/min (Starter), €0.15/min (Growth), or €0.12/min (Enterprise). You will receive alerts before you exceed your limit.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the start of the next billing cycle.",
  },
  {
    question: "What is the difference between monthly and yearly billing?",
    answer:
      "Yearly billing saves approximately 20% compared to monthly. The full yearly amount is billed upfront at the start of your subscription period.",
  },
  {
    question: "Do unused minutes roll over?",
    answer:
      "Included minutes do not roll over. Each billing cycle starts fresh with your plan's included minutes.",
  },
  {
    question: "How does the Enterprise plan work?",
    answer:
      "Enterprise includes all Growth features plus unlimited AI agents, custom integrations, advanced routing logic, multi-location support, and SLA-backed support. Contact our sales team to discuss your requirements.",
  },
];

export const comparisonFeatures = [
  { feature: "AI Receptionist", starter: true, growth: true, enterprise: true },
  { feature: "Inbound Call Handling", starter: true, growth: true, enterprise: true },
  { feature: "Appointment Booking", starter: true, growth: true, enterprise: true },
  { feature: "Call Transfer to Human", starter: true, growth: true, enterprise: true },
  { feature: "Lead Capture", starter: true, growth: true, enterprise: true },
  { feature: "Dashboard Access", starter: true, growth: true, enterprise: true },
  { feature: "Call Summaries", starter: true, growth: true, enterprise: true },
  { feature: "Outbound AI Calls", starter: false, growth: true, enterprise: true },
  { feature: "Lead Qualification", starter: false, growth: true, enterprise: true },
  { feature: "CRM Integrations", starter: false, growth: true, enterprise: true },
  { feature: "Multiple AI Agents", starter: false, growth: true, enterprise: true },
  { feature: "Campaign Automation", starter: false, growth: true, enterprise: true },
  { feature: "Call Transcripts", starter: false, growth: true, enterprise: true },
  { feature: "Priority Support", starter: false, growth: true, enterprise: true },
  { feature: "Unlimited AI Agents", starter: false, growth: false, enterprise: true },
  { feature: "Custom Voice Models", starter: false, growth: false, enterprise: true },
  { feature: "API / Webhooks", starter: false, growth: false, enterprise: true },
  { feature: "Multi-location Support", starter: false, growth: false, enterprise: true },
  { feature: "SLA Support", starter: false, growth: false, enterprise: true },
];
