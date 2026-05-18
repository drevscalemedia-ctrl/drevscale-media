"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/content";

const paymentMethods = [
  { label: "Zelle", handle: BRAND.phone, color: "#6B33C8" },
  { label: "CashApp", handle: "$DrevscaleMedia", color: "#00C244" },
  { label: "Venmo", handle: "@cdrevs1134", color: "#3D95CE" },
  { label: "PayPal", handle: "@DrevscaleMedia", color: "#002F86" },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#111318] text-white overflow-hidden py-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -bottom-20 left-1/3 w-[500px] h-[400px] rounded-full bg-[#4A90D9]/10 blur-[100px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[#93C5FD] font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
              <h1 className="font-display text-6xl md:text-7xl font-black leading-none mb-6">
                Let's<br />
                <em className="not-italic text-[#4A90D9]">talk.</em>
              </h1>
              <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
                Book a free 20-minute strategy call. No pitch — just an honest look at what's possible for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-24 bg-[#FFFFFF]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left: contact info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl font-black text-[#1C1F2E] mb-8">Get in touch</h2>

                <div className="space-y-5 mb-10">
                  <a
                    href={BRAND.phoneHref}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#4A90D9]/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <p className="text-[#64748B] text-xs uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                      <p className="font-semibold text-[#1C1F2E] group-hover:text-[#4A90D9] transition-colors">{BRAND.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#4A90D9]/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <p className="text-[#64748B] text-xs uppercase tracking-wider font-semibold mb-0.5">Email</p>
                      <p className="font-semibold text-[#1C1F2E] group-hover:text-[#4A90D9] transition-colors">{BRAND.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1]">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <p className="text-[#64748B] text-xs uppercase tracking-wider font-semibold mb-0.5">Location</p>
                      <p className="font-semibold text-[#1C1F2E]">{BRAND.serviceArea}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1]">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <p className="text-[#64748B] text-xs uppercase tracking-wider font-semibold mb-0.5">Response Time</p>
                      <p className="font-semibold text-[#1C1F2E]">Within 4 hours during business hours</p>
                    </div>
                  </div>
                </div>

                {/* Payment methods */}
                <div className="p-6 rounded-3xl bg-white border border-[#CBD5E1]">
                  <h4 className="font-semibold text-[#1C1F2E] mb-4 text-sm uppercase tracking-wider">Payment Methods</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((pm) => (
                      <div
                        key={pm.label}
                        className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1]"
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: pm.color }}
                        >
                          {pm.label[0]}
                        </div>
                        <div>
                          <p className="text-[#1C1F2E] text-xs font-semibold">{pm.label}</p>
                          <p className="text-[#64748B] text-xs">{pm.handle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl border border-[#CBD5E1] p-8">
                  <h3 className="font-display text-2xl font-black text-[#1C1F2E] mb-2">Request a strategy call</h3>
                  <p className="text-[#64748B] text-sm mb-8">Fill this out and Carter will reach out to confirm your call time.</p>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
