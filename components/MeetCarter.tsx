"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/content";

export default function MeetCarter() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C1F2E] via-[#2d3348] to-[#C8522A]/40 flex items-end">
              {/* Portrait area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-white/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl">👤</span>
                  </div>
                  <p className="text-white/40 text-sm">Photo coming soon</p>
                </div>
              </div>
              {/* Name card overlay */}
              <div className="relative z-10 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-display text-3xl font-black text-white">{BRAND.owner}</p>
                <p className="text-white/60 text-sm">Founder & Owner, Drevscale Media</p>
              </div>
            </div>

            {/* Floating detail cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-4 top-8 bg-white rounded-2xl p-4 shadow-lg border border-[#D4C4B0]"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1F2E]">
                <MapPin size={14} className="text-[#C8522A]" />
                Fountain Hills, AZ
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -left-4 bottom-24 bg-white rounded-2xl p-4 shadow-lg border border-[#D4C4B0]"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1F2E]">
                <Clock size={14} className="text-[#C8522A]" />
                Replies within 4 hours
              </div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C8522A] font-semibold text-sm uppercase tracking-widest mb-4">Meet Your Marketer</p>
            <h2 className="font-display text-5xl font-black text-[#1C1F2E] leading-tight mb-6">
              You'll work with<br />Carter. <em className="not-italic text-[#C8522A]">Directly.</em>
            </h2>

            <div className="space-y-4 text-[#7A6E65] leading-relaxed mb-8">
              <p>I'm a Fountain Hills local. I know this market — the businesses, the community, and the kind of customer you're trying to reach. That's not something a big agency in Phoenix can replicate.</p>
              <p>I started Drevscale Media because I kept seeing great local businesses get burned by agencies that overpromised and disappeared. You deserved better.</p>
              <p>I work with a small number of clients on purpose — so I can give every account the attention it needs to actually perform.</p>
            </div>

            {/* Signature-style details */}
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: "Based in Fountain Hills — knows the local market cold" },
                { icon: Clock, text: "Responds within 4 hours — you'll never wonder what's happening" },
                { icon: MessageSquare, text: "You have Carter's direct number — not an account manager" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#1C1F2E]">
                  <div className="w-8 h-8 rounded-lg bg-[#F5EFE3] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#C8522A]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-[#1C1F2E] text-[#1C1F2E] hover:bg-[#1C1F2E] hover:text-white transition-colors"
            >
              Read Carter's story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
