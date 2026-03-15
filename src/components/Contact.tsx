"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-cream-dark">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Start Your Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-sage mb-4">
              Book Your First Class Free
            </h2>
            <p className="text-sage/60 max-w-lg mx-auto">
              New to FitFlow? Experience the studio with a complimentary class.
              No commitment required — just come as you are.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-mint/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-sage/70 mb-2 uppercase tracking-wider"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    placeholder="Your first name"
                    className="w-full px-5 py-3.5 rounded-xl border border-mint/20 bg-cream/50 text-sage placeholder:text-sage/30 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-sage/70 mb-2 uppercase tracking-wider"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    placeholder="Your last name"
                    className="w-full px-5 py-3.5 rounded-xl border border-mint/20 bg-cream/50 text-sage placeholder:text-sage/30 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-sage/70 mb-2 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 rounded-xl border border-mint/20 bg-cream/50 text-sage placeholder:text-sage/30 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage/30 transition-all duration-300"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="interest"
                  className="block text-sm font-semibold text-sage/70 mb-2 uppercase tracking-wider"
                >
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  className="w-full px-5 py-3.5 rounded-xl border border-mint/20 bg-cream/50 text-sage focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage/30 transition-all duration-300 appearance-none"
                >
                  <option>Vinyasa Flow</option>
                  <option>Power Yoga</option>
                  <option>Yin & Restorative</option>
                  <option>Meditation & Breathwork</option>
                  <option>Not sure yet — surprise me!</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-sage text-white font-semibold py-4 rounded-full text-sm uppercase tracking-widest hover:bg-sage-light transition-colors duration-300"
              >
                Book My Free Class
              </motion.button>

              <p className="text-center text-sage/40 text-xs mt-4">
                No spam. Just yoga. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 shadow-sm border border-mint/10 text-center"
            >
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="font-serif text-2xl text-sage mb-2">
                Namaste! You&apos;re all set.
              </h3>
              <p className="text-sage/60">
                Check your inbox for your free class confirmation. We can&apos;t wait
                to welcome you to the studio.
              </p>
            </motion.div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
