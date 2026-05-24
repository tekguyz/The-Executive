"use client";

import { MapPin, Layers, Phone } from "lucide-react";

export default function AboutHighlights() {
  return (
    <div className="mt-20 pt-16 border-t border-[rgba(201,168,76,0.1)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Point 1 */}
        <div className="bg-[#0c0c0c] border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-[#C9A84C]/30 group">
          <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-base font-display font-medium text-[#F5F0E8] mb-2">We Come To You</h3>
          <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
            Home, office, marina, or hangar — fully mobile, zero drop-offs.
          </p>
        </div>

        {/* Point 2 */}
        <div className="bg-[#0c0c0c] border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-[#C9A84C]/30 group">
          <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-display font-medium text-[#F5F0E8] mb-2">Auto · Marine · Aero</h3>
          <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
            One of the only Treasure Coast detailers certified across all three.
          </p>
        </div>

        {/* Point 3 */}
        <div className="bg-[#0c0c0c] border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-[#C9A84C]/30 group">
          <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="text-base font-display font-medium text-[#F5F0E8] mb-2">Talk to Jason</h3>
          <p className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed">
            The owner answers. No call centers, no booking apps.
          </p>
        </div>
      </div>
    </div>
  );
}
