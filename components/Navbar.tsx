"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
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
                scrolled ? "text-[#1C1F2E]/70" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              scrolled
                ? "bg-[#C8522A] text-white hover:bg-[#A8432A]"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            Book a Free Call
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#1C1F2E]" : "text-white"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-6 space-y-4 shadow-lg">
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
          <Link
            href="/contact"
            className="block text-center py-3.5 rounded-full bg-[#C8522A] text-white font-semibold hover:bg-[#A8432A] transition-colors"
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </Link>
        </div>
      )}
    </nav>
  );
}

function LogoWordmark({ scrolled }: { scrolled: boolean }) {
  const c = scrolled ? "#1C1F2E" : "#FFFFFF";
  return (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" aria-label="Drevscale Media">
      {/* Chart arrow — floats above the wordmark */}
      <polyline points="42,11 48,5 54,8 61,1" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="58,1 61,1 61,4" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Single text node with tspan — natural character spacing, no gaps */}
      <text x="0" y="30" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
        <tspan fill={c}>dre</tspan><tspan fill="#C8522A">v</tspan><tspan fill={c}>scale</tspan>
      </text>
      <text x="53" y="40" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="600" fontSize="8" letterSpacing="3" fill={c} opacity="0.45" textAnchor="middle">MEDIA</text>
    </svg>
  );
}
