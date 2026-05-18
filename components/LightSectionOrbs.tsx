"use client";
import { motion, useReducedMotion } from "framer-motion";

const ORBS: {
  size: number;
  left: string;
  top: string;
  dx: number[];
  dy: number[];
  dur: number;
  color: string;
}[] = [
  {
    size: 700,
    left: "5%",
    top: "-10%",
    dx: [0, 80, 30, 0],
    dy: [0, 60, 100, 0],
    dur: 30,
    color: "rgba(29,155,240,0.07)",
  },
  {
    size: 500,
    left: "75%",
    top: "50%",
    dx: [0, -70, -20, 0],
    dy: [0, -60, 40, 0],
    dur: 24,
    color: "rgba(125,211,252,0.06)",
  },
  {
    size: 380,
    left: "45%",
    top: "80%",
    dx: [0, 50, -40, 0],
    dy: [0, -70, -30, 0],
    dur: 20,
    color: "rgba(29,155,240,0.05)",
  },
];

export default function LightSectionOrbs() {
  const reduced = useReducedMotion();

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {ORBS.map((o, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: o.left,
            top: o.top,
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${o.color} 0%, transparent 68%)`,
            transform: "translate(-50%, -50%)",
            willChange: reduced ? "auto" : "transform",
          }}
          animate={reduced ? undefined : { x: o.dx, y: o.dy }}
          transition={{
            duration: o.dur,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
