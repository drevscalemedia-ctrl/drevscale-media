"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import { PRICING } from "@/lib/content";

export default function Services() {
  return (
    <>
      <Navbar />
      <StickyMobileCTA />
      <main>
        {/* Hero */}
        <section className="relative bg-[#111318] text-white overflow-hidden py-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 right-0 w-[500px] h-[400px] rounded-full bg-[#4A90D9]/10 blur-[100px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[#93BCED] font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
              <h1 className="font-display text-6xl md:text-7xl font-black leading-none mb-6">
                What we<br />
                <em className="not-italic text-[#4A90D9]">actually do.</em>
              </h1>
              <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
                Two services built to work together — drive more people in the door, and give them a great first impression when they look you up.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <ServiceCard type="facebook" />
              <ServiceCard type="web" />
            </div>

            {/* Pricing detail */}
            <div className="grid md:grid-cols-2 gap-8" id="pricing">
              {/* FB Ads pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#CBD5E1] bg-white p-8"
                id="facebook-ads"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-xl">📣</div>
                  <h3 className="font-display text-2xl font-black text-[#1C1F2E]">Facebook Ads Pricing</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-[#CBD5E1]">
                    <span className="text-[#64748B] text-sm">One-time setup fee</span>
                    <span className="font-bold text-[#1C1F2E]">{PRICING.fbAds.setup}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#CBD5E1]">
                    <span className="text-[#64748B] text-sm">Monthly management</span>
                    <span className="font-bold text-[#1C1F2E]">{PRICING.fbAds.managementRange}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#CBD5E1]">
                    <span className="text-[#64748B] text-sm">Ad spend (paid to Facebook)</span>
                    <span className="font-bold text-[#1C1F2E]">{PRICING.fbAds.adSpendRange}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-[#F1F5F9] rounded-xl px-4 -mx-2">
                    <span className="font-semibold text-[#1C1F2E] text-sm">Total monthly investment</span>
                    <span className="font-display text-xl font-black text-[#4A90D9]">{PRICING.fbAds.totalRange}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center py-4 rounded-full bg-[#4A90D9] text-white font-bold hover:bg-[#3478C2] transition-colors"
                >
                  Get Started with Ads →
                </Link>
              </motion.div>

              {/* Web design pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-[#CBD5E1] bg-white p-8"
                id="web-design"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-xl">💻</div>
                  <h3 className="font-display text-2xl font-black text-[#1C1F2E]">Website Pricing</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-[#CBD5E1]">
                    <span className="text-[#64748B] text-sm">One-time build fee</span>
                    <span className="font-bold text-[#1C1F2E]">{PRICING.web.build}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#CBD5E1]">
                    <span className="text-[#64748B] text-sm">Monthly hosting & maintenance</span>
                    <span className="font-bold text-[#1C1F2E]">{PRICING.web.hostingRange}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#CBD5E1]">
                    <span className="text-[#64748B] text-sm">Domain registration</span>
                    <span className="font-bold text-[#1C1F2E]">{PRICING.web.domain}</span>
                  </div>
                  <div className="py-3 bg-[#F1F5F9] rounded-xl px-4 -mx-2">
                    <p className="text-[#64748B] text-xs">Build fee is project-based — request a quote for your specific needs.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center py-4 rounded-full border-2 border-[#1C1F2E] text-[#1C1F2E] font-bold hover:bg-[#1C1F2E] hover:text-white transition-colors"
                >
                  Request a Web Quote →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <section className="py-32 bg-[#111318] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#4A90D9]/15 blur-[80px]" />
          </div>
          <div className="relative max-w-2xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[#93BCED] font-semibold text-sm uppercase tracking-widest mb-4">Ready?</p>
              <h2 className="font-display text-5xl font-black mb-6">
                Let's talk about<br />
                <em className="not-italic text-[#4A90D9]">your business.</em>
              </h2>
              <p className="text-white/50 text-lg mb-10">Free 20-minute call. No pressure. Just honest advice.</p>
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
