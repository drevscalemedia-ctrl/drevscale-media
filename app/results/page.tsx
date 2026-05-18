"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const caseStudies = [
  {
    type: "Local HVAC Company",
    location: "Fountain Hills, AZ",
    result: "34 leads in 30 days",
    cpl: "$8.20 cost per lead",
    spend: "$280 ad spend",
    desc: "Targeted homeowners within 15 miles during summer peak season. Campaign focused on AC tune-up offer, driving calls and form submissions.",
  },
  {
    type: "Med Spa / Aesthetics",
    location: "Scottsdale, AZ",
    result: "22 new appointment bookings",
    cpl: "$14.50 cost per lead",
    spend: "$320 ad spend",
    desc: "Retargeting campaign combined with interest-based targeting for women 28–55 in north Scottsdale. Promo offer drove direct booking page visits.",
  },
  {
    type: "Local Restaurant",
    location: "Fountain Hills, AZ",
    result: "400+ event RSVPs",
    cpl: "$1.80 per RSVP",
    spend: "$720 ad spend",
    desc: "Event-based campaign for a Friday night special. Reached locals via geo-fencing and lookalike audiences built from their existing Facebook followers.",
  },
];

export default function Results() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1E2330] text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">Results</p>
              <h1 className="text-5xl font-black mb-4">Real numbers. Real businesses.</h1>
              <p className="text-white/50 text-xl max-w-2xl">We let the results speak. Here's what local businesses have achieved with Drevscale Media campaigns.</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#4A90D9] py-12">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[["15+", "Campaigns Run"], ["$8–15", "Avg. Cost Per Lead"], ["48hr", "Average Launch Time"], ["3x", "Average ROAS"]].map(([v, l]) => (
              <div key={l}><div className="text-3xl font-black">{v}</div><div className="text-white/75 text-sm mt-1">{l}</div></div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <h2 className="text-4xl font-black text-[#1E2330]">Case Studies</h2>
              <p className="text-[#1E2330]/50 mt-2">Results from real campaigns. Industry types shared; business names kept private per client request.</p>
            </motion.div>
            <div className="space-y-6">
              {caseStudies.map((cs, i) => (
                <motion.div
                  key={cs.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-[#ECEEF1] border border-gray-200"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-black text-xl text-[#1E2330]">{cs.type}</h3>
                      <p className="text-[#1E2330]/50 text-sm">📍 {cs.location}</p>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="px-4 py-1.5 rounded-full bg-[#4A90D9] text-white text-sm font-bold">{cs.result}</span>
                      <span className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#1E2330] text-sm font-semibold">{cs.cpl}</span>
                      <span className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#1E2330] text-sm font-semibold">{cs.spend}</span>
                    </div>
                  </div>
                  <p className="text-[#1E2330]/60 text-sm leading-relaxed">{cs.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business types */}
        <section className="py-24 bg-[#1E2330] text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-black mb-4">Industries we've worked with</h2>
              <p className="text-white/40 text-lg mb-10">If your customers are local, we can reach them.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["HVAC & Home Services", "Med Spas & Aesthetics", "Restaurants & Cafés", "Dental Practices", "Chiropractic & Wellness", "Gyms & Fitness Studios", "Real Estate Agents", "Auto Repair & Dealerships"].map(b => (
                  <span key={b} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#1E2330] mb-4">Want results like these?</h2>
            <p className="text-[#1E2330]/50 text-lg mb-8">Let's talk about what's possible for your specific business and market.</p>
            <Link href="/contact" className="inline-flex px-10 py-4 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors text-lg">
              Book a Free Strategy Call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
