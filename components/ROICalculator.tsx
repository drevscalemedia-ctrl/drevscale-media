"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { INDUSTRIES } from "@/lib/content";
import Link from "next/link";

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState(600);
  const [industryIdx, setIndustryIdx] = useState(0);
  const [customerValue, setCustomerValue] = useState(500);

  const industry = INDUSTRIES[industryIdx];

  const results = useMemo(() => {
    const leadsPerMonth = Math.round(adSpend / industry.cpl);
    const conversionRate = 0.15;
    const customersPerMonth = Math.round(leadsPerMonth * conversionRate);
    const revenuePerMonth = customersPerMonth * customerValue;
    const revenueYear = revenuePerMonth * 12;
    const roi = ((revenueYear - adSpend * 12) / (adSpend * 12)) * 100;
    return { leadsPerMonth, customersPerMonth, revenuePerMonth, revenueYear, roi, cpl: industry.cpl };
  }, [adSpend, industry, customerValue]);

  const chartData = [
    { name: "Ad Spend (yr)", value: adSpend * 12, fill: "#D4C4B0" },
    { name: "Revenue Impact", value: results.revenueYear, fill: "#C8522A" },
  ];

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-3">ROI Calculator</p>
          <h2 className="font-display text-5xl font-black text-[#1C1F2E] leading-tight">
            What could your ads<br /><em className="not-italic text-[#C8522A]">actually</em> be worth?
          </h2>
          <p className="text-[#7A6E65] mt-3 text-lg max-w-xl">Adjust the sliders below to see estimated projections for your business. These are benchmarks — not guarantees.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-[#1C1F2E] mb-3">
                Monthly Ad Spend: <span className="text-[#C8522A]">${adSpend.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min={400}
                max={2000}
                step={50}
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-[#D4C4B0] accent-[#C8522A] cursor-pointer"
                aria-label="Monthly ad spend"
              />
              <div className="flex justify-between text-xs text-[#7A6E65] mt-1"><span>$400</span><span>$2,000</span></div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1C1F2E] mb-3">Industry</label>
              <select
                value={industryIdx}
                onChange={(e) => setIndustryIdx(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[#D4C4B0] bg-[#F5EFE3] text-[#1C1F2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#C8522A]/30"
              >
                {INDUSTRIES.map((ind, i) => (
                  <option key={ind.name} value={i}>{ind.icon} {ind.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1C1F2E] mb-3">
                Avg. Customer Value: <span className="text-[#C8522A]">${customerValue.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={customerValue}
                onChange={(e) => setCustomerValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-[#D4C4B0] accent-[#C8522A] cursor-pointer"
                aria-label="Average customer value"
              />
              <div className="flex justify-between text-xs text-[#7A6E65] mt-1"><span>$100</span><span>$5,000</span></div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Leads / Month", value: results.leadsPerMonth, suffix: " leads" },
                { label: "Cost Per Lead", value: results.cpl, prefix: "$" },
                { label: "New Customers / Mo", value: results.customersPerMonth, suffix: " customers" },
                { label: "12-Month Revenue Impact", value: results.revenueYear, prefix: "$", big: true },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  layout
                  className={`p-5 rounded-2xl border border-[#D4C4B0] bg-white ${stat.big ? "col-span-2" : ""}`}
                >
                  <p className="text-xs text-[#7A6E65] uppercase tracking-wider mb-1">{stat.label}</p>
                  <motion.p
                    key={String(stat.value)}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`font-display font-black text-[#1C1F2E] ${stat.big ? "text-4xl text-[#C8522A]" : "text-2xl"}`}
                  >
                    {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap="30%">
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#7A6E65" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#7A6E65" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, ""]} contentStyle={{ borderRadius: 12, border: "1px solid #D4C4B0", fontSize: 12 }} />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs text-[#7A6E65]/70 italic">
              Estimates based on industry benchmarks. Assumes ~15% lead-to-customer conversion. Actual results vary.
            </p>

            <Link
              href="/contact"
              className="block w-full text-center py-4 rounded-full bg-[#C8522A] text-white font-bold hover:bg-[#A8432A] transition-colors"
            >
              Lock these numbers in — book a call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
