"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, Facebook, Chrome, Heart, Phone } from "lucide-react";
import { TESTIMONIALS, SITE_INFO } from "@/lib/constants";

// Map platforms to custom luxurious badges and brand-specific accent hues
const getPlatformBadge = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return {
        icon: <Facebook className="w-3 h-3 text-[#1877F2]" />,
        label: "Facebook Verified",
        color: "border-[#1877F2]/20 text-[#1877F2] bg-[#1877F2]/5"
      };
    case "nextdoor":
      return {
        icon: <Heart className="w-3 h-3 text-[#00B512]" />,
        label: "Nextdoor Fav",
        color: "border-[#00B512]/20 text-[#00B512] bg-[#00B512]/5"
      };
    case "google":
    default:
      return {
        icon: <Chrome className="w-3 h-3 text-[#EA4335]" />,
        label: "Google Review",
        color: "border-[#EA4335]/20 text-[#EA4335] bg-[#EA4335]/5"
      };
  }
};

interface SectionProps {
  id?: string;
}

export default function Testimonials({ id = "reviews" }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Auto-align the active state of mobile indicators during swiping
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const computedIndex = Math.round(scrollLeft / clientWidth);
    if (computedIndex >= 0 && computedIndex < TESTIMONIALS.length) {
      setActiveIndex(computedIndex);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Keep mobile scroll alignment in sync if activeIndex changes from other hooks
  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollTo({
        left: index * mobileScrollRef.current.clientWidth,
        behavior: "smooth"
      });
    }
  };

  // Repeated arrays to feed the seamless marquee infinite loops
  const marqueeRowLeft = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const marqueeRowRight = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section 
      id={id} 
      className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-[rgba(201,168,76,0.06)]"
    >
      {/* Inline Styles defining smooth hardware-accelerated infinite Marquee translations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translate3d(-33.3333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marqueeScrollLeft 32s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeScrollRight 32s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Luxury Backdrop Glows */}
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-[#C9A84C]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 flex flex-col items-center gap-3">
          <p className="font-accent text-[#C9A84C] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
            WHAT OUR CLIENTS SAY
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] leading-tight tracking-tight">
            Trusted by Treasure Coast Owners
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C]/50 my-1"></div>
          <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed max-w-2xl">
            From daily drivers to boats to aero fleet units — our pristine custom reputation is forged with surgical care, one investment at a time.
          </p>
        </div>

        {/* ==============================================
            DESKTOP ONLY: TWO ROW OPPOSITE MARQUEES
           ============================================== */}
        <div className="hidden lg:flex flex-col gap-8 w-full overflow-hidden select-none mb-16">
          
          {/* Row 1: Scrolling Left */}
          <div className="flex w-[300%] select-none pointer-events-none pr-4">
            <div className="flex gap-6 animate-marquee-left whitespace-nowrap">
              {marqueeRowLeft.map((test, idx) => {
                const badge = getPlatformBadge(test.platform);
                return (
                  <div
                    key={`marquee_l_${idx}`}
                    className="w-[380px] bg-[#111] border border-white/[0.03] p-6 rounded-xl shrink-0 whitespace-normal relative overflow-hidden"
                  >
                    {/* Big back watermarked quote */}
                    <Quote className="absolute right-4 bottom-4 w-28 h-28 text-white/[0.015] pointer-events-none rotate-180" />

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />
                      ))}
                    </div>

                    <p className="text-[13px] text-[#8A8580] font-light leading-relaxed mb-4 line-clamp-3">
                      &ldquo;{test.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
                      <div>
                        <h4 className="font-display font-semibold text-white text-xs tracking-wider">{test.name}</h4>
                        <span className="text-[9px] text-[#8A8580] font-light">{test.location} · {test.vehicle}</span>
                      </div>
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[9px] tracking-wider uppercase font-semibold ${badge.color}`}>
                        {badge.icon}
                        <span>{badge.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-[300%] select-none pointer-events-none pl-4">
            <div className="flex gap-6 animate-marquee-right whitespace-nowrap">
              {marqueeRowRight.map((test, idx) => {
                const badge = getPlatformBadge(test.platform);
                return (
                  <div
                    key={`marquee_r_${idx}`}
                    className="w-[380px] bg-[#111] border border-white/[0.03] p-6 rounded-xl shrink-0 whitespace-normal relative overflow-hidden"
                  >
                    {/* Big back watermarked quote */}
                    <Quote className="absolute right-4 bottom-4 w-28 h-28 text-white/[0.015] pointer-events-none rotate-180" />

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />
                      ))}
                    </div>

                    <p className="text-[13px] text-[#8A8580] font-light leading-relaxed mb-4 line-clamp-3">
                      &ldquo;{test.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
                      <div>
                        <h4 className="font-display font-semibold text-white text-xs tracking-wider">{test.name}</h4>
                        <span className="text-[9px] text-[#8A8580] font-light">{test.location} · {test.vehicle}</span>
                      </div>
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[9px] tracking-wider uppercase font-semibold ${badge.color}`}>
                        {badge.icon}
                        <span>{badge.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ==============================================
            INTERACTIVE SLIDER BLOCK (Featured Review)
           ============================================== */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          
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
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>

              {/* Central Text Stream */}
              <div className="min-h-[140px] sm:min-h-[110px] flex items-center justify-center">
                <p 
                  className="text-sm sm:text-base lg:text-lg text-[#F5F0E8] font-light leading-relaxed italic max-w-xl"
                  id={`featured_testimonial_paragraph_${activeIndex}`}
                >
                  &ldquo;{TESTIMONIALS[activeIndex].text}&rdquo;
                </p>
              </div>

              {/* Review Person details */}
              <div className="mt-8 border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between w-full">
                <div className="text-center sm:text-left">
                  <h4 
                    id="featured_testimonial_name"
                    className="font-display font-medium text-lg text-white"
                  >
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-xs text-[#8A8580] mt-0.5 font-light">
                    {TESTIMONIALS[activeIndex].location} · {TESTIMONIALS[activeIndex].vehicle}
                  </p>
                </div>

                {/* Badge platform locator */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded border text-xs tracking-wider uppercase font-semibold ${getPlatformBadge(TESTIMONIALS[activeIndex].platform).color}`}>
                  {getPlatformBadge(TESTIMONIALS[activeIndex].platform).icon}
                  <span>{getPlatformBadge(TESTIMONIALS[activeIndex].platform).label}</span>
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
                className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C9A84C] text-[#8A8580] hover:text-[#C9A84C] hover:bg-white/[0.02] flex items-center justify-center transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                id="testimonial_next_arrow_btn"
                className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C9A84C] text-[#8A8580] hover:text-[#C9A84C] hover:bg-white/[0.02] flex items-center justify-center transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* ==============================================
            MOBILE ONLY: MOBILE HORIZONTAL SWIPE TRACK
           ============================================== */}
        <div 
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="lg:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 px-4 py-8 mt-10"
          id="testimonials_swipe_track"
        >
          {TESTIMONIALS.map((test, index) => {
            const badge = getPlatformBadge(test.platform);
            return (
              <div
                key={`mobile_swipe_${index}`}
                className="snap-center shrink-0 w-[calc(100vw-32px)] bg-[#111] border border-white/[0.04] p-6 rounded-xl flex flex-col justify-between h-[256px] relative"
              >
                <Quote className="absolute right-4 bottom-4 w-12 h-12 text-white/[0.012] pointer-events-none rotate-180" />

                <div>
                  <div className="flex items-center gap-1 mb-2.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />
                    ))}
                  </div>

                  <p className="text-xs text-[#8A8580] font-light leading-relaxed mb-4 line-clamp-5">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.03] mt-auto">
                  <div>
                    <h4 className="font-display font-semibold text-white text-xs">{test.name}</h4>
                    <span className="text-[9px] text-[#8A8580] font-light">{test.location} · {test.vehicle}</span>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[8px] uppercase font-bold tracking-wider ${badge.color}`}>
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* REPUTATION ACTION CTA BOTTOM ZONE */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-white mb-2">
            Join hundreds of satisfied Treasure Coast vehicle owners.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="tel:+17726311339" 
              className="px-6 py-3 bg-[#C9A84C] hover:bg-[#E8C97A] text-[#0a0a0a] text-xs font-accent tracking-widest uppercase rounded font-bold transition-all"
            >
              Call (772) 631-1339
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black text-xs font-accent tracking-widest uppercase rounded font-bold transition-all"
            >
              Book Online
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
