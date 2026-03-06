export type Integration = {
  name: string;
  description: string;
  category: string;
  icon: string;
};

export const integrations: Integration[] = [
  {
    name: "HubSpot",
    description: "Sync contacts, deals, and call activity automatically.",
    category: "CRM",
    icon: "hubspot",
  },
  {
    name: "Salesforce",
    description: "Update leads and opportunities in real time from every call.",
    category: "CRM",
    icon: "salesforce",
  },
  {
    name: "GoHighLevel",
    description: "Native integration for agencies and GHL-powered workflows.",
    category: "CRM",
    icon: "gohighlevel",
  },
  {
    name: "Zapier",
    description: "Connect to 6,000+ apps with no-code automation.",
    category: "Automation",
    icon: "zapier",
  },
  {
    name: "Make",
    description: "Build advanced multi-step automations with visual workflows.",
    category: "Automation",
    icon: "make",
  },
  {
    name: "Google Calendar",
    description: "Book and sync appointments directly in the call.",
    category: "Scheduling",
    icon: "google",
  },
  {
    name: "Webhooks",
    description: "Push call events and data to any system in real time.",
    category: "API",
    icon: "webhook",
  },
  {
    name: "REST API",
    description: "Full API access to build custom integrations and workflows.",
    category: "API",
    icon: "api",
  },
];

export const integrationCategories = ["CRM", "Automation", "Scheduling", "API"];
