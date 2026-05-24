"use client";

import { useEffect } from "react";

/**
 * ScrollReset prevents the browser from automatically scrolling/focusing 
 * on elements with specific hash anchors (like #contact) on page load/refresh,
 * ensuring a pristine, clean entrance starting at the Hero section.
 */
export default function ScrollReset() {
  useEffect(() => {
    // Disable automatic browser scroll restoration on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force viewport to the absolute top immediately on page mount
    window.scrollTo({ top: 0, behavior: "instant" as any });

    // If there is any trailing hash in the URL on page load,
    // clear it gracefully to avoid automatic browser anchor focus/jumps
    if (window.location.hash) {
      const cleanPath = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanPath);
    }
  }, []);

  return null;
}
