"use client";

import { CheckCircle, Phone } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

interface ContactSuccessProps {
  nameSent?: string;
  onReset: () => void;
}

export default function ContactSuccess({ nameSent, onReset }: ContactSuccessProps) {
  return (
    <div className="absolute inset-0 bg-[#0c0c0c]/98 z-50 flex flex-col items-center justify-center p-6 sm:p-12 text-center rounded-2xl">
      <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] mb-6">
        <CheckCircle className="w-8 h-8" />
      </div>
      
      <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#F5F0E8] tracking-tight">
        Submission Confirmed
      </h3>
      
      <p className="text-sm font-light text-[#8A8580] max-w-md mt-4 leading-relaxed">
        🏆 Thanks, <strong className="text-white font-medium">{nameSent}</strong>! We&apos;ll text or call you within a few hours to prioritize your estimate specs.
      </p>

      <div className="mt-8 pt-6 border-t border-white/[0.05] w-full max-w-sm">
        <p className="text-xs text-[#8A8580] mb-3 font-bold">Need instant slot booking?</p>
        <a 
          href={`tel:${SITE_INFO.phoneRaw}`} 
          className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#161616] border border-[#C9A84C]/35 hover:border-[#C9A84C] rounded-lg text-xs font-accent tracking-widest text-[#E8C97A] uppercase font-bold hover:bg-[#C9A84C]/10 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Call Jason: {SITE_INFO.phone}</span>
        </a>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-[10px] font-accent text-[#8A8580] hover:text-white uppercase tracking-widest underline underline-offset-4 cursor-pointer font-bold"
      >
        Commission Another Vehicle Detail
      </button>
    </div>
  );
}
