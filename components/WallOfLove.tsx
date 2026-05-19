"use client";
import { useReducedMotion, motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { TOP_ROW, BOTTOM_ROW } from "@/lib/testimonials";

const EDGE_FADE =
  "linear-gradient(to right, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)";
const EDGE_FADE_MOBILE =
  "linear-gradient(to right, transparent 0px, black 60px, black calc(100% - 60px), transparent 100%)";

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: typeof TOP_ROW;
  direction: "left" | "right";
  duration: number;
}) {
  const animName = direction === "left" ? "marquee-to-left" : "marquee-to-right";

  return (
    <div
      className="relative overflow-hidden group"
      style={{
        maskImage: EDGE_FADE,
        WebkitMaskImage: EDGE_FADE,
      }}
    >
      <div
        className="flex group-hover:[animation-play-state:paused]"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {/* Primary set — read by screen readers */}
        {items.map((t, i) => (
          <div key={`a-${i}`} style={{ flexShrink: 0, paddingRight: 24 }}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
        {/* Duplicate set — hidden from screen readers */}
        {items.map((t, i) => (
          <div key={`b-${i}`} aria-hidden="true" style={{ flexShrink: 0, paddingRight: 24 }}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StaticGrid({ items }: { items: typeof TOP_ROW }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} />
      ))}
    </div>
  );
}

export default function WallOfLove() {
  const reduced = useReducedMotion();

  return (
    <section
      className="py-24 bg-[#0D0F18] overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#C4714A] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            Real Results, Real Clients
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
            What local owners<br />are saying.
          </h2>
          <p className="text-white/40 mt-4 text-lg max-w-xl mx-auto">
            Quick notes from business owners across the Phoenix metro area.
          </p>
        </motion.div>
      </div>

      {reduced ? (
        /* Reduced-motion fallback: static grid */
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <StaticGrid items={TOP_ROW} />
          <StaticGrid items={BOTTOM_ROW} />
        </div>
      ) : (
        /* Animated dual-row marquee */
        <div className="space-y-5">
          <MarqueeRow items={TOP_ROW} direction="left" duration={60} />
          <MarqueeRow items={BOTTOM_ROW} direction="right" duration={75} />
        </div>
      )}
    </section>
  );
}
