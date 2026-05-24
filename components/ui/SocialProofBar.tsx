"use client";

import { Facebook, Instagram, MapPin } from "lucide-react";

export default function SocialProofBar() {
  return (
    <div className="py-3 bg-[#111111] border-y border-[rgba(201,168,76,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 md:gap-x-10 text-xs md:text-sm text-[#F5F0E8]">
          
          {/* Item 1: Google Rating */}
          <a
            href="https://maps.app.goo.gl/vY93yVHhBPNxQiAW6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"
          >
            <span className="w-7 h-7 bg-white text-[#4285F4] text-xs font-black rounded-full flex items-center justify-center shrink-0">
              G
            </span>
            <span>
              5.0★ <strong className="font-semibold text-white">100+ Google Reviews</strong>
            </span>
          </a>

          {/* Separator */}
          <span className="hidden md:block w-px h-3 bg-[rgba(201,168,76,0.25)]" />

          {/* Item 2: Facebook */}
          <a
            href="https://www.facebook.com/Theexecutivedetailer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
          >
            <Facebook size={14} className="text-[#C9A84C] shrink-0" />
            <span>
              <strong className="font-semibold text-white">1,100+</strong> Facebook Followers
            </span>
          </a>

          {/* Separator */}
          <span className="hidden md:block w-px h-3 bg-[rgba(201,168,76,0.25)]" />

          {/* Item 3: Instagram */}
          <a
            href="https://www.instagram.com/theexecutiveimage/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
          >
            <Instagram size={14} className="text-[#C9A84C] shrink-0" />
            <span>@theexecutiveimage</span>
          </a>

          {/* Separator */}
          <span className="hidden md:block w-px h-3 bg-[rgba(201,168,76,0.25)]" />

          {/* Item 4: Nextdoor */}
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#C9A84C] shrink-0" />
            <span>
              <strong className="font-semibold text-white">#1 Recommended</strong> · Nextdoor Stuart
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
