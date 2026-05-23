"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const progress = window.scrollY / scrollHeight;
      // Show if scrolled more than 40% of the page
      if (progress > 0.4) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          onClick={handleClick}
          id="floating_desktop_cta"
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 80, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          className="hidden lg:flex items-center gap-2 px-5 py-3.5 bg-[#C9A84C] hover:bg-[#E8C97A] text-black rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.35)] fixed bottom-8 right-8 z-[90] font-accent text-xs tracking-widest uppercase font-bold transition-colors group cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
          <span>Book Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
