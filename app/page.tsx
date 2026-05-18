"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import AnimatedCounter from "@/components/AnimatedCounter";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import IndustryGrid from "@/components/IndustryGrid";
import MeetCarter from "@/components/MeetCarter";
import SocialProofBar from "@/components/SocialProofBar";
import Testimonials from "@/components/Testimonials";
import { BRAND } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyMobileCTA />
      <main>
        {/* Hero */}
        <section className="relative bg-[#1C1F2E] text-white overflow-hidden min-h-[90vh] flex items-center">
          {/* Gradient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#C8522A]/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E8A848]/8 blur-[100px]" />
          </div>
          {/* Grain overlay */}
          <div className="absolute inset-0 grain-overlay opacity-30" />

          <div className="relative max-w-5xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Scarcity badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8A848]/30 bg-[#E8A848]/10 text-[#E8A848] text-sm font-semibold mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#E8A848] animate-pulse" />
                {BRAND.scarcity}
              </motion.div>

              <h1 className="font-display text-6xl md:text-8xl font-black leading-none mb-8 max-w-4xl">
                More Leads.<br />
                <em className="not-italic text-[#C8522A]">More Customers.</em>
              </h1>

              <p className="text-white/60 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed">
                Facebook & Instagram ads built for local businesses in{" "}
                <span className="text-white/90">Fountain Hills and Scottsdale</span>.
                Done-for-you. Results-focused.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 rounded-full bg-[#C8522A] text-white font-bold text-lg hover:bg-[#A8432A] transition-colors shadow-xl shadow-[#C8522A]/30"
                >
                  Book a Free Strategy Call →
                </Link>
                <Link
                  href="/results"
                  className="inline-flex items-center px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors"
                >
                  See Real Results
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-white/35">
                <span>📍 Fountain Hills, AZ</span>
                <span className="w-px h-4 bg-white/20" />
                <span>No contracts. Month-to-month.</span>
                <span className="w-px h-4 bg-white/20" />
                <span>Campaigns live in 48hrs</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#C8522A]">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { end: 15, suffix: "+", label: "Campaigns Run" },
              { end: 8, prefix: "$", suffix: "–$15", label: "Avg. Cost Per Lead", raw: true },
              { end: 48, suffix: "hr", label: "Campaign Launch" },
              { end: 3, suffix: "x", label: "Average ROAS" },
            ].map((stat, i) =>
              stat.raw ? (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="font-display text-4xl md:text-5xl font-black leading-none">$8–$15</div>
                  <div className="text-white/75 text-sm mt-2">{stat.label}</div>
                </motion.div>
              ) : (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="font-display text-4xl md:text-5xl font-black leading-none">
                    <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/75 text-sm mt-2">{stat.label}</div>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="font-display text-5xl font-black text-[#1C1F2E]">Two services.<br />One goal: more customers.</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard type="facebook" />
              <ServiceCard type="web" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Industry Grid */}
        <section className="py-24 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-3">Industries We Serve</p>
              <h2 className="font-display text-5xl font-black text-[#1C1F2E]">Does this work for<br />your type of business?</h2>
              <p className="text-[#7A6E65] mt-4 text-lg max-w-xl mx-auto">Hover each tile to see average results. Every industry has its own cost per lead — yours might surprise you.</p>
            </motion.div>
            <IndustryGrid />
          </div>
        </section>

        {/* Social Proof Bar */}
        <SocialProofBar />

        {/* Meet Carter */}
        <MeetCarter />

        {/* Testimonials */}
        <Testimonials />

        {/* Mid-page CTA */}
        <section className="py-24 bg-[#1C1F2E] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#C8522A]/12 blur-[80px]" />
          </div>
          <div className="relative max-w-2xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#E8A848] font-semibold text-sm uppercase tracking-widest mb-4">Still thinking?</p>
              <h2 className="font-display text-5xl md:text-6xl font-black leading-tight mb-6">
                The call is free.<br />
                <em className="not-italic text-[#C8522A]">The results aren't.</em>
              </h2>
              <p className="text-white/50 text-lg mb-10">20 minutes. No pitch. Just an honest look at what Facebook ads could do for your business.</p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 rounded-full bg-[#C8522A] text-white font-bold text-lg hover:bg-[#A8432A] transition-colors"
              >
                Book a Free Strategy Call →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
