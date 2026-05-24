"use client";

import { useState, useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export function useTestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Auto-align the active state of mobile indicators during swiping
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth === 0) return;
    const computedIndex = Math.round(scrollLeft / clientWidth);
    if (computedIndex >= 0 && computedIndex < TESTIMONIALS.length) {
      setActiveIndex(computedIndex);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Keep mobile scroll alignment in sync if activeIndex changes from other hooks
  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollTo({
        left: index * mobileScrollRef.current.clientWidth,
        behavior: "smooth"
      });
    }
  };

  return {
    activeIndex,
    setActiveIndex,
    mobileScrollRef,
    handleMobileScroll,
    handleNext,
    handlePrev,
    scrollToCard,
  };
}
