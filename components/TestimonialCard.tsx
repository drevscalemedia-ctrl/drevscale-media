import Avatar from "./Avatar";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[360px] min-h-[196px] rounded-2xl border border-white/[0.08] bg-[#1a1d24] p-6 flex flex-col gap-3 cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.2]">
      {/* Typographic open-quote */}
      <span
        aria-hidden="true"
        className="leading-none select-none block"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 56,
          lineHeight: 0.75,
          color: "rgba(196, 113, 74, 0.55)",
        }}
      >
        {"“"}
      </span>

      {/* Quote text */}
      <p className="text-[#E8E4DC] text-[15px] leading-relaxed flex-1">
        {testimonial.quote}
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/[0.07] mt-auto">
        <Avatar name={testimonial.name} color={testimonial.avatarColor} size={38} />
        <div className="min-w-0">
          <p className="font-semibold text-[#E8E4DC] text-sm leading-tight truncate">{testimonial.name}</p>
          <p className="text-white/40 text-xs leading-tight truncate mt-0.5">
            {testimonial.business} · {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
