export type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "How realistic do AI phone calls sound?",
    answer:
      "Our AI voice agents use advanced neural text-to-speech technology that sounds natural and conversational. Most callers cannot distinguish them from a human agent. You can select from multiple voice styles and customize tone, pacing, and script to match your brand.",
    category: "Technology",
  },
  {
    question: "Can AI voice agents transfer calls to a human?",
    answer:
      "Yes. All plans include intelligent call transfer. The AI agent can detect when a human is needed — based on caller request, sentiment, or qualification outcome — and seamlessly transfer the call to the right team member or department.",
    category: "Technology",
  },
  {
    question: "Can it integrate with my CRM?",
    answer:
      "Yes. The Growth and Enterprise plans include native integrations with HubSpot, Salesforce, GoHighLevel, Zapier, Make, and more. Starter plan users can connect via webhook. All call data, transcripts, and lead details are automatically synced.",
    category: "Integrations",
  },
  {
    question: "What happens if I run out of included minutes?",
    answer:
      "You will receive an alert as you approach your limit. After the included minutes are used, overage minutes are billed at your plan rate: €0.18/min (Starter), €0.15/min (Growth), or €0.12/min (Enterprise). You can also upgrade your plan at any time.",
    category: "Billing",
  },
  {
    question: "How long does setup take?",
    answer:
      "Our team handles the full setup process — strategy call, script design, phone number configuration, integration setup, and testing. We move as fast as you do, and Enterprise clients receive dedicated onboarding support.",
    category: "Onboarding",
  },
  {
    question: "What types of calls can the AI handle?",
    answer:
      "The platform handles inbound calls (receptionist, lead intake, appointment booking, customer support) and outbound calls (sales prospecting, follow-ups, appointment reminders, re-engagement campaigns). Each call type has its own workflow configuration.",
    category: "Technology",
  },
  {
    question: "Is the platform HIPAA compliant?",
    answer:
      "We take data security seriously and follow enterprise-grade security standards. For healthcare clients requiring HIPAA compliance, we provide BAA (Business Associate Agreements) and data handling configurations upon request under Enterprise plans.",
    category: "Security",
  },
  {
    question: "Can I use my existing phone number?",
    answer:
      "Yes. We support number porting so you can bring your existing business phone numbers to the platform. We can also provision new local, toll-free, or international numbers.",
    category: "Setup",
  },
  {
    question: "Do AI agents support multiple languages?",
    answer:
      "Yes. Our platform supports multiple languages including English, Spanish, French, German, Portuguese, and more. Multi-language support is available on Growth and Enterprise plans.",
    category: "Technology",
  },
  {
    question: "What reporting and analytics are included?",
    answer:
      "Every plan includes a call dashboard with call volume, duration, outcomes, and lead summaries. Growth adds performance dashboards and transcripts. Enterprise adds advanced analytics, campaign tracking, and custom reporting.",
    category: "Features",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. Starter and Growth plans are month-to-month with no long-term commitment. Enterprise plans are available on annual agreements with additional benefits. You can cancel at any time.",
    category: "Billing",
  },
  {
    question: "How is this different from a traditional call center?",
    answer:
      "A traditional call center requires hiring, training, managing, and paying human agents around the clock. VoiceAxis replaces or augments that with AI voice agents that are available 24/7, scale instantly, never get sick, and cost a fraction of the price — while consistently following your scripts.",
    category: "General",
  },
];
