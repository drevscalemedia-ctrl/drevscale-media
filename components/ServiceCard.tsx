"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Megaphone, Globe } from "lucide-react";
import { FACEBOOK_ADS_INCLUDES, WEB_DESIGN_INCLUDES, PRICING } from "@/lib/content";
import Link from "next/link";

interface Props {
  type: "facebook" | "web";
}

export default function ServiceCard({ type }: Props) {
  const [hovered, setHovered] = useState(false);

  const isFb = type === "facebook";
  const Icon = isFb ? Megaphone : Globe;
  const title = isFb ? "Facebook Ads Management" : "Website Design & Hosting";
  const desc = isFb
    ? "Done-for-you campaigns. We build, run, optimize, and report every month. You answer the leads."
    : "Clean, mobile-first sites built to convert visitors into customers. Fast, affordable, maintained.";
  const items = isFb ? FACEBOOK_ADS_INCLUDES : WEB_DESIGN_INCLUDES;
  const price = isFb ? `${PRICING.fbAds.managementRange} + ad spend` : `${PRICING.web.hostingRange} hosting`;
  const href = isFb ? "/services#facebook-ads" : "/services#web-design";

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative p-8 rounded-3xl bg-white shadow-xl shadow-black/[0.06] overflow-hidden cursor-default"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-[#1C1F2E]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${hovered ? "bg-[#1D9BF0]" : "bg-[#F1F5F9]"}`}>
          <Icon size={24} className={hovered ? "text-white" : "text-[#1D9BF0]"} />
        </div>

        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 transition-colors duration-300 ${hovered ? "text-[#7DD3FC]" : "text-[#1D9BF0]"}`}>
          {isFb ? "Primary Service" : "Add-on Service"}
        </p>

        <h3 className={`font-display text-3xl font-black mb-3 leading-tight transition-colors duration-300 ${hovered ? "text-white" : "text-[#1C1F2E]"}`}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${hovered ? "text-white/60" : "text-[#64748B]"}`}>
          {desc}
        </p>

        <AnimatePresence>
          {hovered && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 mb-6 overflow-hidden"
            >
              {items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-[#7DD3FC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white text-sm font-semibold">{item.title}</span>
                    <span className="text-white/50 text-xs ml-2">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <div>
            <p className={`text-xs uppercase tracking-wider mb-1 transition-colors duration-300 ${hovered ? "text-white/40" : "text-[#64748B]"}`}>Starting from</p>
            <p className={`font-bold text-lg transition-colors duration-300 ${hovered ? "text-[#7DD3FC]" : "text-[#1C1F2E]"}`}>{price}</p>
          </div>
          <Link
            href={href}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              hovered
                ? "bg-[#1D9BF0] text-white hover:bg-[#0F85D0]"
                : "border border-[#CBD5E1] text-[#1C1F2E] hover:border-[#1D9BF0]"
            }`}
          >
            Learn more
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
