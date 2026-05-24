"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { getPlatformBadge } from "./getPlatformBadge";

interface TestimonialSliderCardProps {
  activeIndex: number;
  scrollToCard: (idx: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function TestimonialSliderCard({
  activeIndex,
  scrollToCard,
  handlePrev,
  handleNext,
}: TestimonialSliderCardProps) {
  const featured = TESTIMONIALS[activeIndex];
  const featuredBadge = getPlatformBadge(featured.platform);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-left">
      
      {/* Main Card View */}
      <div className="bg-[#111111] border border-[#C9A84C]/25 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
        
        {/* Ambient Watermarked Giant Quotes */}
        <span className="absolute top-4 left-6 text-[#C9A84C]/5 font-serif text-[180px] select-none leading-none pointer-events-none font-display">
          “
        </span>
        <span className="absolute bottom-[-50px] right-6 text-[#C9A84C]/5 font-serif text-[180px] select-none leading-none pointer-events-none font-display">
          ”
        </span>

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Star Rating Panel */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(featured.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
            ))}
          </div>

          {/* Central Text Stream */}
          <div className="min-h-[140px] sm:min-h-[110px] flex items-center justify-center">
            <p 
              className="text-sm sm:text-base lg:text-lg text-[#F5F0E8] font-light leading-relaxed italic max-w-xl"
              id={`featured_testimonial_paragraph_${activeIndex}`}
            >
              &ldquo;{featured.text}&rdquo;
            </p>
          </div>

          {/* Review Person details */}
          <div className="mt-8 border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between w-full">
            <div className="text-center sm:text-left">
              <h4 
                id="featured_testimonial_name"
                className="font-display font-medium text-lg text-white"
              >
                {featured.name}
              </h4>
              <p className="text-xs text-[#8A8580] mt-0.5 font-light">
                {featured.location} · {featured.vehicle}
              </p>
            </div>

            {/* Badge platform locator */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded border text-xs tracking-wider uppercase font-semibold ${featuredBadge.color}`}>
              {featuredBadge.icon}
              <span>{featuredBadge.label}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Controls Component (Slider Navigator) */}
      <div className="flex items-center justify-between mt-8" id="testimonials_slider_controls_panel">
        {/* Selector Indicators */}
        <div className="flex gap-2.5">
          {TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToCard(dotIdx)}
              id={`testimonial_dot_trigger_${dotIdx}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === dotIdx 
                  ? "bg-[#C9A84C] scale-110" 
                  : "bg-[#252525] hover:bg-[#8A8580]"
              }`}
              aria-label={`Show review ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Nav Arrows */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            id="testimonial_prev_arrow_btn"
            className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C9A84C] text-[#8A8580] hover:text-[#C9A84C] hover:bg-white/[0.02] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            id="testimonial_next_arrow_btn"
            className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C9A84C] text-[#8A8580] hover:text-[#C9A84C] hover:bg-white/[0.02] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
