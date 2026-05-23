"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE_INFO } from "@/lib/constants";
import { useNav } from "@/context/NavContext";

// Custom Diamond / Shield Icon in Gold
const DiamondShieldIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    id="diamond_shield_svg"
  >
    <path
      d="M12 2L3 7V12C3 18 12 22 12 22C12 22 21 18 21 12V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 5.5L6.5 11.2V13.8C6.5 16.5 12 19.5 12 19.5C12 19.5 17.5 16.5 17.5 13.8V11.2L12 5.5Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const { setMobileMenuOpen } = useNav();

  useEffect(() => {
    setMobileMenuOpen(isOpen);
  }, [isOpen, setMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    // initial check
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Close menu on resize to prevent buggy layout states
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Services",     href: "#services"     },
    { label: "About",        href: "#about"        },
    { label: "Reviews",      href: "#reviews"      },
    { label: "Contact",      href: "#contact"      },
    { label: "FAQ",          href: "#faq"          },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeHash === href;
    }
    return pathname === href;
  };

  return (
    <>
      <header
        id="site_header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
          scrolled
            ? "bg-[#111111]/95 backdrop-blur-md border-b border-[rgba(201,168,76,0.15)] h-16 lg:h-20"
            : "bg-transparent h-16 lg:h-20"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          
          {/* Top Bar for Desktop - Sits above main nav inside header height */}
          <div className="hidden lg:flex justify-end items-center h-5 border-b border-[rgba(201,168,76,0.1)] mb-1.5 pb-1">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              id="desktop_topbar_phone"
              className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-[#8A8580] hover:text-[#C9A84C] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C9A84C]" />
              <span>{SITE_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center justify-between w-full">
            {/* Logo Brand Block */}
            <Link href="/" id="navbar_brand_logo" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 border border-[#C9A84C]/45 bg-[#111] rounded flex items-center justify-center transition-transform group-hover:scale-105">
                <DiamondShieldIcon className="w-6 h-6 text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors" />
                <div className="absolute -inset-0.5 rounded border border-[#C9A84C]/25 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-medium text-base sm:text-lg tracking-wide text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors leading-[1.2]">
                  The Executive Image
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.15em] text-[#C9A84C] leading-none uppercase mt-0.5 font-light">
                  Ceramic Coating & Mobile Detailing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="desktop_nav_container" className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    id={`nav_link_${link.label.toLowerCase().replace(/\s+/g, '_')}`}
                    className={`relative py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group ${
                      active ? "text-[#C9A84C]" : "text-[#8A8580] hover:text-[#F5F0E8]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A84C] transition-all duration-300 ease-out ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`} 
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="#contact"
                id="book_detail_cta_desktop"
                className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0b0b0b] rounded font-sans"
              >
                Book a Detail
              </Link>
            </div>

            {/* Mobile Actions: Hamburger & Direct Calling shortcut */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                id="mobile_call_shortcut"
                className="p-2 border border-[#C9A84C]/30 rounded bg-[#111] text-[#E8C97A] hover:bg-[#C9A84C]/25 transition-colors"
                aria-label="Call Jason"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                id="mobile_menu_hamburger_btn"
                className="p-2 border border-[rgba(201,168,76,0.15)] rounded text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu with premium slide animations */}
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
                    <DiamondShieldIcon className="w-5.5 h-5.5 text-[#C9A84C]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-medium text-base tracking-wide text-[#F5F0E8]">
                      The Executive Image
                    </span>
                    <span className="font-sans text-[8px] tracking-[0.12em] text-[#C9A84C] leading-none uppercase mt-0.5">
                      Ceramic Coating & Mobile Detailing
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  id="mobile_menu_close_btn"
                  className="p-2 border border-[rgba(201,168,76,0.3)] rounded text-[#C9A84C] hover:text-[#E8C97A] transition-colors"
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
              <p className="text-xs text-[#8A8580] tracking-widest uppercase font-semibold text-center">
                Ready for Showroom Perfection?
              </p>

              {/* Book a Detail CTA */}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                id="book_detail_cta_mobile"
                className="w-full py-4 text-center text-xs font-semibold tracking-widest uppercase border border-[#C9A84C] bg-[#C9A84C] text-[#0a0a0a] rounded transition-all duration-300 font-sans shadow-lg shadow-[#C9A84C]/15"
              >
                Book a Detail
              </Link>
              
              {/* Call prominent button */}
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                id="mobile_call_prominent"
                className="flex items-center justify-center gap-2.5 w-full border border-white/[0.08] hover:border-[#C9A84C]/40 bg-[#111] hover:bg-[#C9A84C]/10 text-xs font-semibold tracking-widest text-[#E8C97A] py-4 rounded uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A84C]" />
                <span>Call Jason: {SITE_INFO.phone}</span>
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
