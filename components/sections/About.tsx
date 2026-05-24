"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import CountUp from "./about/CountUp";
import AboutArt from "./about/AboutArt";
import AboutHighlights from "./about/AboutHighlights";

interface SectionProps {
  id?: string;
}

export default function About({ id = "about" }: SectionProps) {
  const rightRef = useRef(null);
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <section 
      id={id} 
      className="py-24 bg-[#111111] relative overflow-hidden border-b border-[rgba(201,168,76,0.06)]"
    >
      {/* Subtle Backlighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A84C]/2 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine-style split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Premium CSS Fluid Gold Paint-Stroke Abstract Art Piece */}
          <AboutArt />

          {/* RIGHT SIDE: Personal Story */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left" ref={rightRef}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isRightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              id="about_story_content"
            >
              <p className="font-accent text-[#C9A84C] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
                ABOUT THE EXECUTIVE IMAGE
              </p>
              
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] leading-tight tracking-tight mt-3 mb-6">
                Jason&apos;s Standard is Excellence. Every Time.
              </h2>

              <div id="about_paragraphs" className="space-y-5 text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
                <p>
                  For over 17 years, The Executive Image has been the Treasure Coast&apos;s most trusted name in premium detailing and ceramic coating. Founded and operated by Jason, every vehicle — whether it&apos;s your daily commute car, weekend boat, or private aircraft — receives the same obsessive attention to detail that built our reputation.
                </p>
                <p>
                  We don&apos;t run a factory operation. We run a precision service. When Jason or his team arrives at your home, marina, or hangar, you&apos;re getting a dedicated professional who treats your investment like their own.
                </p>
                <p>
                  Our mobile operation means no drop-offs, no waiting rooms, and no strangers driving your vehicle. Just elite results, delivered with the convenience you deserve.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* STATS ROW BELOW SPLIT */}
        <div className="mt-20 pt-12 border-t border-[rgba(201,168,76,0.1)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight font-bold">
                <CountUp end={17} suffix="+" />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Years Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight font-bold">
                <CountUp end={1000} suffix="+" />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Vehicles Detailed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight font-bold">
                <CountUp end={5} suffix="★" />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Rated on Facebook
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight font-bold">
                <CountUp end={3} />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Specialties: Auto, Marine, Aero
              </span>
            </div>

          </div>
        </div>

        {/* 3-Column Highlights Subsection */}
        <AboutHighlights />

        {/* Small Centered Conversion Nudge */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-[#8A8580] text-sm mb-4 font-light">
            Ready to protect your investment?
          </p>
          <a 
            href="#contact" 
            className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black px-6 py-3 rounded font-accent text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}
