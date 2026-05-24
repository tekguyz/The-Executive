"use client";

import { MapPin, Mail, ShieldCheck } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export default function AreasServed() {
  const areas = [
    { name: "Stuart, FL", active: true },
    { name: "Port St. Lucie" },
    { name: "Jensen Beach" },
    { name: "Palm City" },
    { name: "Hobe Sound" },
    { name: "Fort Pierce" }
  ];

  return (
    <div className="lg:col-span-3 flex flex-col gap-6">
      <h4 className="font-accent text-[#C9A84C] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold">
        AREAS SERVED &amp; CONTACT
      </h4>

      <div className="flex flex-col gap-5">
        
        {/* Areas listed */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-[11px] text-[#8A8580] font-light">
          {areas.map((item) => (
            <span key={item.name} className="flex items-center gap-1.5 leading-none">
              <MapPin className="w-3.5 h-3.5 text-[#C9A84C]/50 shrink-0" />
              <span className={item.active ? "text-white font-medium" : "text-[#8A8580]"}>{item.name}</span>
            </span>
          ))}
        </div>

        <p className="text-xs text-[#8A8580] font-light leading-relaxed">
          Proudly serving Stuart, Port St. Lucie, Jensen Beach, Palm City, Hobe Sound, Fort Pierce &amp; the entire Treasure Coast.
        </p>

        {/* Direct Mail */}
        <div className="pt-2 border-t border-white/[0.03]">
          <span className="text-[9px] font-accent text-[#C9A84C] uppercase tracking-widest block font-bold mb-1.5">EMAIL ENQUIRIES</span>
          <a 
            href="mailto:info@theexecutiveimage.com"
            id="footer_email_link"
            className="text-xs text-white hover:text-[#C9A84C] transition-all font-medium flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-[#C9A84C]/85" />
            <span>info@theexecutiveimage.com</span>
          </a>
        </div>

        {/* Credentials badge inside column */}
        <div className="p-2.5 bg-[#111] rounded-lg border border-white/[0.02] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
          <span className="text-[10px] text-[#8a8580] leading-none font-light">17+ Years Master Craftsmanship</span>
        </div>

      </div>
    </div>
  );
}
