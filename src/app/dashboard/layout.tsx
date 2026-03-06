import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export const metadata: Metadata = {
  title: "Dashboard — VoiceAxis",
  description: "Manage your AI call center, view call analytics, and configure your AI voice agents.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0A0F1E]">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
