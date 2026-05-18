"use client";
import { useRef, useMemo, useEffect, useState, useId } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

interface CaseStudy {
  industry: string;
  location: string;
  before: { leads: number; cpl: number; roas: number };
  after: { leads: number; cpl: number; roas: number };
  adSpend: number;
  timeframe: string;
  summary: string;
  quote: string;
}

// Deterministic growth curve — no Math.random so hydration is stable
function makeData(start: number, end: number): number[] {
  const jitter = [0, .02, -.03, .04, -.01, .03, -.02, .05, .01, -.02, .03, .02, 0];
  return Array.from({ length: 13 }, (_, i) => {
    const t = i / 12;
    const v = start + (end - start) * Math.pow(t, 1.4);
    return Math.max(0, Math.round(v * (1 + jitter[i])));
  });
}

function buildLinePath(vals: number[], W: number, H: number, pad: number): string {
  const lo = Math.min(...vals), hi = Math.max(...vals), range = hi - lo || 1;
  const pts: [number, number][] = vals.map((v, i) => [
    pad + (i / (vals.length - 1)) * (W - 2 * pad),
    pad + (1 - (v - lo) / range) * (H - 2 * pad),
  ]);
  let d = `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const cx = ((pts[i - 1][0] + pts[i][0]) / 2).toFixed(1);
    d += ` C ${cx},${pts[i-1][1].toFixed(1)} ${cx},${pts[i][1].toFixed(1)} ${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)}`;
  }
  return d;
}

function buildAreaPath(vals: number[], W: number, H: number, pad: number): string {
  const line = buildLinePath(vals, W, H, pad);
  return `${line} L ${(W - pad).toFixed(1)},${H} L ${pad},${H} Z`;
}

function getEndpoint(vals: number[], W: number, H: number, pad: number): [number, number] {
  const lo = Math.min(...vals), hi = Math.max(...vals), range = hi - lo || 1;
  const last = vals[vals.length - 1];
  return [
    W - pad,
    pad + (1 - (last - lo) / range) * (H - 2 * pad),
  ];
}

// ── Animated SVG Chart ──────────────────────────────────────────────────────
function Chart({ vals, inView }: { vals: number[]; inView: boolean }) {
  const uid = useId();
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const W = 440, H = 148, PAD = 12;

  const linePath = useMemo(() => buildLinePath(vals, W, H, PAD), [vals]);
  const areaPath = useMemo(() => buildAreaPath(vals, W, H, PAD), [vals]);
  const [ex, ey] = useMemo(() => getEndpoint(vals, W, H, PAD), [vals]);

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, [linePath]);

  const drawn = inView && len > 0;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id={`ag-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D9BF0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1D9BF0" stopOpacity="0" />
        </linearGradient>
        <filter id={`glow-${uid}`}>
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {[0.33, 0.66].map(t => (
        <line
          key={t}
          x1={PAD} y1={PAD + t * (H - 2 * PAD)}
          x2={W - PAD} y2={PAD + t * (H - 2 * PAD)}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}

      {/* Area fill */}
      <path d={areaPath} fill={`url(#ag-${uid})`} />

      {/* Glow line (blurred copy) */}
      <path
        d={linePath}
        fill="none"
        stroke="#1D9BF0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.25"
        style={{
          strokeDasharray: len || undefined,
          strokeDashoffset: drawn ? 0 : (len || undefined),
          transition: drawn ? 'stroke-dashoffset 1.5s cubic-bezier(0.22,1,0.36,1) 0.25s' : 'none',
        }}
      />

      {/* Main line */}
      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="#1D9BF0"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: len || undefined,
          strokeDashoffset: drawn ? 0 : (len || undefined),
          transition: drawn ? 'stroke-dashoffset 1.5s cubic-bezier(0.22,1,0.36,1) 0.25s' : 'none',
        }}
      />

      {/* Pulsing endpoint */}
      {drawn && (
        <g>
          {/* Outer pulse ring */}
          <circle cx={ex} cy={ey} r="4" fill="#1D9BF0" fillOpacity="0.2">
            <animate attributeName="r" values="4;14;4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.2;0;0.2" dur="2.4s" repeatCount="indefinite" />
          </circle>
          {/* Dot */}
          <motion.circle
            cx={ex} cy={ey} r="5"
            fill="#1D9BF0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx={ex} cy={ey} r="2.5"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          />
        </g>
      )}
    </svg>
  );
}

