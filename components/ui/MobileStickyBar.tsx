"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { useNav } from "@/context/NavContext";

export default function MobileStickyBar() {
  const [showSticky, setShowSticky] = useState(false);
  const { mobileMenuOpen } = useNav();

  useEffect(() => {
    const handleScroll = () => {
      // Show when the customer has scrolled past the hero section (roughly 400px)
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky || mobileMenuOpen) return null;

  return (
    <div 
      id="mobile_sticky_cta_panel"
      className="md:hidden fixed bottom-3 left-3 right-3 bg-[#0e0e0ed9] backdrop-blur-md border border-[#C9A84C]/35 rounded-xl z-[100] p-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.9)] flex items-center justify-between gap-2.5 transition-all duration-300"
    >
      {/* Phone shortcut button */}
      <a
        href={`tel:${SITE_INFO.phoneRaw}`}
        id="sticky_phone_trigger"
        className="flex-1 py-3.5 bg-[#111111]/80 border border-[#C9A84C]/45 rounded-lg text-[10px] sm:text-xs font-accent tracking-widest text-white uppercase font-bold flex items-center justify-center gap-2"
      >
        <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span>Call Jason</span>
      </a>

      {/* Contact scroll quick transition */}
      <a
        href="#contact"
        id="sticky_quote_trigger"
        className="flex-1 py-3.5 bg-[#C9A84C] rounded-lg text-[10px] sm:text-xs font-accent tracking-widest text-black uppercase font-bold flex items-center justify-center gap-2"
      >
        <MessageSquare className="w-3.5 h-3.5 text-black" />
        <span>Get a Quote</span>
      </a>
    </div>
  );
}
