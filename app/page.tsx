"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const businessTypes = [
  "Dental Practices", "Med Spas", "Gyms & Fitness", "HVAC & Home Services",
  "Restaurants", "Chiropractic", "Real Estate", "Auto Repair"
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1E2330] text-white py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4A90D9]/40 bg-[#4A90D9]/10 text-[#4A90D9] text-sm font-medium mb-8">
                📍 Serving Fountain Hills & Scottsdale, AZ
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-3xl">
                More Leads. More Customers.{" "}
                <span className="text-[#4A90D9]">Facebook Ads</span> Built for Local Businesses.
              </h1>
              <p className="text-white/60 text-xl max-w-2xl mb-10 leading-relaxed">
                Drevscale Media runs done-for-you Facebook and Instagram ad campaigns that put your business in front of the right people — locally, consistently, and affordably.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors shadow-lg">
                  Book a Free Strategy Call
                </Link>
                <Link href="/services" className="px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
                  See Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#4A90D9]">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[["$0", "Hidden Fees"], ["48hr", "Campaign Launch"], ["100%", "Transparent Reporting"], ["Local", "Fountain Hills Based"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-black">{val}</div>
                <div className="text-white/80 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-4xl font-black text-[#1E2330]">Two services. One goal: more customers.</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-[#ECEEF1] border border-gray-200 hover:border-[#4A90D9]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-2xl mb-6">📣</div>
                <h3 className="text-2xl font-black text-[#1E2330] mb-3">Facebook Ads Management</h3>
                <p className="text-[#1E2330]/60 mb-6 leading-relaxed">Done-for-you Facebook and Instagram campaigns. We build it, run it, optimize it, and report on it every month. You just answer the leads.</p>
                <div className="space-y-2 text-sm text-[#1E2330]/70 mb-8">
                  {["$250 one-time setup fee", "$400–$650/month management", "$400–$500/month ad spend (paid to Facebook)", "Full setup, targeting, copy, and reporting included"].map(f => (
                    <div key={f} className="flex items-start gap-2"><span className="text-[#4A90D9] mt-0.5">✓</span> {f}</div>
                  ))}
                </div>
                <Link href="/services#facebook-ads" className="font-semibold text-[#4A90D9] hover:underline">Learn more →</Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-[#ECEEF1] border border-gray-200 hover:border-[#4A90D9]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-2xl mb-6">💻</div>
                <h3 className="text-2xl font-black text-[#1E2330] mb-3">Website Design & Hosting</h3>
                <p className="text-[#1E2330]/60 mb-6 leading-relaxed">Clean, mobile-first websites built to turn visitors into leads. Designed to look great and load fast — exactly what local business owners need.</p>
                <div className="space-y-2 text-sm text-[#1E2330]/70 mb-8">
                  {["Custom build fee (project-based)", "$50–$80/month hosting & maintenance", "Mobile-optimized and SEO-ready", "Includes ongoing minor updates"].map(f => (
                    <div key={f} className="flex items-start gap-2"><span className="text-[#4A90D9] mt-0.5">✓</span> {f}</div>
                  ))}
                </div>
                <Link href="/services#web-design" className="font-semibold text-[#4A90D9] hover:underline">Learn more →</Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="py-24 bg-[#ECEEF1]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-3">Who We Help</p>
              <h2 className="text-4xl font-black text-[#1E2330]">Built for local businesses.</h2>
              <p className="text-[#1E2330]/50 mt-3 text-lg max-w-xl mx-auto">If you have customers in Fountain Hills or Scottsdale, we can get you more of them.</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3">
              {businessTypes.map((b, i) => (
                <motion.span key={b} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#1E2330] font-medium text-sm shadow-sm">
                  {b}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Drevscale */}
        <section className="py-24 bg-[#1E2330] text-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-3">Why Drevscale Media</p>
              <h2 className="text-4xl font-black">Not a big agency. Better.</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📍", title: "Local to Your Market", desc: "We know Fountain Hills and Scottsdale. We target your neighbors, not random zip codes." },
                { icon: "👤", title: "Owner-Operated", desc: "Carter manages every account personally. You'll never get handed off to a junior rep." },
                { icon: "💰", title: "Transparent Pricing", desc: "No contracts, no hidden fees. You know exactly what you're paying and what you get." },
                { icon: "🎯", title: "Results-Focused", desc: "If your leads aren't flowing, we adjust — not make excuses. Your growth is our track record." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-black text-[#1E2330] mb-4">Ready to get more customers?</h2>
              <p className="text-[#1E2330]/50 text-lg mb-8">Book a free 20-minute strategy call. No pitch, no pressure — just an honest look at what's possible for your business.</p>
              <Link href="/contact" className="inline-flex items-center px-10 py-4 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors text-lg shadow-lg">
                Book Your Free Call →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