// ── Main Card ───────────────────────────────────────────────────────────────
export default function CaseStudyCard({ cs, delay = 0 }: { cs: CaseStudy; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const chartData = useMemo(() => makeData(cs.before.leads, cs.after.leads), [cs.before.leads, cs.after.leads]);

  const stats = [
    {
      label: "Leads / mo",
      before: cs.before.leads,
      after: cs.after.leads,
      fmt: (v: number) => String(v),
      lower: false,
    },
    {
      label: "Cost per lead",
      before: cs.before.cpl,
      after: cs.after.cpl,
      fmt: (v: number) => `$${v}`,
      lower: true,
    },
    {
      label: "ROAS",
      before: cs.before.roas,
      after: cs.after.roas,
      fmt: (v: number) => `${v}x`,
      lower: false,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/[0.06] bg-[#111318] overflow-hidden"
    >
      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-4 px-7 py-5 border-b border-white/[0.06]">
        <div>
          <p className="flex items-center gap-1 text-white/30 text-[10px] uppercase tracking-widest mb-1.5">
            <MapPin size={9} />
            {cs.location} · {cs.timeframe}
          </p>
          <h3 className="font-display text-2xl font-black text-white leading-none">{cs.industry}</h3>
        </div>
        <span className="shrink-0 mt-1 px-3 py-1.5 rounded-full bg-[#1D9BF0]/10 text-[#7DD3FC] text-xs font-semibold border border-[#1D9BF0]/20">
          ${cs.adSpend} ad spend
        </span>
      </div>

      {/* ── Stats + Chart ── */}
      <div className="grid md:grid-cols-[5fr_7fr]">
        {/* Stats column */}
        <div className="grid grid-rows-3 divide-y divide-white/[0.05] border-b md:border-b-0 md:border-r border-white/[0.05]">
          {stats.map((s, i) => {
            const pct = s.lower
              ? Math.round(((s.before - s.after) / s.before) * 100)
              : Math.round(((s.after - s.before) / s.before) * 100);
            const barStart = s.lower
              ? Math.round((s.after / s.before) * 100)
              : Math.round((s.before / s.after) * 100);

            return (
              <div key={s.label} className="px-6 py-4">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">{s.label}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-3xl font-black text-white leading-none">
                    {s.fmt(s.after)}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400">
                    {s.lower ? "−" : "+"}{pct}%
                  </span>
                </div>
                <p className="text-white/25 text-[11px] mb-3">was {s.fmt(s.before)}</p>
                {/* Animated progress bar */}
                <div className="h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[#1D9BF0]"
                    initial={{ width: `${barStart}%` }}
                    animate={inView ? { width: "100%" } : { width: `${barStart}%` }}
                    transition={{
                      duration: 1.2,
                      delay: delay + 0.35 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart column */}
        <div className="px-6 py-5 flex flex-col">
          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">
            Lead volume — 90 days
          </p>
          <div className="flex-1 min-h-[130px]">
            <Chart vals={chartData} inView={inView} />
          </div>
        </div>
      </div>

      {/* ── Quote ── */}
      <div className="flex gap-4 px-7 py-5 border-t border-white/[0.06]">
        <div className="w-px shrink-0 bg-gradient-to-b from-[#1D9BF0]/50 to-transparent rounded-full" />
        <div>
          <p className="font-display italic text-white/65 text-base leading-snug">
            "{cs.quote}"
          </p>
          <p className="text-white/25 text-xs mt-2">— [CLIENT NAME], {cs.industry}</p>
        </div>
      </div>
    </motion.div>
  );
}
