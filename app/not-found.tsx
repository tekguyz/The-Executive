import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
      <div className="w-12 h-12 border border-[#C9A84C]/40 bg-[#111] rounded flex items-center justify-center text-[#C9A84C] font-accent text-lg font-bold mb-8">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-sm font-light text-[#8A8580] max-w-sm leading-relaxed mb-8">
        The premium detailing schedule or page you requested cannot be located.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#C9A84C] hover:bg-[#E8C97A] text-black rounded-lg font-semibold tracking-wider font-accent text-xs uppercase transition-colors"
      >
        Return to Experience →
      </Link>
    </div>
  );
}
