import type { Metadata } from "next";
import { industries } from "@/config/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";
import { Stethoscope } from "lucide-react";

const industry = industries.find((i) => i.id === "healthcare")!;

export const metadata: Metadata = {
  title: "AI Call Center for Healthcare Clinics — Patient Scheduling Automation",
  description:
    "Automate patient appointment scheduling, intake calls, and follow-up reminders with AI voice agents. 24/7 AI phone operations for healthcare clinics.",
  keywords: ["AI receptionist healthcare", "medical appointment scheduling AI", "AI patient booking", "healthcare call automation"],
};

export default function HealthcarePage() {
  return <IndustryPageTemplate industry={industry} Icon={Stethoscope} />;
}
