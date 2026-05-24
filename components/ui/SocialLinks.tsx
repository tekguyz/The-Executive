"use client";

import { Facebook, Instagram } from "lucide-react";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: 16, md: 20, lg: 24 };
const gaps  = { sm: "gap-3", md: "gap-4", lg: "gap-5" };

export default function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const px = sizes[size];
  return (
    <div className={`flex items-center ${gaps[size]} ${className}`}>
      <a href="https://www.facebook.com/Theexecutivedetailer/"
         target="_blank" rel="noopener noreferrer"
         aria-label="Follow us on Facebook"
         className="text-[#C9A84C] hover:text-white transition-colors duration-200">
        <Facebook size={px} />
      </a>
      <a href="https://www.instagram.com/theexecutiveimage/"
         target="_blank" rel="noopener noreferrer"
         aria-label="Follow us on Instagram"
         className="text-[#C9A84C] hover:text-white transition-colors duration-200">
        <Instagram size={px} />
      </a>
    </div>
  );
}
