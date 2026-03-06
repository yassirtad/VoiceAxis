export type Industry = {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  useCases: string[];
  stats: { value: string; label: string }[];
  headline: string;
  subheadline: string;
  color: string;
};

export const industries: Industry[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    icon: "Stethoscope",
    title: "Healthcare Clinics",
    description:
      "Automate patient intake, appointment scheduling, and follow-up calls so your staff can focus on care.",
    useCases: [
      "Patient appointment booking",
      "Prescription refill reminders",
      "Pre-appointment screenings",
      "No-show follow-up calls",
      "Insurance verification",
    ],
    stats: [
      { value: "60%", label: "reduction in no-shows" },
      { value: "3x", label: "more appointments booked" },
      { value: "24/7", label: "patient accessibility" },
    ],
    headline: "AI Phone Operations for Healthcare Clinics",
    subheadline:
      "Automate appointment scheduling, patient reminders, and intake calls — HIPAA-friendly, always available.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    icon: "Building2",
    title: "Real Estate",
    description:
      "Qualify buyer and seller leads instantly, book showings automatically, and follow up on every inquiry.",
    useCases: [
      "Inbound lead qualification",
      "Showing scheduling",
      "Seller lead follow-up",
      "Open house registration",
      "Buyer pre-qualification",
    ],
    stats: [
      { value: "5x", label: "faster lead response" },
      { value: "40%", label: "more showings booked" },
      { value: "100%", label: "leads contacted" },
    ],
    headline: "AI Call Automation for Real Estate",
    subheadline:
      "Qualify every lead, book every showing, and follow up instantly — without adding headcount.",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "home-services",
    slug: "home-services",
    icon: "Wrench",
    title: "Home Services",
    description:
      "Answer every service call 24/7, qualify job requests, book appointments, and dispatch your team efficiently.",
    useCases: [
      "Inbound service request handling",
      "Job site qualification",
      "Technician dispatch scheduling",
      "Estimate follow-ups",
      "Review request automation",
    ],
    stats: [
      { value: "€14k+", label: "average monthly leads recovered" },
      { value: "0", label: "missed calls" },
      { value: "2x", label: "bookings per week" },
    ],
    headline: "AI Phone Automation for Home Service Businesses",
    subheadline:
      "Never miss a service call again. AI handles intake, booking, and follow-up automatically.",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "insurance",
    slug: "insurance",
    icon: "Shield",
    title: "Insurance Agencies",
    description:
      "Automate policy inquiries, qualify new prospects, and follow up on quote requests with AI voice agents.",
    useCases: [
      "Policy inquiry handling",
      "Quote request qualification",
      "Renewal reminder campaigns",
      "Claims intake triage",
      "Cross-sell and upsell follow-ups",
    ],
    stats: [
      { value: "70%", label: "faster quote response" },
      { value: "3x", label: "outbound reach capacity" },
      { value: "24/7", label: "policy support" },
    ],
    headline: "AI Voice Agents for Insurance Agencies",
    subheadline:
      "Qualify prospects, automate renewals, and handle policy inquiries — all on autopilot.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "automotive",
    slug: "automotive",
    icon: "Car",
    title: "Automotive Dealerships",
    description:
      "Handle every inbound inquiry, book test drives automatically, and follow up on every unsold lead.",
    useCases: [
      "Test drive scheduling",
      "Trade-in inquiry handling",
      "Service appointment booking",
      "Unsold lead follow-up",
      "Finance pre-qualification",
    ],
    stats: [
      { value: "2x", label: "test drives booked" },
      { value: "80%", label: "lead contact rate" },
      { value: "30%", label: "more service bookings" },
    ],
    headline: "AI Call Automation for Auto Dealerships",
    subheadline:
      "Book test drives, qualify buyers, and follow up on every lead automatically.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    id: "agencies",
    slug: "agencies",
    icon: "Briefcase",
    title: "Marketing Agencies",
    description:
      "White-label AI phone operations for your clients. Deploy AI call centers under your brand, at scale.",
    useCases: [
      "White-label AI phone agents",
      "Client lead qualification",
      "Outbound campaign management",
      "Multi-client dashboards",
      "Agency reseller program",
    ],
    stats: [
      { value: "10x", label: "client capacity" },
      { value: "60%", label: "ops cost reduction" },
      { value: "∞", label: "scalable clients" },
    ],
    headline: "AI Phone Operations for Marketing Agencies",
    subheadline:
      "Offer AI call center services to your clients under your brand. White-label and fully scalable.",
    color: "from-pink-500/20 to-fuchsia-500/20",
  },
];
