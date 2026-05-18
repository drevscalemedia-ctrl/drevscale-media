import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#111318] text-white">
      {/* Big CTA */}
      <div className="border-b border-white/10 py-24 px-6 text-center">
        <p className="text-[#93C5FD] font-semibold text-sm uppercase tracking-widest mb-4">Ready?</p>
        <h2 className="font-display text-6xl md:text-7xl font-black leading-none mb-8">
          Let's get you<br />
          <em className="not-italic text-[#4A90D9]">more customers.</em>
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center px-10 py-5 rounded-full bg-[#4A90D9] text-white font-bold text-lg hover:bg-[#3478C2] transition-colors"
        >
          Book a Free Strategy Call →
        </a>
      </div>

      {/* Links */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <LogoWhite />
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              Local Facebook ads and web design for small businesses in Fountain Hills and Scottsdale, AZ.
            </p>
            <p className="mt-4 text-white/20 text-xs font-mono">
              33.6064° N, 111.7175° W
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/30 mb-5">Navigate</h4>
            <div className="space-y-3 text-sm text-white/55">
              {["/services", "/about", "/results", "/contact"].map((href) => (
                <Link key={href} href={href} className="block hover:text-white transition-colors capitalize">
                  {href.replace("/", "")}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/30 mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-white/55">
              <a href={BRAND.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} /> {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} /> {BRAND.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {BRAND.location}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© 2026 Drevscale Media. All rights reserved.</p>
          <p>Serving Fountain Hills · Scottsdale · East Valley, AZ</p>
        </div>
      </div>
    </footer>
  );
}

function LogoWhite() {
  return (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none">
      <polyline points="42,11 48,5 54,8 61,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="58,1 61,1 61,4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="0" y="30" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
        <tspan fill="white">dre</tspan><tspan fill="#4A90D9">v</tspan><tspan fill="white">scale</tspan>
      </text>
      <text x="53" y="40" fontFamily="var(--font-geist-sans),-apple-system,sans-serif" fontWeight="600" fontSize="8" letterSpacing="3" fill="white" opacity="0.4" textAnchor="middle">MEDIA</text>
    </svg>
  );
}
