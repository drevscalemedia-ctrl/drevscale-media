"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1E2330] text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-[#4A90D9] font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-5xl font-black mb-4">Let's talk.</h1>
              <p className="text-white/50 text-xl max-w-2xl">Book a free 20-minute strategy call or fill out the form below. We respond within 1 business day.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact info */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-black text-[#1E2330] mb-8">Get in touch</h2>
                <div className="space-y-6 mb-10">
                  {[
                    { icon: "📞", label: "Phone", value: "(572) 272-7819", href: "tel:5722727819" },
                    { icon: "📧", label: "Email", value: "drevscalemedia@gmail.com", href: "mailto:drevscalemedia@gmail.com" },
                    { icon: "📍", label: "Location", value: "Fountain Hills, AZ (serves East Valley & Scottsdale)", href: null },
                  ].map(item => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="text-[#1E2330]/40 text-xs uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#1E2330] font-semibold hover:text-[#4A90D9] transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-[#1E2330] font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-[#ECEEF1]">
                  <h4 className="font-bold text-[#1E2330] mb-3">Payment Methods</h4>
                  <div className="space-y-1.5 text-sm text-[#1E2330]/60">
                    <p>💸 Zelle: (572) 272-7819</p>
                    <p>💚 CashApp: $DrevscaleMedia</p>
                    <p>💜 Venmo: @cdrevs1134</p>
                    <p>🔵 PayPal: @DrevscaleMedia</p>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                {submitted ? (
                  <div className="h-full flex items-center justify-center text-center p-8 rounded-2xl bg-[#4A90D9]/5 border border-[#4A90D9]/20">
                    <div>
                      <div className="text-5xl mb-4">✅</div>
                      <h3 className="text-2xl font-black text-[#1E2330] mb-2">Got it!</h3>
                      <p className="text-[#1E2330]/60">Thanks {form.name}! We'll be in touch within 1 business day.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#1E2330] mb-2">Your Name *</label>
                        <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#ECEEF1] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/30 text-[#1E2330] text-sm" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1E2330] mb-2">Business Name *</label>
                        <input required value={form.business} onChange={e => setForm({...form, business: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#ECEEF1] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/30 text-[#1E2330] text-sm" placeholder="Your Business" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2330] mb-2">Phone Number *</label>
                      <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#ECEEF1] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/30 text-[#1E2330] text-sm" placeholder="(480) 555-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2330] mb-2">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#ECEEF1] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/30 text-[#1E2330] text-sm" placeholder="john@yourbusiness.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2330] mb-2">Monthly Ad Budget</label>
                      <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#ECEEF1] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/30 text-[#1E2330] text-sm">
                        <option value="">Select a range...</option>
                        <option>$400 – $600/month</option>
                        <option>$600 – $1,000/month</option>
                        <option>$1,000 – $2,000/month</option>
                        <option>$2,000+/month</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2330] mb-2">Tell us about your business</label>
                      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#ECEEF1] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/30 text-[#1E2330] text-sm resize-none" placeholder="What do you sell? Who's your customer? What's your current marketing like?" />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-full font-bold bg-[#4A90D9] text-white hover:bg-[#3a7bc8] transition-colors text-sm">
                      Request a Free Strategy Call →
                    </button>
                    <p className="text-center text-xs text-[#1E2330]/40">We respond within 1 business day.</p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
