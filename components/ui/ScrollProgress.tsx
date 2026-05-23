"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Spring settings for super smooth progression without jitter
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <motion.div
      id="scroll_progress_indicator"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C9A84C] via-[#E8C97A] to-[#C9A84C] z-[400] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
