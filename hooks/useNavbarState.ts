"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";

export function useNavbarState() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const { setMobileMenuOpen } = useNav();

  useEffect(() => {
    setMobileMenuOpen(isOpen);
  }, [isOpen, setMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    // initial check
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Close menu on resize to prevent buggy layout states
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeHash === href;
    }
    return pathname === href;
  };

  return {
    isOpen,
    setIsOpen,
    scrolled,
    isActive,
  };
}
