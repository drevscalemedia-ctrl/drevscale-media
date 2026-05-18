"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/content";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 inset-x-4 z-50 md:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex gap-3">
        <a
          href="/contact"
          className="flex-1 text-center py-4 rounded-2xl bg-[#C8522A] text-white font-bold text-sm shadow-lg shadow-[#C8522A]/30"
        >
          Book a Free Call
        </a>
        <a
          href={BRAND.phoneHref}
          className="w-14 flex items-center justify-center rounded-2xl bg-[#1C1F2E] text-white shadow-lg"
          aria-label="Call Drevscale Media"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  );
}
