"use client";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Quote } from "lucide-react";

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

function generateGrowthData(before: number, after: number) {
  return Array.from({ length: 13 }, (_, i) => ({
    week: `Wk ${i + 1}`,
    leads: Math.round(before + ((after - before) * Math.pow(i / 12, 1.4)) + (Math.random() - 0.5) * 1.5),
  }));
}

export default function CaseStudyCard({ cs, delay = 0 }: { cs: CaseStudy; delay?: number }) {
  const chartData = generateGrowthData(cs.before.leads, cs.after.leads);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-3xl border border-[#CBD5E1] bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#1C1F2E] px-8 py-6 flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl font-black text-white">{cs.industry}</h3>
          <p className="text-white/40 text-sm mt-1">📍 {cs.location} · {cs.timeframe}</p>
        </div>
        <span className="px-3 py-1.5 rounded-full bg-[#4A90D9]/20 text-[#93BCED] text-xs font-semibold">
          ${cs.adSpend} ad spend
        </span>
      </div>

      {/* Before / After metrics */}
      <div className="grid grid-cols-3 divide-x divide-[#CBD5E1] border-b border-[#CBD5E1]">
        {[
          { label: "Leads/Month", before: `${cs.before.leads}`, after: `${cs.after.leads}` },
          { label: "Cost Per Lead", before: `$${cs.before.cpl}`, after: `$${cs.after.cpl}` },
          { label: "ROAS", before: `${cs.before.roas}x`, after: `${cs.after.roas}x` },
        ].map((m) => (
          <div key={m.label} className="p-5 text-center">
            <p className="text-[#64748B] text-xs uppercase tracking-wider mb-2">{m.label}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#64748B] line-through text-sm">{m.before}</span>
              <span className="text-[#4A90D9]">→</span>
              <span className="font-display text-2xl font-black text-[#1C1F2E]">{m.after}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-8 pt-6 pb-2">
        <p className="text-xs text-[#64748B] uppercase tracking-wider mb-3">Lead volume over 90 days</p>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="week" tick={{ fontSize: 9, fill: "#64748B" }} axisLine={false} tickLine={false} interval={2} />
              <YAxis tick={{ fontSize: 9, fill: "#64748B" }} axisLine={false} tickLine={false} width={24} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 11 }} />
              <Line type="monotone" dataKey="leads" stroke="#4A90D9" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary + quote */}
      <div className="px-8 pb-8">
        <p className="text-[#64748B] text-sm leading-relaxed mb-5">{cs.summary}</p>
        <div className="p-5 rounded-2xl bg-[#F1F5F9] border border-[#CBD5E1]">
          <Quote size={16} className="text-[#4A90D9] mb-2 opacity-60" />
          <p className="font-display italic text-[#1C1F2E] text-lg">"{cs.quote}"</p>
          <p className="text-[#64748B] text-xs mt-2">— [CLIENT NAME], {cs.industry}</p>
        </div>
      </div>
    </motion.div>
  );
}
