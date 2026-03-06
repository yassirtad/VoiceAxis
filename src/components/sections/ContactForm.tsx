"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

const businessTypes = [
  "Healthcare Clinic",
  "Real Estate",
  "Home Services",
  "Insurance",
  "Automotive",
  "Marketing Agency",
  "Other",
];

const planOptions = ["Starter (€99/mo)", "Growth (€299/mo)", "Enterprise (€890/mo)", "Not sure yet"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="h-full flex items-center justify-center p-8 rounded-2xl bg-white/[0.03] border border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-white font-bold text-xl mb-2">Message sent!</h3>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            We'll be in touch within 24 hours to schedule your AI call center strategy call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            First name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John"
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Last name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Smith"
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Work email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="john@company.com"
          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone number</label>
        <input
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Business type</label>
        <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
          <option value="" className="bg-[#0D1526]">Select your industry</option>
          {businessTypes.map((type) => (
            <option key={type} value={type} className="bg-[#0D1526]">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Interested plan</label>
        <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
          <option value="" className="bg-[#0D1526]">Select a plan</option>
          {planOptions.map((plan) => (
            <option key={plan} value={plan} className="bg-[#0D1526]">
              {plan}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Tell us about your business <span className="text-red-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="How many calls do you handle per month? What are your main challenges with phone operations?"
          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 disabled:opacity-70"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            Send Message
            <Send className="w-4 h-4" />
          </div>
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-blue-400 hover:text-blue-300">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
