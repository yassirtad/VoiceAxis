import type { Metadata } from "next";
import { industries } from "@/config/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";
import { Briefcase } from "lucide-react";

const industry = industries.find((i) => i.id === "agencies")!;

export const metadata: Metadata = {
  title: "White-Label AI Call Center for Marketing Agencies",
  description:
    "Offer AI phone operations to your clients under your brand. White-label AI call center platform for marketing agencies with multi-client dashboards.",
  keywords: ["white label AI call center", "agency AI receptionist", "AI phone operations for agencies", "reseller AI calling platform"],
};

export default function AgenciesPage() {
  return <IndustryPageTemplate industry={industry} Icon={Briefcase} />;
}
