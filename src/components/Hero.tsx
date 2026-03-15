"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=80&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-sage-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-2 tracking-wide">
            FitFlow
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-gold-light font-light tracking-widest uppercase mb-8">
            Studio
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Find your flow. Transform your practice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-block bg-gold text-sage-dark font-semibold px-8 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300"
          >
            Book Your First Class Free
          </a>
          <a
            href="#classes"
            className="inline-block border border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors duration-300"
          >
            View Schedule
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
