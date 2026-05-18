"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const faqs = [
  { q: "How much does it cost total?", a: "For Facebook Ads, expect to invest around $800–$1,100/month total — that's our $400–$650 management fee plus your ad spend paid directly to Facebook. Website hosting is $50–$80/month after the one-time build fee." },
  { q: "How long before I see results?", a: "Most clients see initial lead flow within the first 2 weeks of launch. Month 2 is usually when things really hit their stride as we've optimized based on real data." },
  { q: "Do I need a big ad budget?", a: "We recommend a minimum of $400–$500/month in ad spend. Below that, Facebook doesn't have enough data to optimize effectively and results suffer." },
  { q: "Do I need a website to run Facebook ads?", a: "Not necessarily — we can send leads to a landing page or a Messenger funnel. But having a good website dramatically improves conversion rates, especially after a cold call prospect Googles you." },
  { q: "Are there long-term contracts?", a: "No. We operate month-to-month. We want to keep your business because we're delivering results, not because you're locked in." },
  { q: "What happens if I don't get results?", a: "We actively adjust strategy. No excuses, no waiting — if lead flow drops, we're already on it. You'll always know what's happening with your campaigns." },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1E2330] text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
              <h1 className="text-5xl font-black mb-4">What we offer.</h1>
              <p className="text-white/50 text-xl max-w-2xl">Two services designed to work together — get more people in the door, and give them a great first impression when they look you up.</p>
            </motion.div>
          </div>
        </section>

        {/* Facebook Ads */}
        <section id="facebook-ads" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-14 h-14 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-3xl mb-6">📣</div>
                <h2 className="text-4xl font-black text-[#1E2330] mb-4">Facebook Ads Management</h2>
                <p className="text-[#1E2330]/60 text-lg mb-8 leading-relaxed">
                  We run your Facebook and Instagram ad campaigns from start to finish. You don't need to know anything about ads — we handle everything and keep you informed every step of the way.
                </p>
                <div className="p-6 rounded-2xl bg-[#ECEEF1] mb-8">
                  <h4 className="font-bold text-[#1E2330] mb-4">Pricing</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-[#1E2330]/60">One-time setup fee</span><span className="font-bold text-[#1E2330]">$250</span></div>
                    <div className="flex justify-between"><span className="text-[#1E2330]/60">Monthly management</span><span className="font-bold text-[#1E2330]">$400–$650</span></div>
                    <div className="flex justify-between"><span className="text-[#1E2330]/60">Ad spend (paid to Facebook)</span><span className="font-bold text-[#1E2330]">$400–$500+</span></div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between"><span className="text-[#1E2330]/60">Total monthly investment</span><span className="font-bold text-[#1E2330]">~$800–$1,100</span></div>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex px-8 py-3.5 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors">
                  Get Started →
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h4 className="font-bold text-[#1E2330] mb-6 text-lg">What's included</h4>
                <div className="space-y-4">
                  {[
                    ["Campaign Setup", "Full pixel installation, account audit, campaign architecture, and audience research."],
                    ["Ad Creative & Copy", "We write the headlines, body copy, and direct the creative strategy for your ads."],
                    ["Custom Targeting", "Local radius, interest-based, and demographic targeting to reach your ideal customer."],
                    ["Ongoing Optimization", "Continuous monitoring and adjustments to improve performance week over week."],
                    ["Monthly Reports", "Clear reports showing leads generated, cost per lead, ad spend, and ROAS."],
                    ["Direct Communication", "Regular strategy check-ins with Carter — not an account manager."],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#4A90D9] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="font-semibold text-[#1E2330] text-sm">{title}</p>
                        <p className="text-[#1E2330]/50 text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Web Design */}
        <section id="web-design" className="py-24 bg-[#ECEEF1]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-14 h-14 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-3xl mb-6">💻</div>
                <h2 className="text-4xl font-black text-[#1E2330] mb-4">Website Design & Hosting</h2>
                <p className="text-[#1E2330]/60 text-lg mb-8 leading-relaxed">
                  A professional, mobile-first website that converts visitors into leads. Built fast, priced fairly, and maintained so it never goes down or gets outdated.
                </p>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 mb-8">
                  <h4 className="font-bold text-[#1E2330] mb-4">Pricing</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-[#1E2330]/60">One-time build fee</span><span className="font-bold text-[#1E2330]">Project-based</span></div>
                    <div className="flex justify-between"><span className="text-[#1E2330]/60">Monthly hosting & maintenance</span><span className="font-bold text-[#1E2330]">$50–$80/mo</span></div>
                    <div className="flex justify-between"><span className="text-[#1E2330]/60">Domain registration</span><span className="font-bold text-[#1E2330]">~$10.46/yr</span></div>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex px-8 py-3.5 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors">
                  Request a Quote →
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h4 className="font-bold text-[#1E2330] mb-6 text-lg">What's included</h4>
                <div className="space-y-4">
                  {[
                    ["Mobile-First Design", "Built for iPhone first — that's how your customers will find you."],
                    ["Fast Load Times", "Optimized for under 3 seconds. Slow sites lose customers."],
                    ["SEO Optimized", "Built with local search terms so people in your area can find you on Google."],
                    ["Contact Forms", "Lead capture forms that send directly to your email or phone."],
                    ["Ongoing Maintenance", "Minor updates and hosting covered monthly. Nothing falls through the cracks."],
                    ["Conversion-Focused", "Every page has a clear call-to-action — no confusion about the next step."],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#4A90D9] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="font-semibold text-[#1E2330] text-sm">{title}</p>
                        <p className="text-[#1E2330]/50 text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-4xl font-black text-[#1E2330]">Common questions.</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-[#ECEEF1]"
                >
                  <h4 className="font-bold text-[#1E2330] mb-2">{faq.q}</h4>
                  <p className="text-[#1E2330]/60 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1E2330] text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-4">Let's talk about your business.</h2>
            <p className="text-white/50 text-lg mb-8">Free 20-minute call. No pressure.</p>
            <Link href="/contact" className="inline-flex px-10 py-4 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors text-lg">
              Book a Free Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
