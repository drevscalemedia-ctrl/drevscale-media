"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import AnimatedCounter from "@/components/AnimatedCounter";
import CaseStudyCard from "@/components/CaseStudyCard";
import SocialProofBar from "@/components/SocialProofBar";
import Testimonials from "@/components/Testimonials";
import { CASE_STUDIES } from "@/lib/content";

export default function Results() {
  return (
    <>
      <Navbar />
      <StickyMobileCTA />
      <main>
        {/* Hero */}
        <section className="relative bg-[#111318] text-white overflow-hidden py-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#93C5FD]/8 blur-[100px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[#93C5FD] font-semibold text-sm uppercase tracking-widest mb-4">Results</p>
              <h1 className="font-display text-6xl md:text-7xl font-black leading-none mb-6">
                Real numbers.<br />
                <em className="not-italic text-[#4A90D9]">Real businesses.</em>
              </h1>
              <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
                We let the results speak. Here's what local businesses have achieved running campaigns with Drevscale Media.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-gradient-to-r from-[#0D0F18] via-[#1a2035] to-[#0D0F18] border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { end: 15, suffix: "+", label: "Campaigns Run" },
              { end: 8, prefix: "$", suffix: "", label: "Lowest Cost Per Lead" },
              { end: 4.1, suffix: "x", decimals: 1, label: "Highest ROAS Achieved" },
              { end: 48, suffix: "hr", label: "Avg. Campaign Launch" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="font-display text-4xl md:text-5xl font-black leading-none">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-white/75 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-[#FFFFFF]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-3">Case Studies</p>
              <h2 className="font-display text-5xl font-black text-[#1C1F2E]">The numbers behind the wins.</h2>
              <p className="text-[#64748B] mt-4 max-w-xl">Industry types shared; business names kept private per client request.</p>
            </motion.div>

            <div className="space-y-8">
              {CASE_STUDIES.map((cs, i) => (
                <CaseStudyCard key={cs.industry} cs={cs} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProofBar />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <section className="py-24 bg-[#F1F5F9] text-center">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">Your Turn</p>
              <h2 className="font-display text-5xl font-black text-[#1C1F2E] mb-6">
                Want results like these<br />for your business?
              </h2>
              <p className="text-[#64748B] text-lg mb-10">Let's talk about what's possible for your specific market and budget.</p>
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
