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
      "A 24/7 AI voice agent that answers every inbound call instantly — no hold times, no missed calls, no staffing overhead.",
    bullets: [
      "Answers calls in under 1 second",
      "Handles multiple calls simultaneously",
      "Natural, human-like conversation",
      "Custom scripts and personas",
    ],
  },
  {
    id: "lead-qualification",
    icon: "UserCheck",
    title: "AI Lead Qualification",
    description:
      "Automatically qualifies every incoming lead using conversational AI — asking the right questions and scoring in real time.",
    bullets: [
      "Dynamic qualification questions",
      "Lead scoring and tagging",
      "Instant CRM sync",
      "Hot lead alerts to your team",
    ],
  },
  {
    id: "appointment-booking",
    icon: "CalendarCheck",
    title: "AI Appointment Booking",
    description:
      "Book appointments directly in the call, synced to your calendar — no human required.",
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
      "Launch automated outbound call campaigns — for follow-ups, re-engagement, appointment reminders, and sales prospecting.",
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
      "Handle tier-1 support calls autonomously — answer FAQs, check order status, and escalate when needed.",
    bullets: [
      "FAQ automation over voice",
      "Smart escalation to humans",
      "Post-call summaries and logs",
      "Integrate with your helpdesk",
    ],
  },
  {
    id: "missed-call-recovery",
    icon: "PhoneMissed",
    title: "Missed Call Recovery",
    description:
      "Never lose a lead from a missed call again. AI automatically calls back or sends a follow-up message within seconds.",
    bullets: [
      "Instant missed-call detection",
      "Automated callback campaigns",
      "SMS follow-up integration",
      "Lead recovery analytics",
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
      "Define your qualification criteria, conversation scripts, routing rules, and CRM integrations using the visual workflow builder. No coding needed.",
    icon: "Settings",
  },
  {
    step: "03",
    title: "AI handles your calls",
    description:
      "AI voice agents answer every call instantly, qualify leads, book appointments, and route to humans when needed — 24/7, fully automated.",
    icon: "Zap",
  },
];

export const platformStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<1s", label: "Answer Speed" },
  { value: "24/7", label: "Availability" },
  { value: "10M+", label: "Calls Automated" },
];
