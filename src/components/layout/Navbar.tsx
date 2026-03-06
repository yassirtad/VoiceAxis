"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const solutionsDropdown = [
  { label: "AI Receptionist", href: "/ai-receptionist", desc: "24/7 inbound call handling" },
  { label: "AI Outbound Calling", href: "/ai-outbound-calling", desc: "Automated sales campaigns" },
  { label: "AI Appointment Booking", href: "/ai-appointment-booking", desc: "Calendar automation" },
  { label: "AI Call Center", href: "/ai-call-center", desc: "Full platform overview" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <PhoneCall className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Voice<span className="text-blue-400">Axis</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Solutions
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    dropdownOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-[#0D1526]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 p-2"
                  >
                    {solutionsDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { label: "Industries", href: "/industries" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-white/5"
              >
                Login
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-500/30"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0A0F1E]/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {[
                { label: "Solutions", href: "/solutions" },
                { label: "AI Receptionist", href: "/ai-receptionist" },
                { label: "AI Outbound Calling", href: "/ai-outbound-calling" },
                { label: "AI Appointment Booking", href: "/ai-appointment-booking" },
                { label: "Industries", href: "/industries" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5">
                    Login
                  </Button>
                </Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
