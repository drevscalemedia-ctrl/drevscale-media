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

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-[#0A0A0A] text-white overflow-hidden min-h-screen flex items-center justify-center">

          {/* Dot grid background */}
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.25 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-dots)" />
            </svg>
          </div>

          {/* Blue radial glow — off-center left, suggests upward momentum */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 900px 700px at 38% 55%, rgba(29,155,240,0.14) 0%, transparent 65%)",
            }}
          />

          {/* Subtle vignette fade at edges */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-60" />

          <div className="relative text-center max-w-4xl mx-auto px-6 pt-36 pb-40">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1D9BF0]/25 bg-[#1D9BF0]/[0.08] text-[#1D9BF0] text-xs font-semibold uppercase tracking-widest mb-9"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9BF0] animate-pulse" />
              {BRAND.scarcity}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[68px] md:text-[88px] font-black leading-[1.02] tracking-[-0.03em] text-[#F5F5F5] mb-7"
            >
              More Leads.<br />
              <span className="text-[#1D9BF0]">More Customers.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-[18px] leading-relaxed text-[#A0A0A0] max-w-lg mx-auto mb-12"
            >
              Facebook & Instagram ads for local businesses in Fountain Hills &
              Scottsdale. Done-for-you. Zero guesswork.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-[#1D9BF0] text-white font-semibold text-sm hover:bg-[#0F85D0] transition-colors"
                style={{ boxShadow: "0 0 40px rgba(29,155,240,0.35)" }}
              >
                Book a Free Strategy Call →
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/70 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-colors"
              >
                See Real Results
              </Link>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-center gap-6 mt-14 text-xs text-[#A0A0A0]/50 flex-wrap"
            >
              <span>📍 Fountain Hills, AZ</span>
              <span className="w-px h-3 bg-white/10" />
              <span>No contracts. Month-to-month.</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Campaigns live in 48 hrs</span>
            </motion.div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-[#0D0F18] via-[#1a2035] to-[#0D0F18] border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { end: 15, suffix: "+", label: "Campaigns Run" },
              { label: "Avg. Cost Per Lead", raw: "$8–$15" },
              { end: 48, suffix: "hr", label: "Campaign Launch" },
              { end: 3, suffix: "x", label: "Average ROAS" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="font-display text-5xl font-black leading-none mb-2 text-[#7DD3FC]">
                  {stat.raw ? stat.raw : <AnimatedCounter end={stat.end!} suffix={stat.suffix} />}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────── */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-[#1D9BF0] font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
              <h2 className="font-display text-6xl font-black text-[#111318] leading-none">
                Two services.<br />One goal.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard type="facebook" />
              <ServiceCard type="web" />
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────── */}
        <HowItWorks />

        {/* ── ROI Calculator ───────────────────────────────── */}
        <ROICalculator />

        {/* ── Industry Grid ────────────────────────────────── */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-[#1D9BF0] font-semibold text-sm uppercase tracking-widest mb-4">Industries We Serve</p>
              <h2 className="font-display text-6xl font-black text-[#111318] leading-none">
                Does this work for<br />your business?
              </h2>
              <p className="text-[#64748B] mt-5 text-lg max-w-lg">Hover each tile to see average results. Every industry has its own cost per lead.</p>
            </motion.div>
            <IndustryGrid />
          </div>
        </section>

        {/* ── Social Proof ─────────────────────────────────── */}
        <SocialProofBar />

        {/* ── Meet Carter ──────────────────────────────────── */}
        <MeetCarter />

        {/* ── Testimonials ─────────────────────────────────── */}
        <Testimonials />

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-32 bg-[#111318] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#1D9BF0]/15 blur-[100px]" />
          </div>
          <div className="relative max-w-2xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#7DD3FC] font-semibold text-sm uppercase tracking-widest mb-5">Still thinking?</p>
              <h2 className="font-display text-6xl md:text-7xl font-black leading-[0.95] mb-8">
                The call is free.<br />
                <em className="not-italic text-[#1D9BF0]">The leads aren't.</em>
              </h2>
              <p className="text-white/45 text-xl mb-12">20 minutes. No pitch. Just an honest look at what Facebook ads could do for your business.</p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 rounded-full bg-[#1D9BF0] text-white font-bold text-lg hover:bg-[#0F85D0] transition-colors"
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
