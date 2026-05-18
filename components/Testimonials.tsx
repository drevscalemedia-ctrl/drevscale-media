"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5EFE3]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-3">What Clients Say</p>
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
              className="p-8 rounded-3xl bg-white border border-[#D4C4B0] flex flex-col"
            >
              <Quote size={32} className="text-[#C8522A] mb-6 opacity-60" />
              <p className="font-display text-xl font-semibold text-[#1C1F2E] leading-snug mb-6 italic flex-1">
                "{t.quote}"
              </p>
              <div className="border-t border-[#D4C4B0] pt-4">
                <p className="font-bold text-[#1C1F2E] text-sm">{t.name}</p>
                <p className="text-[#7A6E65] text-xs mt-0.5">{t.business}</p>
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#F5EFE3] text-[#C8522A] text-xs font-semibold">
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
