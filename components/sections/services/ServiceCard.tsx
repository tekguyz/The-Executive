"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Shield, Sparkles, Car, Anchor, Plane, Zap, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";

// Icon components mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  sparkles: Sparkles,
  car: Car,
  anchor: Anchor,
  plane: Plane,
  zap: Zap,
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

interface ServiceType {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  priceFrom: string;
  icon: string;
  badge: string | null;
}

interface ServiceCardProps {
  service: ServiceType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Shield;
  const originalIndex = SERVICES.findIndex(s => s.title === service.title);

  return (
    <motion.div
      layout
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
}
