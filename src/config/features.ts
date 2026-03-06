export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
};

export const coreFeatures: Feature[] = [
  {
    id: "receptionist",
    icon: "PhoneCall",
    title: "AI Receptionist",
    description:
      "A 24/7 AI voice agent that answers every inbound call with natural conversation — handling inquiries, routing calls, and capturing information automatically.",
    bullets: [
      "Sub-second answer speed",
      "Handles simultaneous calls",
      "Natural, human-like conversation",
      "Custom voice and persona",
    ],
  },
  {
    id: "lead-qualification",
    icon: "UserCheck",
    title: "AI Lead Qualification",
    description:
      "Conversational AI that asks the right questions, scores leads in real time, and routes high-intent prospects directly to your sales team.",
    bullets: [
      "Dynamic qualification flows",
      "Lead scoring and tagging",
      "Instant CRM sync",
      "Priority routing for hot leads",
    ],
  },
  {
    id: "appointment-booking",
    icon: "CalendarCheck",
    title: "AI Appointment Booking",
    description:
      "Book appointments directly during the call — real-time calendar access, confirmations, and reminders handled entirely by AI.",
    bullets: [
      "Real-time calendar access",
      "Automatic confirmations and reminders",
      "Reschedule and cancel handling",
      "Google Calendar and CRM sync",
    ],
  },
  {
    id: "outbound-calling",
    icon: "PhoneOutgoing",
    title: "AI Outbound Calling",
    description:
      "Launch intelligent outbound call campaigns for follow-ups, re-engagement, appointment reminders, and sales outreach — at scale.",
    bullets: [
      "Automated dial sequences",
      "Personalized scripts per contact",
      "Real-time outcome tracking",
      "Compliance controls built-in",
    ],
  },
  {
    id: "customer-support",
    icon: "HeadphonesIcon",
    title: "Customer Support Automation",
    description:
      "Handle tier-1 support calls autonomously — answer common questions, check statuses, and escalate complex cases to human agents when needed.",
    bullets: [
      "FAQ automation over voice",
      "Smart escalation to humans",
      "Post-call summaries and transcripts",
      "Helpdesk integration",
    ],
  },
  {
    id: "workflow-automation",
    icon: "GitBranch",
    title: "Workflow Automation & APIs",
    description:
      "Connect AI call workflows to your existing business tools via native integrations, webhooks, and open APIs — no custom development required.",
    bullets: [
      "CRM, calendar, and helpdesk sync",
      "Webhook and API access",
      "Zapier and Make compatible",
      "Post-call data and transcripts",
    ],
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Connect your phone system",
    description:
      "Connect your existing business phone number or provision a new one. VoiceAxis integrates with any phone system in minutes — no hardware or IT required.",
    icon: "PhoneCall",
  },
  {
    step: "02",
    title: "Configure your workflows",
    description:
      "Define your conversation scripts, routing rules, qualification criteria, and CRM integrations using the visual workflow builder. No coding needed.",
    icon: "Settings",
  },
  {
    step: "03",
    title: "AI handles your calls",
    description:
      "AI voice agents answer every call, carry natural conversations, qualify leads, book appointments, and route to humans when needed — 24/7, fully automated.",
    icon: "Zap",
  },
];

export const platformStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<1s", label: "Response Latency" },
  { value: "24/7", label: "Availability" },
  { value: "12+", label: "Languages" },
];
