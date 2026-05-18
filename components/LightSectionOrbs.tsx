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
    size: 800,
    left: "5%",
    top: "-10%",
    dx: [0, 100, 40, 0],
    dy: [0, 80, 120, 0],
    dur: 30,
    color: "rgba(29,155,240,0.22)",
  },
  {
    size: 600,
    left: "80%",
    top: "55%",
    dx: [0, -90, -30, 0],
    dy: [0, -80, 50, 0],
    dur: 24,
    color: "rgba(125,211,252,0.18)",
  },
  {
    size: 450,
    left: "45%",
    top: "85%",
    dx: [0, 70, -50, 0],
    dy: [0, -90, -40, 0],
    dur: 20,
    color: "rgba(29,155,240,0.15)",
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
