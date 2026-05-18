export default function Logo({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#FFFFFF" : "#1E2330";
  const subColor = dark ? "rgba(255,255,255,0.6)" : "#1E2330";

  return (
    <svg width="160" height="44" viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Growth chart arrow above the v */}
      <polyline
        points="72,14 78,8 84,11 90,4"
        stroke={textColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="87,4 90,4 90,7"
        stroke={textColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* drevscale text — using foreignObject for font rendering */}
      <text
        x="0"
        y="32"
        fontFamily="var(--font-geist-sans), -apple-system, Arial, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-0.5"
        fill={textColor}
      >
        dre
      </text>
      <text
        x="52"
        y="32"
        fontFamily="var(--font-geist-sans), -apple-system, Arial, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="#1D9BF0"
      >
        v
      </text>
      <text
        x="67"
        y="32"
        fontFamily="var(--font-geist-sans), -apple-system, Arial, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-0.5"
        fill={textColor}
      >
        scale
      </text>
      {/* MEDIA subtext */}
      <text
        x="80"
        y="44"
        fontFamily="var(--font-geist-sans), -apple-system, Arial, sans-serif"
        fontWeight="600"
        fontSize="9"
        letterSpacing="4"
        fill={subColor}
        textAnchor="middle"
      >
        MEDIA
      </text>
    </svg>
  );
}
