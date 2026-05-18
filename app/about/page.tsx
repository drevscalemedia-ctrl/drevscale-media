"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import MeetCarter from "@/components/MeetCarter";

const values = [
  {
    icon: "🤝",
    title: "Direct Access",
    desc: "You have Carter's phone number and email. When you have a question, you reach the person actually managing your campaigns — not a support ticket.",
  },
  {
    icon: "📊",
    title: "Total Transparency",
    desc: "You see everything — spend, leads, cost per lead, what's working and what isn't. No black boxes, no fluff reports. Real numbers, plain English.",
  },
  {
    icon: "🎯",
    title: "Results or Adjustments",
    desc: "If your leads dry up, the strategy changes that week. Not at the next monthly check-in. Your business doesn't pause, and neither do I.",
  },
];

const drevscalePros = [
  "Direct access to Carter — the person running your ads",
  "Local knowledge of Fountain Hills & Scottsdale",
  "Month-to-month, no lock-in contracts",
  "Transparent, honest reporting",
  "Ad budgets starting at $400/month",
  "Same-day response times",
];

const agencyCons = [
  "Account managers juggling 80+ clients",
  "No local market knowledge",
  "6–12 month contracts",
  "Vanity metrics and confusing reports",
  "Minimum spends of $3,000+/month",
  "Weeks to respond to questions",
];

export default function About() {
  return (
    <>
      <Navbar />
      <StickyMobileCTA />
      <main>
        {/* Hero */}
        <section className="relative bg-[#111318] text-white overflow-hidden py-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -bottom-20 left-0 w-[500px] h-[400px] rounded-full bg-[#C8522A]/8 blur-[100px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[#E8A848] font-semibold text-sm uppercase tracking-widest mb-4">About</p>
              <h1 className="font-display text-6xl md:text-7xl font-black leading-none mb-6">
                Local guy.<br />
                <em className="not-italic text-[#C8522A]">Real results.</em>
              </h1>
              <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
                No big agency overhead. No hand-offs. Just Carter — working directly with your business to get you more customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet Carter (full version) */}
        <MeetCarter />

        {/* Values */}
        <section className="py-24 bg-[#111318]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <p className="text-[#E8A848] font-semibold text-sm uppercase tracking-widest mb-3">How I Work</p>
              <h2 className="font-display text-5xl font-black text-white">Three commitments.</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl border border-white/10 bg-white/5"
                >
                  <span className="text-3xl mb-4 block">{v.icon}</span>
                  <h3 className="font-display text-xl font-black text-white mb-3">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-3">The Honest Comparison</p>
              <h2 className="font-display text-5xl font-black text-[#1C1F2E]">Drevscale Media<br />vs. Big Agencies</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border-2 border-[#C8522A] bg-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C8522A] flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-black text-[#1C1F2E]">Drevscale Media</h3>
                </div>
                <div className="space-y-3">
                  {drevscalePros.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#1C1F2E]">
                      <CheckCircle2 size={16} className="text-[#C8522A] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-[#D4C4B0] bg-[#FAF7F2]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4C4B0] flex items-center justify-center">
                    <XCircle size={20} className="text-[#7A6E65]" />
                  </div>
                  <h3 className="font-display text-xl font-black text-[#7A6E65]">Big Agencies</h3>
                </div>
                <div className="space-y-3">
                  {agencyCons.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#7A6E65]">
                      <XCircle size={16} className="text-[#D4C4B0] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F5EFE3] text-center">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-4">Work With Me</p>
              <h2 className="font-display text-5xl font-black text-[#1C1F2E] mb-6">
                Ready to get more<br />local customers?
              </h2>
              <p className="text-[#7A6E65] text-lg mb-10">Book a free 20-minute strategy call. No pitch — just a real conversation about what's possible.</p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 rounded-full bg-[#C8522A] text-white font-bold text-lg hover:bg-[#A8432A] transition-colors"
              >
                Book a Free Call →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
