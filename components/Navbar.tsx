"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/content";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Drevscale Media home">
          <LogoWordmark scrolled={scrolled} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#C8522A] ${
                scrolled ? "text-[#1C1F2E]/70" : "text-[#1C1F2E]/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#C8522A] text-white hover:bg-[#A8432A] transition-colors"
          >
            Book a Free Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#1C1F2E]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#D4C4B0] px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-base font-medium text-[#1C1F2E]/70 hover:text-[#C8522A] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="block text-center py-3.5 rounded-full bg-[#C8522A] text-white font-semibold"
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}

function LogoWordmark({ scrolled }: { scrolled: boolean }) {
  const color = "#1C1F2E";
  return (
    <svg width="156" height="40" viewBox="0 0 156 40" fill="none" aria-label="Drevscale Media">
      {/* Growth chart arrow */}
      <polyline points="68,12 74,6 80,9 87,2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="84,2 87,2 87,5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* drevscale text */}
      <text x="0" y="30" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5" fill={color}>dre</text>
      <text x="50" y="30" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="800" fontSize="24" fill="#C8522A">v</text>
      <text x="65" y="30" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5" fill={color}>scale</text>
      {/* MEDIA */}
      <text x="78" y="40" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="600" fontSize="8" letterSpacing="3.5" fill={color} opacity="0.5" textAnchor="middle">MEDIA</text>
    </svg>
  );
}
