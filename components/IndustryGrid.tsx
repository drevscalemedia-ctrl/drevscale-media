"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/content";

export default function IndustryGrid() {
  return (
    <section className="py-24 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#1D9BF0] font-semibold text-sm uppercase tracking-widest mb-3">Who We Serve</p>
          <h2 className="font-display text-5xl font-black text-[#1C1F2E]">
            Local businesses,<br />all across the East Valley.
          </h2>
          <p className="text-[#64748B] mt-4 text-lg">Hover to see typical results per industry</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <IndustryTile key={industry.name} industry={industry} delay={i * 0.06} />
          ))}
        </div>

        <p className="text-center text-[#64748B]/60 text-xs mt-8">
          * Stats shown are typical ranges across Drevscale Media campaigns — not guaranteed outcomes.
        </p>
      </div>
    </section>
  );
}

function IndustryTile({ industry, delay }: { industry: typeof INDUSTRIES[0]; delay: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative h-36 cursor-pointer"
      style={{ perspective: 600 }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
      onTouchStart={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={`${industry.name}: ${industry.stat}`}
    >
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl bg-white border border-[#CBD5E1] flex flex-col items-center justify-center gap-2 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}>
          <span className="text-3xl">{industry.icon}</span>
          <p className="font-semibold text-[#1C1F2E] text-sm text-center px-3">{industry.name}</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#1C1F2E] flex flex-col items-center justify-center gap-2 px-4 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-[#7DD3FC] font-bold text-xs uppercase tracking-wider">{industry.name}</span>
          <p className="text-white text-sm leading-snug">{industry.stat}</p>
          <span className="text-white/30 text-xs">typical range*</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
