import type { Metadata } from "next";
import { industries } from "@/config/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";
import { Shield } from "lucide-react";

const industry = industries.find((i) => i.id === "insurance")!;

export const metadata: Metadata = {
  title: "AI Voice Agents for Insurance Agencies — Quote & Policy Automation",
  description:
    "Automate policy inquiries, qualify prospects, and run renewal campaigns with AI voice agents built for insurance agencies.",
  keywords: ["AI receptionist insurance", "insurance call automation", "AI policy inquiry", "insurance agency AI calling"],
};

export default function InsurancePage() {
  return <IndustryPageTemplate industry={industry} Icon={Shield} />;
}
