"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";

interface Field {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}

const fields: Field[] = [
  { id: "name", label: "Your Name", required: true },
  { id: "business", label: "Business Name", required: true },
  { id: "phone", label: "Phone Number", required: true },
  { id: "email", label: "Email Address", type: "email", required: true },
];

export default function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [industry, setIndustry] = useState("");
  const [revenue, setRevenue] = useState("");
  const [helpWith, setHelpWith] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name?.trim()) e.name = "Required";
    if (!values.business?.trim()) e.business = "Required";
    if (!values.phone?.trim()) e.phone = "Required";
    if (!values.email?.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl border border-[#CBD5E1] bg-[#F1F5F9]"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
          <CheckCircle2 size={56} className="text-[#1D9BF0] mb-6" />
        </motion.div>
        <h3 className="font-display text-3xl font-black text-[#1C1F2E] mb-2">You're on the calendar.</h3>
        <p className="text-[#64748B]">Carter will reach out within 4 hours to confirm your call time.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        {fields.map((f) => (
          <FloatingField
            key={f.id}
            id={f.id}
            label={f.label}
            type={f.type || "text"}
            value={values[f.id] || ""}
            error={errors[f.id]}
            onChange={(v) => setValues({ ...values, [f.id]: v })}
          />
        ))}
      </div>

      <div className="relative">
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full px-4 pt-6 pb-2.5 rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] text-[#1C1F2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9BF0]/30 appearance-none"
        >
          <option value="">Select your industry</option>
          {INDUSTRIES.map((i) => <option key={i.name} value={i.name}>{i.name}</option>)}
          <option value="Other">Other</option>
        </select>
        <label className="absolute left-4 top-2 text-xs text-[#64748B] font-medium">Industry</label>
      </div>

      <div className="relative">
        <select
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="w-full px-4 pt-6 pb-2.5 rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] text-[#1C1F2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9BF0]/30 appearance-none"
        >
          <option value="">Select a range</option>
          <option>Under $10k/month</option>
          <option>$10k–$30k/month</option>
          <option>$30k–$100k/month</option>
          <option>$100k+/month</option>
        </select>
        <label className="absolute left-4 top-2 text-xs text-[#64748B] font-medium">Monthly Revenue</label>
      </div>

      <div className="relative">
        <select
          value={helpWith}
          onChange={(e) => setHelpWith(e.target.value)}
          className="w-full px-4 pt-6 pb-2.5 rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] text-[#1C1F2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9BF0]/30 appearance-none"
        >
          <option value="">What do you need help with?</option>
          <option>Facebook Ads Management</option>
          <option>Website Design & Hosting</option>
          <option>Both — Ads + Website</option>
          <option>Not sure yet</option>
        </select>
        <label className="absolute left-4 top-2 text-xs text-[#64748B] font-medium">I Need Help With</label>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full bg-[#1D9BF0] text-white font-bold hover:bg-[#0F85D0] transition-colors active:scale-98"
      >
        Request a Free Strategy Call →
      </button>
      <p className="text-center text-xs text-[#64748B]/60">We respond within 1 business day. No spam, ever.</p>
    </form>
  );
}

function FloatingField({ id, label, type, value, error, onChange }: {
  id: string; label: string; type: string; value: string; error?: string; onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 pt-6 pb-2.5 rounded-xl border bg-[#FFFFFF] text-[#1C1F2E] text-sm focus:outline-none focus:ring-2 transition-all ${
          error ? "border-red-400 focus:ring-red-300/30" : "border-[#CBD5E1] focus:ring-[#1D9BF0]/30"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          raised ? "top-2 text-xs text-[#1D9BF0] font-medium" : "top-4 text-sm text-[#64748B]"
        }`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
}
