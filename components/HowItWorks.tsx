"use client";
import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#111318] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#93BCED] font-semibold text-sm uppercase tracking-widest mb-4">Process</p>
          <h2 className="font-display text-5xl font-black text-white leading-tight">
            From call to leads<br />
            <em className="text-[#4A90D9] not-italic">in 48 hours.</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="font-display text-2xl font-black text-[#93BCED]">{step.step}</span>
                </div>
                <p className="text-[#4A90D9] text-xs font-semibold uppercase tracking-wider mb-2">{step.subtitle}</p>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
