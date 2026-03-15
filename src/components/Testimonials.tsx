"use client";

import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "FitFlow completely changed my relationship with yoga. The instructors genuinely care about your progress, and the studio space itself feels like a sanctuary.",
    name: "Sophie Laurent",
    detail: "Member since 2023",
  },
  {
    quote:
      "I came for the fitness benefits but stayed for the community. Marcus's Power Flow class is the highlight of my week. Best investment in my health I've ever made.",
    name: "Thomas Novák",
    detail: "Unlimited Member",
  },
  {
    quote:
      "As a complete beginner, I was nervous walking in. Aisha's gentle approach made me feel welcome from day one. Two years later, yoga is a non-negotiable part of my life.",
    name: "Maria Fernandez",
    detail: "Member since 2022",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-sage">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              What Our Community Says
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <FadeIn key={t.name} delay={index * 0.12}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full flex flex-col">
                {/* Quote mark */}
                <span className="text-gold/60 font-serif text-6xl leading-none mb-4">
                  &ldquo;
                </span>
                <p className="text-white/85 text-sm leading-relaxed flex-1 -mt-4">
                  {t.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-mint text-xs mt-0.5">{t.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
