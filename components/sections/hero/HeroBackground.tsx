"use client";

import { motion } from "motion/react";
import { useHeroParallax } from "@/hooks/useHeroParallax";

const STATIC_GOLD_DOTS = [
  { id: 1, top: "12%", left: "8%", size: "4px", duration: "7s", delay: "0s" },
  { id: 2, top: "25%", left: "85%", size: "6px", duration: "9s", delay: "1.5s" },
  { id: 3, top: "45%", left: "15%", size: "5px", duration: "8s", delay: "0.5s" },
  { id: 4, top: "75%", left: "7%", size: "4px", duration: "6s", delay: "2s" },
  { id: 5, top: "68%", left: "80%", size: "5px", duration: "10s", delay: "1s" },
  { id: 6, top: "85%", left: "45%", size: "4px", duration: "7s", delay: "2.5s" },
  { id: 7, top: "18%", left: "40%", size: "5px", duration: "9s", delay: "3s" },
  { id: 8, top: "55%", left: "92%", size: "4px", duration: "7s", delay: "0.8s" },
  { id: 9, top: "32%", left: "65%", size: "3px", duration: "6s", delay: "1.2s" },
  { id: 10, top: "62%", left: "30%", size: "6px", duration: "11s", delay: "1.7s" },
  { id: 11, top: "5%", left: "70%", size: "4px", duration: "8s", delay: "2.2s" },
  { id: 12, top: "90%", left: "18%", size: "5px", duration: "8s", delay: "0.3s" },
  { id: 13, top: "40%", left: "48%", size: "4px", duration: "7s", delay: "2.8s" },
  { id: 14, top: "78%", left: "60%", size: "3px", duration: "6s", delay: "1.1s" },
  { id: 15, top: "28%", left: "28%", size: "6px", duration: "10s", delay: "0.4s" }
];

export default function HeroBackground() {
  const mousePos = useHeroParallax();

  return (
    <>
      {/* Inline styles for the infinite subtle glow floating animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes heroFloatPulse {
          0% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-16px) scale(1.15); opacity: 0.45; }
          100% { transform: translateY(0px) scale(1); opacity: 0.2; }
        }
      `}} />

      {/* Top Left Radial Gradient Accent (Darker, ambient) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_15%,#161616_0%,transparent_50%)] pointer-events-none z-0" />

      {/* Center Right Gold Luxury Halo Light Sweep */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_40%,rgba(201,168,76,0.14)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Elegant Vector Lines for premium industrial luxury mood */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C9A84C_1px,transparent_1px),linear-gradient(to_bottom,#C9A84C_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      {/* Huge Background Typography Watermark: "CERAMIC COATING" */}
      <div 
        className="absolute top-[50%] right-[-10%] select-none pointer-events-none text-white/[0.015] tracking-[0.14em] uppercase font-accent font-black rotate-[-10deg] leading-none transform -translate-y-1/2 z-0 scale-75 lg:scale-100"
        style={{ fontSize: "min(20vw, 320px)" }}
      >
        CERAMIC
      </div>

      {/* PARALLAX FLOATING DUST FIELD */}
      <motion.div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 22, stiffness: 65, mass: 0.6 }}
      >
        {STATIC_GOLD_DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-[#E8C97A] pointer-events-none"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animation: `heroFloatPulse ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
              boxShadow: "0 0 10px rgba(232, 201, 122, 0.4)"
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
