"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/config/faq";
import Link from "next/link";

export function FAQSection() {
  const displayedFAQs = faqItems.slice(0, 7);

  return (
    <section className="py-24 bg-[#0A0F1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Common questions,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              answered.
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about deploying AI phone operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {displayedFAQs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white/[0.03] border border-white/10 rounded-xl px-6 data-[state=open]:border-blue-500/30 data-[state=open]:bg-blue-500/[0.03] transition-colors"
              >
                <AccordionTrigger className="text-white font-medium text-left hover:no-underline py-5 hover:text-blue-300 transition-colors [&[data-state=open]]:text-blue-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-slate-400 text-sm mb-3">Have more questions?</p>
          <Link href="/faq" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            View all FAQs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
