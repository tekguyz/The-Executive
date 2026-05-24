"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/lib/constants";
import ServiceCard from "./services/ServiceCard";

// Filter category configuration
const filters = ["All", "Automotive", "Marine", "Aeronautical"];

const serviceCategories: Record<string, string[]> = {
  "Ceramic Coating": ["Automotive", "Marine", "Aeronautical"],
  "Paint Correction": ["Automotive", "Marine", "Aeronautical"],
  "Mobile Detailing": ["Automotive"],
  "Marine Detailing": ["Marine"],
  "Aeronautical Detailing": ["Aeronautical"],
  "Headlight Restoration": ["Automotive"],
};

interface SectionProps {
  id?: string;
}

export default function Services({ id = "services" }: SectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices = activeFilter === "All"
    ? SERVICES
    : SERVICES.filter(service => serviceCategories[service.title]?.includes(activeFilter));

  return (
    <section 
      id={id} 
      className="py-24 bg-[#0a0a0a] relative border-y border-[rgba(201,168,76,0.1)] overflow-hidden"
    >
      {/* Inline styles for the infinite sweeping border shine */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes borderSweep {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />

      {/* Decorative Halo Backlights */}
      <div className="absolute top-[15%] right-[5%] w-96 h-96 bg-[#C9A84C]/3 rounded-full blur-[110px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-[#C9A84C]/2 rounded-full blur-[110px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <p className="font-accent text-[#C9A84C] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] leading-tight tracking-tight">
            Everything Your Vehicle Deserves
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C]/50 my-1"></div>
          <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed max-w-2xl">
            From daily drivers to supercars, boats to aircraft — we deliver showroom results at your location. Serving Stuart, Port St. Lucie &amp; the entire Treasure Coast.
          </p>
        </div>

        {/* Filter Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-accent font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#C9A84C] text-black border border-[#C9A84C] shadow-[0_4px_15px_rgba(201,168,76,0.25)]"
                    : "border border-white/[0.08] text-[#8A8580] hover:text-[#F5F0E8] hover:border-[#C9A84C]/40 bg-transparent"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* 3-Column / 2-Column / 1-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[480px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic CTA Footer Section */}
        <div className="mt-20 pt-10 border-t border-[rgba(201,168,76,0.06)] flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm text-[#8A8580] font-light mb-6">
            Not sure which specialty detailing package or paint solution fits your collection?
          </p>
          
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            id="services_footer_phone_cta"
            className="flex items-center gap-2 px-6 py-4 bg-[#111] hover:bg-[#C9A84C]/10 border border-[#C9A84C]/30 hover:border-[#C9A84C] rounded-lg text-xs font-accent tracking-widest uppercase text-[#E8C97A] transition-all"
          >
            <Phone className="w-4 h-4 text-[#C9A84C]" />
            <span>Call Jason Directly: {SITE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
