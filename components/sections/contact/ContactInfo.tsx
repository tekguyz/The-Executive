"use client";

import { Phone, MapPin, Clock, Facebook, ShieldCheck } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24 text-left">
      
      <div className="flex flex-col gap-3">
        <span className="font-accent text-[#C9A84C] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold">
          COMMISSION A DETAIL
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] leading-tight tracking-tight">
          Ready For A Showroom Finish?
        </h2>
      </div>
      
      <p className="text-xs sm:text-sm text-[#8A8580] leading-relaxed font-light">
        Call or text Jason directly, or fill out our priority briefing form and we&apos;ll get back to you same day with a complete quote breakdown. We bring everything to your driveway, dock, or hangar.
      </p>

      {/* Direct Contact Detail Cards */}
      <div className="flex flex-col gap-4 mt-4">
        
        {/* Phone Detail */}
        <div 
          id="contact_info_phone_card"
          className="bg-[#111111] p-5 rounded-xl border border-white/[0.03] flex items-start gap-4 hover:border-[#C9A84C]/20 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="font-accent text-[9px] text-[#8A8580] uppercase tracking-widest block mb-0.5">DIRECT HOTLINE</span>
            <a 
              href={`tel:${SITE_INFO.phoneRaw}`} 
              className="text-base sm:text-lg text-[#E8C97A] font-display font-semibold hover:underline block"
            >
              {SITE_INFO.phone}
            </a>
            <span className="text-[10px] text-[#8A8580] block mt-0.5">Call or Text Owner Jason Directly</span>
          </div>
        </div>

        {/* Facebook Detail */}
        <div 
          id="contact_info_facebook_card"
          className="bg-[#111111] p-5 rounded-xl border border-white/[0.03] flex items-start gap-4 hover:border-[#C9A84C]/20 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] shrink-0">
            <Facebook className="w-4 h-4" />
          </div>
          <div>
            <span className="font-accent text-[9px] text-[#8A8580] uppercase tracking-widest block mb-0.5 font-bold">FACEBOOK LINK</span>
            <a 
              href="https://facebook.com/Theexecutivedetailer/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-sans font-medium text-[#F5F0E8] hover:text-[#C9A84C] hover:underline block mt-0.5"
            >
              The Executive Image on Facebook
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div 
          id="contact_info_locations_card"
          className="bg-[#111111] p-5 rounded-xl border border-white/[0.03] flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="font-accent text-[9px] text-[#8A8580] uppercase tracking-widest block mb-0.5 font-bold">SERVING COUNTIES</span>
            <p className="text-xs text-[#F5F0E8] leading-relaxed font-light">
              Stuart, Port St. Lucie, Jensen Beach, Palm City, Hobe Sound, Fort Pierce &amp; All Treasure Coast locations.
            </p>
          </div>
        </div>

        {/* Clock responsiveness */}
        <div 
          id="contact_info_hours_card"
          className="bg-[#111111] p-4 rounded-xl border border-white/[0.02] flex items-center gap-4.5 text-xs text-[#8A8580]"
        >
          <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
          <span className="font-light">
            <strong className="text-white font-medium">Response Time:</strong> Same Day guaranteed. We bring power &amp; filtered water.
          </span>
        </div>

      </div>

      {/* Insurance banner info */}
      <div className="mt-2 p-5 rounded-xl bg-gradient-to-r from-[#C9A84C]/6 to-[#C9A84C]/1 border border-[#C9A84C]/15 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
        <div className="text-[11px] leading-relaxed text-[#8A8580] font-light">
          <span className="font-accent uppercase tracking-wider text-white font-bold block mb-1">COMPREHENSIVELY PROTECTED</span>
          Fully licensed, bonded, and backed by garagekeepers liability insurance covers to defend delicate supercars, watercraft, and aerospace investments.
        </div>
      </div>

    </div>
  );
}
