"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 inset-x-0 z-50 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Pill container */}
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.07]">
          <Link href="/" aria-label="Drevscale Media home">
            <LogoWordmark />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-xl bg-[#1D9BF0] text-[#FFFFFF] text-sm font-semibold hover:bg-[#0F85D0] transition-colors"
              style={{ boxShadow: "0 0 20px rgba(29,155,240,0.3)" }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#A0A0A0] hover:text-white transition-colors p-1"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="mt-2 rounded-2xl bg-[#0A0A0A]/95 border border-white/[0.07] px-5 py-5 space-y-4 backdrop-blur-xl">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm text-[#A0A0A0] hover:text-white transition-colors font-medium py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center py-3 rounded-xl bg-[#1D9BF0] text-white font-semibold text-sm hover:bg-[#0F85D0] transition-colors"
              onClick={() => setOpen(false)}
              style={{ boxShadow: "0 0 20px rgba(29,155,240,0.25)" }}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function LogoWordmark() {
  return (
    <svg width="155" height="36" viewBox="0 0 160 40" fill="none" aria-label="Drevscale Media">
      {/* Growth arrow — white on dark bg */}
      <polyline points="42,11 48,5 54,8 61,1" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="58,1 61,1 61,4" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Wordmark — white text, blue V */}
      <text x="0" y="30" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
        <tspan fill="#F5F5F5">dre</tspan><tspan fill="#1D9BF0">v</tspan><tspan fill="#F5F5F5">scale</tspan>
      </text>
      <text x="53" y="40" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="600" fontSize="8" letterSpacing="3" fill="#F5F5F5" opacity="0.3" textAnchor="middle">MEDIA</text>
    </svg>
  );
}
