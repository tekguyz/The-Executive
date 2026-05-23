"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
      <div className="w-12 h-12 border border-red-500/40 bg-[#111] rounded flex items-center justify-center text-red-500 font-accent text-lg font-bold mb-8">
        ERR
      </div>
      <h1 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] tracking-tight mb-4">
        Something Went Wrong
      </h1>
      <p className="text-sm font-light text-[#8A8580] max-w-sm leading-relaxed mb-8">
        A system exception occurred while rendering this view.
      </p>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#C9A84C] hover:bg-[#E8C97A] text-black rounded-lg font-semibold tracking-wider font-accent text-xs uppercase transition-colors cursor-pointer"
        >
          Reset Application
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-white/[0.08] hover:border-[#C9A84C] text-[#8A8580] hover:text-[#C9A84C] rounded-lg font-neutral tracking-wider font-accent text-xs uppercase transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
