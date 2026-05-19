import { Building2, Dumbbell, Stethoscope, Wrench, UtensilsCrossed, Car, Home, Sparkles } from "lucide-react";

const items = [
  { icon: Stethoscope, label: "Dental Practices" },
  { icon: Sparkles, label: "Med Spas" },
  { icon: Dumbbell, label: "Gyms & Fitness" },
  { icon: Wrench, label: "HVAC & Home Services" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Home, label: "Real Estate" },
  { icon: Car, label: "Auto Repair" },
  { icon: Building2, label: "Local Businesses" },
];

export default function SocialProofBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#1C1F2E] py-5 overflow-hidden">
      <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-4">
        Trusted by local businesses across Phoenix, AZ
      </p>
      <div className="flex animate-marquee" aria-hidden="true">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-2 mx-8 text-white/40 whitespace-nowrap flex-shrink-0">
              <Icon size={16} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
