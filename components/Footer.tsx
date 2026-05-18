import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1E2330] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo dark />
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Local Facebook ads and web design for small businesses in Fountain Hills and Scottsdale, AZ.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Navigation</h4>
            <div className="space-y-2 text-sm text-white/60">
              <Link href="/services" className="block hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About</Link>
              <Link href="/results" className="block hover:text-white transition-colors">Results</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Fountain Hills, AZ</p>
              <a href="tel:5722727819" className="block hover:text-white transition-colors">(572) 272-7819</a>
              <a href="mailto:drevscalemedia@gmail.com" className="block hover:text-white transition-colors">drevscalemedia@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© 2026 Drevscale Media. All rights reserved.</p>
          <p>Serving Fountain Hills · Scottsdale · East Valley, AZ</p>
        </div>
      </div>
    </footer>
  );
}
