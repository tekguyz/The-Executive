"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import HeroBackground from "./hero/HeroBackground";

interface SectionProps {
  id?: string;
}

export default function Hero({ id = "hero" }: SectionProps) {
  return (
    <section 
      id={id} 
      className="relative min-h-screen lg:h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden pt-20"
    >
      <HeroBackground />

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full">
        
        {/* Align center on mobile, left on desktop */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl">
          
          {/* Eyebrow Unit: Thin Accent Line + Brand Intro */}
          <div className="flex flex-col items-center lg:items-start mb-6 w-full">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "42px", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-[1.5px] bg-[#C9A84C] mb-4"
              id="hero_top_accent_line"
            />
            
            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-accent text-xs sm:text-sm tracking-[0.22em] text-[#C9A84C] uppercase font-light"
              id="hero_eyebrow_text"
            >
              Treasure Coast&apos;s
            </motion.span>
          </div>

          {/* Heading Line 2: "Premier Detail" (italic) */}
          <motion.h1
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[44px] sm:text-[76px] lg:text-[96px] font-display italic font-medium leading-[1.0] text-[#F5F0E8] tracking-tight w-full"
            id="hero_main_title_line1"
          >
            Premier Detail
          </motion.h1>

          {/* Heading Line 3: "Experience." (with Gold period) */}
          <motion.h1
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[44px] sm:text-[76px] lg:text-[96px] font-display font-medium leading-[1.0] text-[#F5F0E8] tracking-tight mt-0.5 sm:mt-2 w-full"
            id="hero_main_title_line2"
          >
            Experience<span className="text-[#C9A84C]">.</span>
          </motion.h1>

          {/* Subheading Block */}
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xs sm:text-sm lg:text-base text-[#8A8580] max-w-2xl font-sans font-light leading-relaxed mt-6 sm:mt-8"
            id="hero_description_subtext"
          >
            Professional Ceramic Coating, Paint Correction &amp; Mobile Detailing for Automotive, Marine &amp; Aeronautical — Serving Stuart, Port St. Lucie &amp; the Entire Treasure Coast.
          </motion.p>

          {/* TWO DUAL CALL-TO-ACTIONS */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto"
            id="hero_cta_buttons_group"
          >
            <Link
              href="#contact"
              id="hero_cta_book"
              className="px-8 py-3.5 sm:py-4 bg-[#C9A84C] hover:bg-[#E8C97A] text-[#0a0a0a] font-sans tracking-widest text-xs uppercase rounded transition-colors shadow-lg shadow-[#C9A84C]/15 flex items-center justify-center gap-2 font-medium"
            >
              <span>Book Your Detail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="#services"
              id="hero_cta_work"
              className="px-8 py-3.5 sm:py-4 border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#F5F0E8] hover:bg-white/[0.03] font-sans tracking-widest text-xs uppercase rounded transition-all flex items-center justify-center gap-2"
            >
              <span>See Our Work</span>
            </Link>
          </motion.div>

          {/* THREE METICULOUS TRUST BADGES */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 w-full text-xs text-[#8A8580]"
            id="hero_trust_badges_container"
          >
            <div className="flex items-center gap-2" id="badge_mobile">
              <span className="text-[#C9A84C] text-sm leading-none">✦</span>
              <span className="font-sans font-light uppercase tracking-widest text-[9px] sm:text-[10px] text-[#F5F0E8]">
                Mobile Service <span className="text-[#8A8580]">(We Come to You)</span>
              </span>
            </div>
            
            <div className="flex items-center gap-2" id="badge_services">
              <span className="text-[#C9A84C] text-sm leading-none">✦</span>
              <span className="font-sans font-light uppercase tracking-widest text-[9px] sm:text-[10px] text-[#F5F0E8]">
                Automotive · Marine · Aeronautical
              </span>
            </div>

            <div className="flex items-center gap-2" id="badge_rating">
              <span className="text-[#C9A84C] text-sm leading-none">✦</span>
              <span className="font-sans font-light uppercase tracking-widest text-[9px] sm:text-[10px] text-[#F5F0E8]">
                Treasure Coast&apos;s #1 Rated
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SUBTLE BOTTOM EDGE SMOOTH TRANSITION COMPONENT */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      {/* BOUNCING SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <Link 
          href="#services" 
          id="hero_bouncing_scroll_indicator" 
          className="flex flex-col items-center gap-1 group"
          aria-label="Scroll to services"
        >
          <span className="text-[9px] font-accent tracking-[0.3em] uppercase text-[#8A8580] group-hover:text-[#C9A84C] transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
