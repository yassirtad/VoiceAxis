import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service — VoiceAxis",
  description: "VoiceAxis Terms of Service. The terms governing use of the AI call center platform.",
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: January 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the VoiceAxis platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">2. Service Description</h2>
              <p>
                VoiceAxis provides an AI-powered call center infrastructure platform that enables businesses to automate inbound and outbound phone operations using AI voice agents. The platform includes features such as call handling, lead qualification, appointment booking, and CRM integrations.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">3. Account Registration</h2>
              <p>
                You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities occurring under your account. You must provide accurate and complete information during registration.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">4. Subscription and Billing</h2>
              <p className="mb-3">Subscriptions are billed monthly in advance. By subscribing, you authorize us to charge your payment method on a recurring basis.</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>Included minutes reset at the start of each billing cycle</li>
                <li>Overage minutes are billed at your plan&apos;s per-minute rate</li>
                <li>Upgrades take effect immediately; downgrades apply at next cycle</li>
                <li>Cancellations prevent renewal but do not generate refunds for unused periods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">5. Acceptable Use</h2>
              <p className="mb-3">You agree not to use the platform to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>Make calls without proper consent from recipients where required by law</li>
                <li>Violate any applicable telemarketing, TCPA, or privacy laws</li>
                <li>Engage in fraudulent, abusive, or harassing communications</li>
                <li>Distribute malware or engage in phishing</li>
                <li>Circumvent platform limits or rate restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">6. Compliance</h2>
              <p>
                You are solely responsible for ensuring your use of the platform complies with all applicable laws and regulations, including but not limited to TCPA, GDPR, CCPA, and applicable telemarketing regulations in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">7. Intellectual Property</h2>
              <p>
                VoiceAxis and its licensors retain all intellectual property rights in the platform. You receive a limited, non-exclusive license to use the platform for your business operations during your subscription term.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, VoiceAxis shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of revenue, profits, or data. Our aggregate liability shall not exceed the amount paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">9. Service Availability</h2>
              <p>
                We strive for 99.9% uptime but do not guarantee uninterrupted service. Planned maintenance windows will be communicated in advance. Enterprise plan customers receive SLA commitments under their service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">10. Termination</h2>
              <p>
                Either party may terminate the agreement with 30 days notice. We reserve the right to suspend or terminate accounts that violate these terms immediately and without notice.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">11. Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:text-blue-300">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
