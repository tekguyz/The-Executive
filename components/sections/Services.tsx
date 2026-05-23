"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles, Car, Anchor, Plane, Zap, Check, Phone } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/lib/constants";

// Icon components mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  sparkles: Sparkles,
  car: Car,
  anchor: Anchor,
  plane: Plane,
  zap: Zap,
};

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

// Animation variants for beautiful filtered transitions
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.25,
    },
  },
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
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Shield;
              const originalIndex = SERVICES.findIndex(s => s.title === service.title);
              
              return (
                <motion.div
                  layout
                  key={service.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  id={`service_card_${originalIndex}`}
                  className="relative p-[1.5px] rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(201,168,76,0.12)] bg-[#1c1c1c] hover:bg-transparent"
                >
                  {/* The animated sweeping background line, only triggered on card hover */}
                  <div 
                    className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#C9A84C] group-hover:via-[#C9A84C]/10 group-hover:to-[#C9A84C] transition-opacity duration-700 opacity-0 group-hover:opacity-100 animate-[borderSweep_4s_linear_infinite] pointer-events-none" 
                    style={{ backgroundSize: '200% auto' }} 
                  />

                  {/* Main Card Content Shield */}
                  <div className="relative inset-[0.5px] bg-[#141414] rounded-[11px] z-10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[460px]">
                    
                    {/* Top: Icon + Optional Badge */}
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/10 group-hover:border-[#C9A84C]/45 transition-all duration-300">
                          <IconComponent className="w-5.5 h-5.5" />
                        </div>

                        {service.badge && (
                          <span className="bg-[#C9A84C] text-[#0a0a0a] text-[9px] font-accent tracking-widest uppercase font-semibold py-1 px-2.5 rounded">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Subtitle & Title */}
                      <span 
                        id={`service_card_subtitle_${originalIndex}`}
                        className="text-[9px] font-accent text-[#C9A84C] tracking-[0.15em] uppercase block mb-1"
                      >
                        {service.subtitle}
                      </span>
                      <h3 
                        id={`service_card_title_${originalIndex}`}
                        className="text-xl font-display font-medium text-[#F5F0E8] tracking-tight mb-4"
                      >
                        {service.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Bullet Points with Gold checkmarks */}
                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-[#8A8580] font-light">
                            <Check className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Panel: Price starter and Quote Action */}
                    <div className="border-t border-white/[0.04] pt-5 flex items-center justify-between w-full mt-auto">
                      <div>
                        <span className="text-[8px] font-accent text-[#8A8580] tracking-wider uppercase block">Pricing Tier</span>
                        <span className="text-[15px] font-display font-semibold text-[#F5F0E8] tracking-wide">
                          {service.priceFrom}
                        </span>
                      </div>

                      <Link
                        href="#contact"
                        id={`service_card_cta_${originalIndex}`}
                        className="px-4 py-2.5 text-[9px] font-accent tracking-widest uppercase text-[#C9A84C] border border-[#C9A84C]/35 hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-300 rounded font-bold"
                      >
                        Get a Quote
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
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
