"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1E2330]/70">
          <Link href="/services" className="hover:text-[#4A90D9] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#4A90D9] transition-colors">About</Link>
          <Link href="/results" className="hover:text-[#4A90D9] transition-colors">Results</Link>
          <Link href="/contact" className="hover:text-[#4A90D9] transition-colors">Contact</Link>
        </div>

        <a
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors"
        >
          Book a Free Call
        </a>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#1E2330]">
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3 text-sm font-medium">
          <Link href="/services" className="block py-2 text-[#1E2330]/70 hover:text-[#4A90D9]" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" className="block py-2 text-[#1E2330]/70 hover:text-[#4A90D9]" onClick={() => setOpen(false)}>About</Link>
          <Link href="/results" className="block py-2 text-[#1E2330]/70 hover:text-[#4A90D9]" onClick={() => setOpen(false)}>Results</Link>
          <Link href="/contact" className="block py-2 text-[#1E2330]/70 hover:text-[#4A90D9]" onClick={() => setOpen(false)}>Contact</Link>
          <a href="/contact" className="block w-full text-center py-3 rounded-full bg-[#4A90D9] text-white font-semibold">Book a Free Call</a>
        </div>
      )}
    </nav>
  );
}
