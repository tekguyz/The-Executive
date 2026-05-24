"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { getPlatformBadge } from "./getPlatformBadge";

interface MobileSwipeTrackProps {
  mobileScrollRef: React.RefObject<HTMLDivElement | null>;
  handleMobileScroll: () => void;
}

export default function MobileSwipeTrack({ mobileScrollRef, handleMobileScroll }: MobileSwipeTrackProps) {
  return (
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
  );
}
