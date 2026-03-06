import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — VoiceAxis",
  description: "VoiceAxis Privacy Policy. How we collect, use, and protect your data.",
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: January 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-bold mb-3">1. Introduction</h2>
              <p>
                VoiceAxis (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the {siteConfig.url} website and the VoiceAxis AI call center platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>Account registration information (name, email, company name)</li>
                <li>Payment information (processed securely via our payment processors)</li>
                <li>Call data including transcripts and recordings through our platform</li>
                <li>Communications with our support team</li>
              </ul>
              <p className="mt-3">We also collect usage data automatically:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 mt-2">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information and identifiers</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>To provide, operate, and maintain the VoiceAxis platform</li>
                <li>To process payments and manage subscriptions</li>
                <li>To send administrative communications and updates</li>
                <li>To improve our AI models and platform performance</li>
                <li>To detect and prevent fraud and abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">4. Data Sharing</h2>
              <p>We do not sell your personal data. We may share information with:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 mt-2">
                <li>Service providers who assist in operating the platform (under strict data processing agreements)</li>
                <li>Law enforcement when required by applicable law</li>
                <li>Successors in the event of a merger or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">5. Data Retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide services. Call recordings and transcripts are retained for 90 days by default and can be configured in your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">6. Your Rights</h2>
              <p>Depending on your location, you may have rights to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:text-blue-300">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">7. Security</h2>
              <p>
                We implement industry-standard security measures including encryption in transit (TLS), encryption at rest, access controls, and regular security audits. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">8. Cookies</h2>
              <p>
                We use cookies and similar technologies to operate the platform, analyze usage, and improve our services. You can control cookies through your browser settings, though some features may not function properly without them.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">9. Contact</h2>
              <p>
                For privacy-related inquiries, contact our Data Protection team at{" "}
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
