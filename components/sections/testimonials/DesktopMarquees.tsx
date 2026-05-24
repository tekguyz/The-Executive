"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { getPlatformBadge } from "./getPlatformBadge";

export default function DesktopMarquees() {
  // Repeated arrays to feed the seamless marquee infinite loops
  const marqueeRowLeft = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const marqueeRowRight = [
    ...TESTIMONIALS.slice().reverse(),
    ...TESTIMONIALS.slice().reverse(),
    ...TESTIMONIALS.slice().reverse()
  ];

  return (
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
  );
}
