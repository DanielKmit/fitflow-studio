import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitFlow Studio — Yoga & Wellness",
  description:
    "Find your flow. Transform your practice. Premium yoga classes in a serene studio environment.",
  openGraph: {
    title: "FitFlow Studio — Yoga & Wellness",
    description: "Find your flow. Transform your practice. Premium yoga classes in a serene studio environment.",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "FitFlow Studio — Yoga" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "FitFlow Studio",
  description: "Premium yoga and wellness studio offering Vinyasa, Hatha, Yin, and meditation classes.",
  url: "https://fitflow-studio.vercel.app",
  sport: "Yoga",
  event: [
    { "@type": "Event", name: "Sunrise Vinyasa", description: "60 min all-levels vinyasa flow", startDate: "2026-01-01T06:30", duration: "PT60M" },
    { "@type": "Event", name: "Power Flow", description: "75 min intermediate power yoga", startDate: "2026-01-01T08:00", duration: "PT75M" },
    { "@type": "Event", name: "Candlelight Yin", description: "60 min all-levels yin yoga", startDate: "2026-01-01T19:00", duration: "PT60M" },
  ],
  offers: [
    { "@type": "Offer", name: "Drop-in", price: "18", priceCurrency: "EUR", description: "Single class" },
    { "@type": "Offer", name: "Flow Pass (10 classes)", price: "140", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Unlimited Monthly", price: "89", priceCurrency: "EUR" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <body className="font-sans bg-cream text-sage antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
