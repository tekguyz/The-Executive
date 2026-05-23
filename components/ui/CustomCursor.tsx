"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let isCurrent = true;
    const timer = setTimeout(() => {
      if (isCurrent) {
        setMounted(true);
      }
    }, 0);
    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 0);
        return () => clearTimeout(timer);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mounted, cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="hidden lg:block">
      <motion.div
        id="custom_pointer_diamond"
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[300] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Core Inner Dot inside a Diamond wrapper */}
        <motion.div
          animate={{
            rotate: 45,
            scale: isHovered ? 1.4 : 1,
            backgroundColor: isHovered ? "#C9A84C" : "rgba(201, 168, 76, 0.8)",
            border: isHovered ? "1px solid #E8C97A" : "1px solid rgba(201, 168, 76, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-2.5 h-2.5 transition-colors"
        />
        
        {/* Outer Halo Diamond Contour */}
        <motion.div
          animate={{
            rotate: 45,
            scale: isHovered ? 2.4 : 1.6,
            borderColor: isHovered ? "rgba(232, 201, 122, 0.8)" : "rgba(201, 168, 76, 0.25)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute inset-0 border border-solid rounded-[3px]"
        />
      </motion.div>
    </div>
  );
}
