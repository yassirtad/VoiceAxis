import type { Metadata } from "next";
import { industries } from "@/config/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";
import { Car } from "lucide-react";

const industry = industries.find((i) => i.id === "automotive")!;

export const metadata: Metadata = {
  title: "AI Call Center for Auto Dealerships — Test Drive & Service Scheduling",
  description:
    "Book test drives, qualify leads, and follow up on every inquiry automatically with AI voice agents for automotive dealerships.",
  keywords: ["AI receptionist auto dealership", "dealership call automation", "AI test drive booking", "automotive AI phone"],
};

export default function AutomotivePage() {
  return <IndustryPageTemplate industry={industry} Icon={Car} />;
}
