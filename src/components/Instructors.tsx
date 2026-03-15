"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const instructors = [
  {
    name: "Elena Petrova",
    specialty: "Vinyasa & Restorative",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80&auto=format",
    bio: "With over 15 years of practice and a 500-hour RYT certification, Elena brings warmth and precision to every class. Her flowing sequences build strength while cultivating inner calm.",
    certifications: "E-RYT 500, YACEP",
  },
  {
    name: "Marcus Chen",
    specialty: "Power & Ashtanga",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&q=80&auto=format",
    bio: "A former athlete turned dedicated yogi, Marcus specializes in dynamic, strength-building practices. His classes challenge the body while emphasizing mindful movement and proper alignment.",
    certifications: "RYT 500, Anatomy Certified",
  },
  {
    name: "Aisha Williams",
    specialty: "Yin & Meditation",
    image: "https://images.unsplash.com/photo-1609592806596-004015d0a38d?w=600&q=80&auto=format",
    bio: "Aisha's gentle approach to yoga integrates mindfulness and breathwork into every session. Trained in both Eastern and Western modalities, she creates deeply healing experiences.",
    certifications: "RYT 200, Mindfulness Teacher",
  },
];

function InstructorCard({
  instructor,
  index,
}: {
  instructor: (typeof instructors)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.15}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[3/4]"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${instructor.image}')` }}
        />

        {/* Default overlay - name & specialty */}
        <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="font-serif text-2xl text-white font-medium mb-1">
            {instructor.name}
          </h3>
          <p className="text-gold-light text-sm font-semibold uppercase tracking-wider">
            {instructor.specialty}
          </p>
        </div>

        {/* Hover overlay - bio */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-sage-dark/90 flex flex-col justify-center items-center p-8 text-center"
        >
          <h3 className="font-serif text-2xl text-white font-medium mb-2">
            {instructor.name}
          </h3>
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            {instructor.specialty}
          </p>
          <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-xs">
            {instructor.bio}
          </p>
          <span className="text-mint text-xs font-semibold tracking-wider uppercase">
            {instructor.certifications}
          </span>
        </motion.div>
      </motion.div>
    </FadeIn>
  );
}

export default function Instructors() {
  return (
    <section id="instructors" className="py-24 md:py-32 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Our Team
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-sage">
              Meet Your Instructors
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, i) => (
            <InstructorCard key={instructor.name} instructor={instructor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
