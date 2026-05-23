"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Award, ShieldCheck, Star, Sparkles, MapPin, Layers, Phone } from "lucide-react";

import { useCountUp } from "@/lib/hooks";

// Custom Count Up component using the premium useCountUp hook
function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const { ref, display } = useCountUp({ end, duration, suffix });
  return (
    <span ref={ref} id={`count_${end}`}>
      {display}
    </span>
  );
}

interface SectionProps {
  id?: string;
}

export default function About({ id = "about" }: SectionProps) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <section 
      id={id} 
      className="py-24 bg-[#111111] relative overflow-hidden border-b border-[rgba(201,168,76,0.06)]"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweepReflection {
          0% { transform: translate(-100%, -100%) rotate(45deg); opacity: 0; }
          15% { opacity: 0.7; }
          45% { opacity: 0.7; }
          60% { transform: translate(100%, 100%) rotate(45deg); opacity: 0; }
          100% { transform: translate(100%, 100%) rotate(45deg); opacity: 0; }
        }
      `}} />

      {/* Subtle Backlighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A84C]/2 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine-style split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Premium CSS Fluid Gold Paint-Stroke Abstract Art Piece */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start" ref={leftRef}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              id="about_visual_art_container"
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-[14px] border border-[#C9A84C]/25 bg-[#0a0a0a] p-[1.5px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              {/* Corner luxury alignment bracket lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A84C]/50 pointer-events-none z-20" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C9A84C]/50 pointer-events-none z-20" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C9A84C]/50 pointer-events-none z-20" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A84C]/50 pointer-events-none z-20" />

              {/* Inner Luxury Canvas with layered radial gradients to look like wet paint & gold gloss */}
              <div 
                className="relative w-full h-full rounded-[12px] overflow-hidden flex flex-col justify-between p-8"
                style={{
                  background: `
                    radial-gradient(circle at 10% 15%, rgba(201, 168, 76, 0.17) 0%, transparent 45%),
                    radial-gradient(circle at 85% 85%, rgba(19, 19, 19, 1) 0%, transparent 60%),
                    radial-gradient(circle at 50% 50%, rgba(15, 15, 15, 1) 0%, rgba(8, 8, 8, 1) 100%)
                  `
                }}
              >
                {/* Diagonal sweep light movement replicating direct showroom spot reflections */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C9A84C]/15 to-transparent pointer-events-none"
                  style={{
                    width: '200%',
                    height: '200%',
                    top: '-50%',
                    left: '-50%',
                    animation: 'sweepReflection 9s ease-in-out infinite'
                  }}
                />

                {/* Background Fluid Stroke Shapes made with CSS */}
                <div 
                  className="absolute top-[35%] left-[10%] w-[120%] h-[20%] bg-gradient-to-r from-transparent via-[#C9A84C]/6 to-transparent blur-2xl rotate-[-35deg]"
                  style={{ transformOrigin: 'center' }}
                />
                <div 
                  className="absolute top-[48%] left-[-10%] w-[130%] h-[12%] bg-gradient-to-r from-transparent via-[#E8C97A]/4 to-transparent blur-xl rotate-[-20deg]"
                  style={{ transformOrigin: 'center' }}
                />

                {/* Header elements inside the abstract art */}
                <div className="relative z-10 text-left">
                  <div className="font-sans text-[8px] tracking-[0.25em] text-[#C9A84C] uppercase font-bold mb-1">
                    PAINT RESTORATION CLINIC
                  </div>
                  <div className="w-6 h-[1px] bg-[#C9A84C]/40" />
                </div>

                {/* Middle design asset (Golden wire concentric circles looking like paint-correction scan tool lines) */}
                <div className="relative z-10 w-full flex items-center justify-center opacity-25">
                  <div className="w-32 h-32 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-dashed border-[#C9A84C]/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-[#C9A84C]/40 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#C9A84C]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="relative z-10 text-left">
                  <p 
                    className="font-accent text-[11px] sm:text-xs tracking-[0.28em] text-[#E8C97A] uppercase font-bold mb-1"
                    id="css_art_watermark_text"
                  >
                    PRECISION. PASSION. PERFECTION.
                  </p>
                  <p className="text-[9px] text-[#8A8580] font-sans font-light leading-none">
                    LEAD MASTER ARTISAN JASON — STUART, FL
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

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
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight">
                <CountUp end={17} suffix="+" />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Years Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight">
                <CountUp end={1000} suffix="+" />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Vehicles Detailed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight">
                <CountUp end={5} suffix="★" />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Rated on Facebook
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display italic font-medium text-[#C9A84C] leading-none mb-2 tracking-tight">
                <CountUp end={3} />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-[#8A8580] tracking-widest uppercase font-semibold">
                Specialties: Auto, Marine, Aero
              </span>
            </div>

          </div>
        </div>

        {/* 3-Column Highlights Subsection (absorbed from WhyUs) */}
        <div className="mt-20 pt-16 border-t border-[rgba(201,168,76,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Point 1 */}
            <div className="bg-[#0c0c0c] border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-[#C9A84C]/30 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-medium text-[#F5F0E8] mb-2">We Come To You</h3>
              <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
                Home, office, marina, or hangar — fully mobile, zero drop-offs.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-[#0c0c0c] border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-[#C9A84C]/30 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-medium text-[#F5F0E8] mb-2">Auto · Marine · Aero</h3>
              <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
                One of the only Treasure Coast detailers certified across all three.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-[#0c0c0c] border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-[#C9A84C]/30 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-medium text-[#F5F0E8] mb-2">Talk to Jason</h3>
              <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
                The owner answers. No call centers, no booking apps.
              </p>
            </div>
          </div>
        </div>

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
