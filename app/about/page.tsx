"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1E2330] text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">About</p>
              <h1 className="text-5xl font-black mb-4">Local guy. Real results.</h1>
              <p className="text-white/50 text-xl max-w-2xl">No big agency overhead. No hand-offs. Just Carter — working directly with your business to get you more customers.</p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="aspect-square rounded-3xl bg-[#ECEEF1] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 rounded-full bg-[#4A90D9]/10 border-4 border-[#4A90D9]/20 mx-auto mb-4 flex items-center justify-center text-5xl">👤</div>
                    <p className="font-black text-2xl text-[#1E2330]">Carter Drevs</p>
                    <p className="text-[#1E2330]/50 text-sm mt-1">Founder & Owner, Drevscale Media</p>
                    <p className="text-[#1E2330]/40 text-xs mt-1">📍 Fountain Hills, AZ</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-black text-[#1E2330] mb-6">Why I started Drevscale Media</h2>
                <div className="space-y-4 text-[#1E2330]/60 leading-relaxed">
                  <p>I'm a Fountain Hills local. I know this market — the businesses, the community, and the type of customer you're trying to reach. That's not something a big agency in Phoenix or Scottsdale can offer you.</p>
                  <p>I started Drevscale Media because I kept seeing great local businesses get burned by agencies that overpromised, underdelivered, and disappeared when results didn't materialize. You deserved better than that.</p>
                  <p>My approach is simple: I work directly with a small number of clients, I manage every account myself, and I treat your ad budget like it's my own. When you win, I win. That alignment is what makes this work.</p>
                  <p>I'm not trying to be a big agency. I'm trying to be the best marketing partner for businesses right here in the East Valley.</p>
                </div>
                <Link href="/contact" className="inline-flex mt-8 px-8 py-3.5 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors">
                  Work With Me →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#ECEEF1]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="text-4xl font-black text-[#1E2330]">How I work</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🤝", title: "Direct Access", desc: "You have Carter's phone number and email. When you have a question, you reach the person who's actually managing your campaigns — not a support ticket." },
                { icon: "📊", title: "Total Transparency", desc: "You see everything — spend, leads, cost per lead, what's working and what isn't. No black boxes, no fluff reports. Real numbers, plain English." },
                { icon: "🎯", title: "Results or Adjustments", desc: "If your leads dry up, I'm already changing the strategy. I don't wait for monthly check-ins to react. Your business doesn't pause, and neither do I." },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100"
                >
                  <span className="text-3xl mb-4 block">{v.icon}</span>
                  <h3 className="font-black text-[#1E2330] mb-3 text-lg">{v.title}</h3>
                  <p className="text-[#1E2330]/55 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* vs Big Agencies */}
        <section className="py-24 bg-[#1E2330] text-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="text-4xl font-black">Drevscale Media vs. Big Agencies</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="font-black text-xl text-[#4A90D9] mb-6">Drevscale Media ✓</h3>
                <div className="space-y-3 text-sm text-white/70">
                  {["Direct access to your account manager (Carter)", "Local knowledge of Fountain Hills & Scottsdale", "Month-to-month, no lock-in contracts", "Transparent, honest reporting", "Ad budgets starting at $400/month", "Fast response times — same day"].map(i => (
                    <div key={i} className="flex gap-2"><span className="text-[#4A90D9]">✓</span>{i}</div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                <h3 className="font-black text-xl text-white/40 mb-6">Big Agencies ✗</h3>
                <div className="space-y-3 text-sm text-white/40">
                  {["Account managers juggling 80+ clients", "No local market knowledge", "6–12 month contracts", "Vanity metrics and confusing reports", "Minimum spends of $3,000+/month", "Weeks to respond to questions"].map(i => (
                    <div key={i} className="flex gap-2"><span>✗</span>{i}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
