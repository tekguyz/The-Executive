"use client";

import Link from "next/link";
import { X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE_INFO } from "@/lib/constants";
import DiamondShieldIcon from "../footer/DiamondShieldIcon";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isActive: (href: string) => boolean;
  navLinks: Array<{ label: string; href: string }>;
}

export default function MobileMenu({ isOpen, setIsOpen, isActive, navLinks }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
          id="mobile_nav_overlay"
          className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Overlay Header */}
          <div>
            <div className="flex items-center justify-between">
              {/* Logo Brand */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-[#C9A84C]/45 bg-[#111] rounded flex items-center justify-center">
                  <DiamondShieldIcon className="w-5.5 h-5.5 text-[#C9A84C]" id="mobile_diamond_svg" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-base tracking-wide text-[#F5F0E8] text-left">
                    The Executive Image
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.12em] text-[#C9A84C] leading-none uppercase mt-0.5 text-left font-bold">
                    Ceramic Coating & Mobile Detailing
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                id="mobile_menu_close_btn"
                className="p-2 border border-[rgba(201,168,76,0.3)] rounded text-[#C9A84C] hover:text-[#E8C97A] transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links inside Full-screen menu */}
            <nav className="flex flex-col gap-5 mt-16 text-left">
              {navLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xl font-display py-2 border-b border-white/[0.04] transition-all duration-300 ${
                        active ? "text-[#C9A84C] font-semibold pl-2" : "text-[#F5F0E8] hover:text-[#C9A84C]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Prominent Call-to-actions at the bottom of full-screen menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-5 mt-12 pb-6 border-t border-[rgba(201,168,76,0.1)] pt-6"
          >
            <p className="text-xs text-[#8A8580] tracking-widest uppercase font-semibold text-center font-bold">
              Ready for Showroom Perfection?
            </p>

            {/* Book a Detail CTA */}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              id="book_detail_cta_mobile"
              className="w-full py-4 text-center text-xs font-semibold tracking-widest uppercase border border-[#C9A84C] bg-[#C9A84C] text-[#0a0a0a] rounded transition-all duration-300 font-sans shadow-lg shadow-[#C9A84C]/15 font-bold"
            >
              Book a Detail
            </Link>
            
            {/* Call prominent button */}
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              id="mobile_call_prominent"
              className="flex items-center justify-center gap-2.5 w-full border border-white/[0.08] hover:border-[#C9A84C]/40 bg-[#111] hover:bg-[#C9A84C]/10 text-xs font-semibold tracking-widest text-[#E8C97A] py-4 rounded uppercase transition-colors font-bold"
            >
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              <span>Call Jason: {SITE_INFO.phone}</span>
            </a>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
