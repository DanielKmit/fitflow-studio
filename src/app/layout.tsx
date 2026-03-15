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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <body className="font-sans bg-cream text-sage antialiased">
        {children}
      </body>
    </html>
  );
}
