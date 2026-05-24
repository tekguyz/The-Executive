"use client";

import { Facebook, Chrome, Heart } from "lucide-react";

export function getPlatformBadge(platform: string) {
  switch (platform.toLowerCase()) {
    case "facebook":
      return {
        icon: <Facebook className="w-3 h-3 text-[#1877F2]" />,
        label: "Facebook Verified",
        color: "border-[#1877F2]/20 text-[#1877F2] bg-[#1877F2]/5"
      };
    case "nextdoor":
      return {
        icon: <Heart className="w-3 h-3 text-[#00B512]" />,
        label: "Nextdoor Fav",
        color: "border-[#00B512]/20 text-[#00B512] bg-[#00B512]/5"
      };
    case "google":
    default:
      return {
        icon: <Chrome className="w-3 h-3 text-[#EA4335]" />,
        label: "Google Review",
        color: "border-[#EA4335]/20 text-[#EA4335] bg-[#EA4335]/5"
      };
  }
}
