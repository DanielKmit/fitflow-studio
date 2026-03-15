"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

type TimeOfDay = "morning" | "afternoon" | "evening";

interface ClassItem {
  name: string;
  time: string;
  instructor: string;
  level: string;
  duration: string;
}

const schedule: Record<TimeOfDay, ClassItem[]> = {
  morning: [
    { name: "Sunrise Vinyasa", time: "6:30 AM", instructor: "Elena", level: "All Levels", duration: "60 min" },
    { name: "Power Flow", time: "8:00 AM", instructor: "Marcus", level: "Intermediate", duration: "75 min" },
    { name: "Gentle Hatha", time: "9:30 AM", instructor: "Aisha", level: "Beginner", duration: "60 min" },
    { name: "Prenatal Yoga", time: "10:30 AM", instructor: "Elena", level: "All Levels", duration: "60 min" },
  ],
  afternoon: [
    { name: "Yin Yoga", time: "12:00 PM", instructor: "Aisha", level: "All Levels", duration: "75 min" },
    { name: "Ashtanga Primary", time: "1:30 PM", instructor: "Marcus", level: "Advanced", duration: "90 min" },
    { name: "Restorative Flow", time: "3:00 PM", instructor: "Elena", level: "Beginner", duration: "60 min" },
  ],
  evening: [
    { name: "Dynamic Vinyasa", time: "5:30 PM", instructor: "Marcus", level: "Intermediate", duration: "75 min" },
    { name: "Candlelight Yin", time: "7:00 PM", instructor: "Aisha", level: "All Levels", duration: "60 min" },
    { name: "Meditation & Breathwork", time: "8:15 PM", instructor: "Elena", level: "All Levels", duration: "45 min" },
  ],
};

const tabs: { key: TimeOfDay; label: string; icon: string }[] = [
  { key: "morning", label: "Morning", icon: "🌅" },
  { key: "afternoon", label: "Afternoon", icon: "☀️" },
  { key: "evening", label: "Evening", icon: "🌙" },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-mint/30 text-sage",
  "All Levels": "bg-gold/20 text-gold-dark",
  Intermediate: "bg-sage/10 text-sage",
  Advanced: "bg-sage text-white",
};

export default function ClassSchedule() {
  const [activeTab, setActiveTab] = useState<TimeOfDay>("morning");

  return (
    <section id="classes" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Weekly Schedule
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-sage">
              Find Your Practice
            </h2>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-cream-dark rounded-full p-1.5 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-sage/60 hover:text-sage"
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-sage rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab.icon} {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Class list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="space-y-4"
          >
            {schedule[activeTab].map((cls, index) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg transition-shadow duration-300 border border-mint/10"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-sage mb-1">
                    {cls.name}
                  </h3>
                  <p className="text-sage/60 text-sm">
                    with {cls.instructor} · {cls.duration}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      levelColors[cls.level] || "bg-mint/20 text-sage"
                    }`}
                  >
                    {cls.level}
                  </span>
                  <span className="text-sage font-semibold text-sm min-w-[80px] text-right">
                    {cls.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
