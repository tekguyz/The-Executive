"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface UseCountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: UseCountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  // Triggers only when element is in view
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    // Easing: easeOutQuart (luxurious deceleration)
    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      const easedRate = easeOutQuart(rate);

      setCount(Math.floor(easedRate * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const display = `${prefix}${count.toLocaleString()}${suffix}`;

  return { ref, count, display };
}
