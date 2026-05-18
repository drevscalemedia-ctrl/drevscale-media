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
        <section className="relative bg-[#111318] text-white overflow-hidden min-h-screen flex items-center">
          {/* Ambient glow orbs */}
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#4A90D9]/15 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#93C5FD]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 py-40">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Scarcity badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#93C5FD]/25 bg-[#93C5FD]/10 text-[#93C5FD] text-sm font-semibold mb-10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD] animate-pulse" />
                {BRAND.scarcity}
              </motion.div>

              <h1 className="font-display text-7xl md:text-[96px] font-black leading-[0.95] mb-8 tracking-tight">
                More Leads.<br />
                <em className="not-italic text-[#4A90D9]">More Customers.</em>
              </h1>

              <p className="text-white/55 text-xl md:text-2xl max-w-xl mb-12 leading-relaxed">
                Facebook & Instagram ads for local businesses in{" "}
                <span className="text-white/90 font-medium">Fountain Hills & Scottsdale</span>.
                Done-for-you. Zero guesswork.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-9 py-5 rounded-full bg-[#4A90D9] text-white font-bold text-lg hover:bg-[#3478C2] transition-colors shadow-2xl shadow-[#4A90D9]/25"
                >
                  Book a Free Strategy Call →
                </Link>
                <Link
                  href="/results"
                  className="inline-flex items-center px-9 py-5 rounded-full border border-white/15 text-white/80 font-semibold text-lg hover:bg-white/8 hover:text-white transition-colors"
                >
                  See Real Results
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-14 text-sm text-white/30">
                <span>📍 Fountain Hills, AZ</span>
                <span className="w-px h-4 bg-white/15" />
                <span>No contracts. Month-to-month.</span>
                <span className="w-px h-4 bg-white/15" />
                <span>Campaigns live in 48 hrs</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111318] to-transparent pointer-events-none" />
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
                <div className="font-display text-5xl font-black leading-none mb-2 text-[#93C5FD]">
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
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
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
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">Industries We Serve</p>
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#4A90D9]/15 blur-[100px]" />
          </div>
          <div className="relative max-w-2xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#93C5FD] font-semibold text-sm uppercase tracking-widest mb-5">Still thinking?</p>
              <h2 className="font-display text-6xl md:text-7xl font-black leading-[0.95] mb-8">
                The call is free.<br />
                <em className="not-italic text-[#4A90D9]">The leads aren't.</em>
              </h2>
              <p className="text-white/45 text-xl mb-12">20 minutes. No pitch. Just an honest look at what Facebook ads could do for your business.</p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 rounded-full bg-[#4A90D9] text-white font-bold text-lg hover:bg-[#3478C2] transition-colors"
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
