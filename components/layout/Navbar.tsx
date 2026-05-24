"use client";

import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import DiamondShieldIcon from "./footer/DiamondShieldIcon";
import MobileMenu from "./navbar/MobileMenu";
import { useNavbarState } from "@/hooks/useNavbarState";
import SocialLinks from "../ui/SocialLinks";

export default function Navbar() {
  const { isOpen, setIsOpen, scrolled, isActive } = useNavbarState();

  const navLinks = [
    { label: "Services",     href: "#services"     },
    { label: "About",        href: "#about"        },
    { label: "Reviews",      href: "#reviews"      },
    { label: "Contact",      href: "#contact"      },
    { label: "FAQ",          href: "#faq"          },
  ];

  return (
    <>
      <header
        id="site_header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
          scrolled
            ? "bg-[#111111]/95 backdrop-blur-md border-b border-[rgba(201,168,76,0.15)] h-16 lg:h-20"
            : "bg-transparent h-16 lg:h-20"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo Brand Block */}
          <Link href="/" id="navbar_brand_logo" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 border border-[#C9A84C]/45 bg-[#111] rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <DiamondShieldIcon className="w-6 h-6 text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors" id="nav_diamond_svg" />
              <div className="absolute -inset-0.5 rounded border border-[#C9A84C]/25 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-medium text-base sm:text-lg tracking-wide text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors leading-[1.2] text-left">
                The Executive Image
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.15em] text-[#C9A84C] leading-none uppercase mt-0.5 font-bold">
                Ceramic Coating & Detailing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop_nav_container" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  id={`nav_link_${link.label.toLowerCase().replace(/\s+/g, '_')}`}
                  className={`relative py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group ${
                    active ? "text-[#C9A84C]" : "text-[#8A8580] hover:text-[#F5F0E8]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span 
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A84C] transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT Desktop: Social icons -> space -> phone number -> gold CTA button */}
          <div className="hidden lg:flex items-center gap-5">
            <SocialLinks size="sm" />
            <span className="w-px h-4 bg-[rgba(201,168,76,0.3)]" />
            <a
              href="tel:+17726311339"
              className="text-sm font-medium text-[#C9A84C] hover:text-white transition-colors whitespace-nowrap"
            >
              (772) 631-1339
            </a>
            <a
              href="#contact"
              id="book_detail_cta_desktop"
              className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-[#C9A84C] border border-[#C9A84C] text-[#0b0b0b] hover:bg-transparent hover:text-[#C9A84C] rounded font-sans font-bold whitespace-nowrap"
            >
              Book a Detail
            </a>
          </div>

          {/* Mobile Actions: Hamburger only */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile_menu_hamburger_btn"
              className="p-2 border border-[rgba(201,168,76,0.15)] rounded text-[#F5F0E8] hover:text-[#C9A84C] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu Component */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isActive={isActive}
        navLinks={navLinks}
      />
    </>
  );
}
