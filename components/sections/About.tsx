"use client";

import CountUp from "./about/CountUp";
import AboutHighlights from "./about/AboutHighlights";

interface SectionProps {
  id?: string;
}

export default function About({ id = "about" }: SectionProps) {
  return (
    <section 
      id={id} 
      className="py-24 bg-[#111111] relative overflow-hidden border-b border-[rgba(201,168,76,0.06)]"
    >
      {/* Subtle Backlighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A84C]/2 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* PART A — Pull Quote (full width, centered, large) */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9A84C] mb-6">
            About The Executive Image
          </p>
          <blockquote className="font-display italic text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
            &ldquo;Every vehicle we touch gets treated like it&apos;s ours.&rdquo;
          </blockquote>
          <p className="text-[#8A8580] text-sm mt-6 tracking-widest uppercase font-sans">
            — Jason, Owner · Stuart, FL · Est. 2008
          </p>
        </div>

        {/* PART B — Stats Band (full width, 4 columns, gold numbers) */}
        <div className="mt-16 py-12 border-y border-[rgba(201,168,76,0.15)] bg-black/20 rounded-xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 items-center text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center md:col-span-1">
              <span className="font-display italic text-5xl text-[#C9A84C] font-semibold">
                <CountUp end={17} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A8580] mt-2 font-sans font-medium">
                Years on the Treasure Coast
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[rgba(201,168,76,0.2)] self-stretch" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center md:col-span-1">
              <span className="font-display italic text-5xl text-[#C9A84C] font-semibold">
                <CountUp end={5} suffix=".0★" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A8580] mt-2 font-sans font-medium">
                Google Rating
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[rgba(201,168,76,0.2)] self-stretch" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center md:col-span-1">
              <span className="font-display italic text-5xl text-[#C9A84C] font-semibold">
                <CountUp end={100} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A8580] mt-2 font-sans font-medium">
                Google Reviews
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[rgba(201,168,76,0.2)] self-stretch" />

            {/* Stat 4 */}
            <div className="flex flex-col items-center md:col-span-1">
              <span className="font-display italic text-5xl text-[#C9A84C] font-semibold">
                <CountUp end={1100} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A8580] mt-2 font-sans font-medium">
                Facebook Followers
              </span>
            </div>

          </div>
        </div>

        {/* PART C — Story Text (two-column on desktop, single on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div>
            <p className="text-[#F5F0E8] text-base leading-relaxed font-light">
              For over 17 years, The Executive Image has been the Treasure Coast&apos;s 
              most trusted name in ceramic coating and mobile detailing. Founded and 
              run by Jason, every vehicle — whether it&apos;s your daily driver, weekend 
              boat, or private aircraft — receives the same obsessive care that built 
              our reputation.
            </p>
          </div>
          <div>
            <p className="text-[#8A8580] text-base leading-relaxed font-light">
              We don&apos;t run a factory operation. When Jason arrives at your home, 
              marina, or hangar, you get a dedicated professional who treats your 
              investment as his own. No strangers driving your car. No drop-offs. 
              No shortcuts. Just results.
            </p>
          </div>
        </div>

        {/* PART D — 3 Icon Columns */}
        <AboutHighlights />

        {/* Small Centered Conversion Nudge */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-[#8A8580] text-sm mb-4 font-light">
            Ready to protect your investment?
          </p>
          <a 
            href="#contact" 
            className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black px-6 py-3 rounded font-accent text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-auto"
          >
            Get a Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}
