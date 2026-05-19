"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/lib/content";
import Link from "next/link";

function AnimNum({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18 }}
        className="inline-block tabular-nums"
      >
        {prefix}{value.toLocaleString()}{suffix}
      </motion.span>
    </AnimatePresence>
  );
}

function ROIRing({ roi }: { roi: number }) {
  const size = 176;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(roi, 1000));
  const fill = circ * (clamped / 1000);

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="#1D9BF0"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          animate={{ strokeDashoffset: circ - fill }}
          initial={{ strokeDashoffset: circ }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 8px rgba(29,155,240,0.65))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[10px] text-white/35 uppercase tracking-widest mb-0.5">ROI</span>
        <span className="font-display font-black text-white leading-none" style={{ fontSize: 34 }}>
          <AnimNum value={Math.round(Math.max(-100, roi))} suffix="%" />
        </span>
        <span className="text-[10px] text-white/35 mt-1">annual</span>
      </div>
    </div>
  );
}

function CompareBar({ label, value, max, blue }: { label: string; value: number; max: number; blue: boolean }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className={blue ? "text-[#1D9BF0]" : "text-white/40"}>{label}</span>
        <span className={blue ? "text-[#1D9BF0] font-semibold" : "text-white/50 font-semibold"}>${value.toLocaleString()}</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${blue ? "bg-[#1D9BF0]" : "bg-white/20"}`}
          style={blue ? { boxShadow: "0 0 10px rgba(29,155,240,0.5)" } : {}}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState(600);
  const [industryIdx, setIndustryIdx] = useState(0);
  const [customerValue, setCustomerValue] = useState(500);

  const industry = INDUSTRIES[industryIdx];

  const results = useMemo(() => {
    const leadsPerMonth = Math.round(adSpend / industry.cpl);
    const customersPerMonth = Math.round(leadsPerMonth * 0.15);
    const revenueYear = customersPerMonth * customerValue * 12;
    const totalSpend = adSpend * 12;
    const roi = totalSpend > 0 ? ((revenueYear - totalSpend) / totalSpend) * 100 : 0;
    return { leadsPerMonth, customersPerMonth, revenueYear, roi, cpl: industry.cpl, totalSpend };
  }, [adSpend, industry, customerValue]);

  const barMax = Math.max(results.totalSpend, results.revenueYear);

  return (
    <section className="py-24 bg-[#0D0F18] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1D9BF0]/8 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#1D9BF0] font-semibold text-sm uppercase tracking-widest mb-3">ROI Calculator</p>
          <h2 className="font-display text-5xl font-black text-white leading-tight">
            What could your ads<br /><em className="not-italic text-[#1D9BF0]">actually</em> be worth?
          </h2>
          <p className="text-white/40 mt-3 text-lg max-w-xl">Drag the sliders — see your numbers update live. Benchmarks only, not guarantees.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 space-y-8"
          >
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Monthly Ad Spend</label>
                <span className="font-display font-black text-2xl text-[#1D9BF0]">${adSpend.toLocaleString()}</span>
              </div>
              <input
                type="range" min={400} max={2000} step={50} value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="calc-slider"
                aria-label="Monthly ad spend"
              />
              <div className="flex justify-between text-xs text-white/20 mt-2"><span>$400</span><span>$2,000</span></div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Industry</label>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((ind, i) => (
                  <button
                    key={ind.name}
                    onClick={() => setIndustryIdx(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      industryIdx === i
                        ? "bg-[#1D9BF0] text-white"
                        : "bg-white/[0.06] text-white/45 hover:bg-white/10 hover:text-white/75"
                    }`}
                    style={industryIdx === i ? { boxShadow: "0 0 14px rgba(29,155,240,0.45)" } : {}}
                  >
                    {ind.icon} {ind.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Avg. Customer Value</label>
                <span className="font-display font-black text-2xl text-[#1D9BF0]">${customerValue.toLocaleString()}</span>
              </div>
              <input
                type="range" min={100} max={5000} step={50} value={customerValue}
                onChange={(e) => setCustomerValue(Number(e.target.value))}
                className="calc-slider"
                aria-label="Average customer value"
              />
              <div className="flex justify-between text-xs text-white/20 mt-2"><span>$100</span><span>$5,000</span></div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 flex flex-col gap-6"
          >
            {/* Ring + stats */}
            <div className="flex items-center gap-6">
              <ROIRing roi={results.roi} />
              <div className="space-y-4 flex-1 min-w-0">
                <div>
                  <p className="text-[10px] text-white/35 uppercase tracking-widest mb-0.5">Leads / Month</p>
                  <p className="font-display font-black text-2xl text-white">
                    <AnimNum value={results.leadsPerMonth} />
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-white/35 uppercase tracking-widest mb-0.5">New Customers / Mo</p>
                  <p className="font-display font-black text-2xl text-white">
                    <AnimNum value={results.customersPerMonth} />
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-white/35 uppercase tracking-widest mb-0.5">Cost Per Lead</p>
                  <p className="font-display font-black text-2xl text-white">
                    <AnimNum value={results.cpl} prefix="$" />
                  </p>
                </div>
              </div>
            </div>

            {/* Big revenue */}
            <div className="rounded-2xl bg-[#1D9BF0]/10 border border-[#1D9BF0]/20 px-6 py-5">
              <p className="text-xs text-[#1D9BF0]/60 uppercase tracking-widest mb-1">12-Month Revenue Impact</p>
              <p className="font-display font-black text-4xl text-[#1D9BF0]">
                <AnimNum value={results.revenueYear} prefix="$" />
              </p>
            </div>

            {/* Comparison bars */}
            <div className="space-y-3">
              <CompareBar label="Annual ad spend" value={results.totalSpend} max={barMax} blue={false} />
              <CompareBar label="Revenue impact" value={results.revenueYear} max={barMax} blue={true} />
            </div>

            <p className="text-xs text-white/20 italic">Assumes ~15% lead-to-customer conversion. Benchmarks only — actual results vary.</p>

            <Link
              href="/contact"
              className="block w-full text-center py-4 rounded-full bg-[#1D9BF0] text-white font-bold hover:bg-[#0F85D0] transition-colors"
              style={{ boxShadow: "0 0 24px rgba(29,155,240,0.3)" }}
            >
              Lock these numbers in — book a call →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
