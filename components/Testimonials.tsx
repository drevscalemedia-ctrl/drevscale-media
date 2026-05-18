"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#1D9BF0] font-semibold text-sm uppercase tracking-widest mb-3">What Clients Say</p>
          <h2 className="font-display text-5xl font-black text-[#1C1F2E]">Don't take our word for it.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white shadow-lg shadow-black/[0.06] flex flex-col"
            >
              <Quote size={32} className="text-[#1D9BF0] mb-6 opacity-60" />
              <p className="font-display text-xl font-semibold text-[#1C1F2E] leading-snug mb-6 italic flex-1">
                "{t.quote}"
              </p>
              <div className="border-t border-[#CBD5E1] pt-4">
                <p className="font-bold text-[#1C1F2E] text-sm">{t.name}</p>
                <p className="text-[#64748B] text-xs mt-0.5">{t.business}</p>
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#F1F5F9] text-[#1D9BF0] text-xs font-semibold">
                  {t.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
