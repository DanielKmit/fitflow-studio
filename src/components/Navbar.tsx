"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#classes", label: "Classes" },
  { href: "#instructors", label: "Instructors" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Book Now" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="font-serif text-2xl font-semibold tracking-wide"
          >
            <span className={scrolled ? "text-sage" : "text-white"}>
              FitFlow
            </span>
            <span className={scrolled ? "text-gold" : "text-gold-light"}>
              {" "}Studio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-sage" : "text-white/90"
                } ${link.label === "Book Now" ? "bg-gold text-sage-dark px-5 py-2.5 rounded-full hover:bg-gold-light hover:text-sage-dark" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-sage" : "bg-white"
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/98 backdrop-blur-md border-t border-mint/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sage font-semibold text-sm uppercase tracking-wide hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
