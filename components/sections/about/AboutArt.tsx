"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles } from "lucide-react";

export default function AboutArt() {
  const leftRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });

  return (
    <div className="lg:col-span-5 w-full flex justify-center lg:justify-start" ref={leftRef}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        id="about_visual_art_container"
        className="relative w-full max-w-[420px] aspect-[4/5] rounded-[14px] border border-[#C9A84C]/25 bg-[#0a0a0a] p-[1.5px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
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

          {/* Middle design asset (Concentric circles looking like paint-correction scan tool lines) */}
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
  );
}
