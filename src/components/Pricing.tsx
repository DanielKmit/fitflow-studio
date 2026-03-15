"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Drop-in",
    price: "€15",
    period: "per class",
    description: "Perfect for trying us out",
    features: [
      "Access to any single class",
      "Mat & props provided",
      "Changing rooms & showers",
      "Herbal tea after class",
    ],
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "€89",
    period: "per month",
    description: "Most popular for regulars",
    features: [
      "8 classes per month",
      "Mat & props provided",
      "Changing rooms & showers",
      "10% shop discount",
      "Guest pass (1/month)",
      "Online class recordings",
    ],
    highlighted: true,
  },
  {
    name: "Unlimited",
    price: "€149",
    period: "per month",
    description: "For the dedicated practitioner",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Free workshops & events",
      "20% shop discount",
      "Guest passes (3/month)",
      "1-on-1 quarterly review",
      "Online class recordings",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Membership
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-sage">
              Simple, Transparent Pricing
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-8 md:p-10 relative ${
                  plan.highlighted
                    ? "bg-sage text-white shadow-xl scale-[1.02]"
                    : "bg-white border border-mint/15 shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-sage-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`font-serif text-2xl font-medium mb-2 ${
                      plan.highlighted ? "text-white" : "text-sage"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? "text-mint-light" : "text-sage/50"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-5xl font-serif font-semibold ${
                        plan.highlighted ? "text-gold-light" : "text-sage"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-mint-light" : "text-sage/50"
                      }`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        plan.highlighted ? "text-white/85" : "text-sage/70"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-gold-light" : "text-gold"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gold text-sage-dark hover:bg-gold-light"
                      : "bg-sage/5 text-sage hover:bg-sage hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
