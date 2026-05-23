"use client";

import { useState } from "react";
import { Plus, HelpCircle, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS, SITE_INFO } from "@/lib/constants";

interface SectionProps {
  id?: string;
}

export default function FAQ({ id = "faq" }: SectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id={id} 
      className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-[rgba(201,168,76,0.06)] text-left"
    >
      
      {/* Decorative Halo Background glow */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-[#9A7A32]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#C9A84C]/2 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3 items-center">
          <p className="font-accent text-[#C9A84C] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold">
            ACQUISITION FAQS
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] leading-tight tracking-tight">
            Frequently Asked Queries
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C]/50 my-1"></div>
          <p className="text-xs sm:text-sm text-[#8A8580] leading-relaxed max-w-2xl font-light text-center">
            Everything you need to know about our premium ceramic molecular cure cycles, mobile detailing logistics, and vehicle preparations.
          </p>
        </div>

        {/* Custom Luxury Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#111111] border transition-all duration-300 rounded-xl overflow-hidden ${
                  isOpen 
                    ? "border-[#C9A84C]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-l-2 border-l-[#C9A84C]" 
                    : "border-white/[0.03] hover:border-white/[0.1] border-l-2 border-l-transparent"
                }`}
              >
                {/* Accordion header button toggler */}
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  id={`faq_toggle_btn_${index}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 select-none cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#C9A84C]/80 shrink-0" />
                    <span className="font-display font-medium text-sm sm:text-base text-[#F5F0E8] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Rotating Gold "+" Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 w-6 h-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#C9A84C]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                {/* Smoothed Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#8A8580] leading-relaxed font-light text-left pl-6 sm:pl-13 border-t border-white/[0.02]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Contact Info CTA Panel */}
        <div className="mt-12 bg-[#111111]/40 p-6 rounded-xl border border-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display text-[#F5F0E8] text-sm font-medium">Have an aeronautical or marine-specific concern?</h4>
            <p className="text-xs text-[#8A8580] font-light mt-1">Let Owner Jason walk you through safe hangar operations or yacht gelcoat wet correction processes.</p>
          </div>
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-accent tracking-widest uppercase text-[#E8C97A] border border-[#C9A84C]/50 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 py-3 px-6 rounded transition-all whitespace-nowrap cursor-pointer font-bold bg-[#111111]"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Call Jason Directly</span>
          </a>
        </div>

      </div>
    </section>
  );
}
