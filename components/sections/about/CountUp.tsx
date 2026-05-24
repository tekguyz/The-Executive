"use client";

import { useCountUp } from "@/lib/hooks";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = "", duration = 2000 }: CountUpProps) {
  const { ref, display } = useCountUp({ end, duration, suffix });
  return (
    <span ref={ref} id={`count_${end}`}>
      {display}
    </span>
  );
}
