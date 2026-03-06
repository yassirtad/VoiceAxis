import type { Metadata } from "next";
import { industries } from "@/config/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";
import { Wrench } from "lucide-react";

const industry = industries.find((i) => i.id === "home-services")!;

export const metadata: Metadata = {
  title: "AI Call Center for Home Services — Never Miss a Service Call",
  description:
    "Answer every service call 24/7, qualify job requests, book appointments, and dispatch your team with AI phone automation for home service businesses.",
  keywords: ["AI receptionist home services", "home service call automation", "AI booking plumbing HVAC", "service business phone AI"],
};

export default function HomeServicesPage() {
  return <IndustryPageTemplate industry={industry} Icon={Wrench} />;
}
