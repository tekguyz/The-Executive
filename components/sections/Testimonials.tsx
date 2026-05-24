"use client";

import { useTestimonialSlider } from "@/hooks/useTestimonialSlider";
import DesktopMarquees from "./testimonials/DesktopMarquees";
import MobileSwipeTrack from "./testimonials/MobileSwipeTrack";
import TestimonialSliderCard from "./testimonials/TestimonialSliderCard";

interface SectionProps {
  id?: string;
}

export default function Testimonials({ id = "reviews" }: SectionProps) {
  const {
    activeIndex,
    mobileScrollRef,
    handleMobileScroll,
    handleNext,
    handlePrev,
    scrollToCard,
  } = useTestimonialSlider();

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

        {/* DESKTOP ONLY: TWO ROW OPPOSITE MARQUEES */}
        <DesktopMarquees />

        {/* INTERACTIVE SLIDER BLOCK (Featured Review Card & Tracker Handles) */}
        <TestimonialSliderCard
          activeIndex={activeIndex}
          scrollToCard={scrollToCard}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />

        {/* MOBILE ONLY: MOBILE HORIZONTAL SWIPE TRACK */}
        <MobileSwipeTrack 
          mobileScrollRef={mobileScrollRef} 
          handleMobileScroll={handleMobileScroll} 
        />

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
              className="px-6 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black text-xs font-accent tracking-widest uppercase rounded font-bold transition-all relative z-10"
            >
              Book Online
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
