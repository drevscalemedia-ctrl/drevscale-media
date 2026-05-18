import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Drevscale Media | Facebook Ads & Web Design — Fountain Hills, AZ",
  description: "Drevscale Media helps local businesses in Fountain Hills and Scottsdale, AZ get more leads through professional Facebook advertising and website design. Owner-operated. Transparent pricing.",
  keywords: "Facebook ads Fountain Hills AZ, Facebook advertising Scottsdale, local business marketing Arizona, web design Fountain Hills",
  openGraph: {
    title: "Drevscale Media | Facebook Ads for Local Businesses",
    description: "Done-for-you Facebook ads and web design for small businesses in Fountain Hills & Scottsdale, AZ.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Drevscale Media",
  description: "Facebook ads management and website design for local businesses in Fountain Hills and Scottsdale, AZ.",
  telephone: "+15722727819",
  email: "drevscalemedia@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fountain Hills",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6064,
    longitude: -111.7175,
  },
  url: "https://drevscalemedia.com",
  priceRange: "$$",
  areaServed: ["Fountain Hills", "Scottsdale", "East Valley", "Arizona"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
