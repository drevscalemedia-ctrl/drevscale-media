interface AvatarProps {
  name: string;
  color: string;
  size?: number;
}

function getInitials(name: string): string {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.|Prof\.)\s+/i, "");
  const parts = cleaned.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}

export default function Avatar({ name, color, size = 40 }: AvatarProps) {
  return (
    <div
      aria-hidden="true"
      className="flex-shrink-0 rounded-full flex items-center justify-center select-none font-bold text-white/90"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.36,
        fontFamily: "var(--font-geist-sans), -apple-system, sans-serif",
        letterSpacing: "0.03em",
      }}
    >
      {getInitials(name)}
    </div>
  );
}
