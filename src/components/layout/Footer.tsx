import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PhoneCall, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "AI Receptionist", href: "/ai-receptionist" },
    { label: "AI Outbound Calling", href: "/ai-outbound-calling" },
    { label: "AI Appointment Booking", href: "/ai-appointment-booking" },
    { label: "AI Call Center", href: "/ai-call-center" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Home Services", href: "/industries/home-services" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Agencies", href: "/industries/agencies" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#060B17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <PhoneCall className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                Voice<span className="text-blue-400">Axis</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              AI Call Center Infrastructure for modern businesses. Automate every phone interaction — inbound and outbound — with enterprise-grade AI voice agents.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} VoiceAxis. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
