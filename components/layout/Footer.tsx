import Link from "next/link";
import { Phone, Facebook, ChevronRight } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import DiamondShieldIcon from "./footer/DiamondShieldIcon";
import AreasServed from "./footer/AreasServed";

export default function Footer() {
  const navLinks = [
    { label: "Services",     href: "#services"     },
    { label: "About",        href: "#about"        },
    { label: "Reviews",      href: "#reviews"      },
    { label: "Contact",      href: "#contact"      },
    { label: "FAQ",          href: "#faq"          },
  ];

  return (
    <footer id="site_footer" className="bg-[#0a0a0a] border-t border-[rgba(201,168,76,0.12)] pt-20 pb-8 sm:pb-12 relative overflow-hidden text-left select-none">
      
      {/* Golden accent halos */}
      <div className="absolute bottom-0 left-[-10%] w-[350px] h-[350px] bg-[#C9A84C]/2 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-[#C9A84C]/1.5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Four Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* COLUMN 1 : Brand, Tagline, Phone CTA, Social Link */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Logo */}
            <Link href="/" id="footer_logo_identity" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 border border-[#C9A84C]/45 bg-[#111] rounded flex items-center justify-center transition-transform group-hover:scale-105">
                <DiamondShieldIcon className="w-6 h-6 text-[#C9A84C]" id="footer_diamond_svg" />
                <div className="absolute -inset-0.5 rounded border border-[#C9A84C]/25 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-medium text-base sm:text-lg tracking-wide text-[#F5F0E8] leading-[1.2]">
                  The Executive Image
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.15em] text-[#C9A84C] leading-none uppercase mt-0.5 font-bold">
                  Ceramic Coating & Detailing
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#8A8580] leading-relaxed font-light max-w-sm">
              Treasure Coast&apos;s Premier Ceramic Coating &amp; Mobile Detailing Service. Bringing paint polishing, marine gelcoat de-oxidation, and aviation canopy restoration directly to you.
            </p>

            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-accent text-[#C9A84C] uppercase tracking-widest block font-bold">Direct Hotline</span>
              <a 
                href={`tel:${SITE_INFO.phoneRaw}`}
                id="footer_large_phone_link"
                className="text-xl sm:text-2xl text-white font-display font-bold hover:text-[#C9A84C] transition-colors leading-none"
              >
                {SITE_INFO.phone}
              </a>
            </div>

            {/* Social Panel */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Theexecutivedetailer/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer_facebook_icon"
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/10 flex items-center justify-center text-[#8A8580] hover:text-[#C9A84C] transition-all"
                aria-label="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-[#8A8580] font-light">Join our high-performance community</span>
            </div>

          </div>

          {/* COLUMN 2 : Services Menu (PLAIN TEXT) */}
          <div className="lg:col-span-2.5 flex flex-col gap-6">
            <h4 className="font-accent text-[#C9A84C] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold">
              SERVICES
            </h4>
            
            <ul className="flex flex-col gap-3.5">
              {[
                "Ceramic Coating",
                "Paint Correction",
                "Mobile Detailing",
                "Marine Detailing",
                "Aeronautical Detailing",
                "Headlight Restoration"
              ].map((service) => (
                <li key={service} className="text-xs text-[#8A8580] font-light flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/45 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 : Quick Links navigation */}
          <div className="lg:col-span-2.5 flex flex-col gap-6">
            <h4 className="font-accent text-[#C9A84C] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold">
              QUICK NAVIGATION
            </h4>
            
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-xs text-[#8A8580] hover:text-[#C9A84C] transition-all font-light flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[rgba(201,168,76,0.3)] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 : Service Areas & Contacts */}
          <AreasServed />

        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

        {/* Bottom Bar Container */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#8A8580] font-light">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Executive Image. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-accent tracking-widest text-[#C9A84C]/80 font-bold">Serving the Treasure Coast Since 2008</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
