"use client";

import { Facebook, Instagram, MapPin } from "lucide-react";

export default function SocialProofBar() {
  return (
    <div className="py-3 bg-[#111111] border-y border-[rgba(201,168,76,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs md:text-sm text-[#F5F0E8]">
          
          {/* Item 1 — Google */}
          <a
            href="https://maps.app.goo.gl/vY93yVHhBPNxQiAW6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>
              5.0★ <span className="font-semibold text-white">100+ Google Reviews</span>
            </span>
          </a>

          {/* Separator */}
          <span className="hidden md:block w-px h-3 bg-[rgba(201,168,76,0.25)]" />

          {/* Item 2 — Facebook */}
          <a
            href="https://www.facebook.com/Theexecutivedetailer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <Facebook size={14} className="text-[#C9A84C] shrink-0" />
            <span>
              <span className="font-semibold text-white">1,100+</span> Facebook Followers
            </span>
          </a>

          {/* Separator */}
          <span className="hidden md:block w-px h-3 bg-[rgba(201,168,76,0.25)]" />

          {/* Item 3 — Instagram */}
          <a
            href="https://www.instagram.com/theexecutiveimage/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <Instagram size={14} className="text-[#C9A84C] shrink-0" />
            <span>@theexecutiveimage</span>
          </a>

          {/* Separator */}
          <span className="hidden md:block w-px h-3 bg-[rgba(201,168,76,0.25)]" />

          {/* Item 4 — Nextdoor */}
          <div className="flex items-center gap-2 shrink-0">
            <MapPin size={14} className="text-[#C9A84C] shrink-0" />
            <span>
              #1 Recommended · Nextdoor Stuart
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
