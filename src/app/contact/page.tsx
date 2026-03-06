import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact VoiceAxis — Talk to the AI Call Center Team",
  description:
    "Get in touch with VoiceAxis. Talk to our team, ask about enterprise pricing, or get support for your AI call center.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            Contact
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Let&apos;s talk{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI phone ops.
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Talk to our team, ask about enterprise pricing, or get help with your AI call center.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-white mb-6">Contact information</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white text-sm font-medium hover:text-blue-300 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white text-sm font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to expect */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-white font-semibold mb-3">What happens next?</h3>
                <div className="space-y-2.5">
                  {[
                    "We'll review your submission within 24 hours",
                    "A specialist will schedule a call at your convenience",
                    "We'll design a custom AI phone strategy for your business",
                    "Your AI agents go live and start handling calls automatically",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400 font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
