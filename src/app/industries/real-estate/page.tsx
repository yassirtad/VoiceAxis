import type { Metadata } from "next";
import { industries } from "@/config/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";
import { Building2 } from "lucide-react";

const industry = industries.find((i) => i.id === "real-estate")!;

export const metadata: Metadata = {
  title: "AI Receptionist for Real Estate — Lead Qualification & Showing Booking",
  description:
    "Qualify buyer and seller leads instantly, book showings automatically, and follow up on every inquiry with AI voice agents built for real estate.",
  keywords: ["AI receptionist real estate", "real estate lead qualification AI", "AI showing scheduler", "real estate call automation"],
};

export default function RealEstatePage() {
  return <IndustryPageTemplate industry={industry} Icon={Building2} />;
}
