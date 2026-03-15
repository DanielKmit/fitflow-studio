"use client";

import { ReactNode, useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "initial" = SSR/first render, no inline styles → CSS defaults to opacity:1 (visible)
  // "hidden" = below fold, waiting for scroll
  // "visible" = animated in
  const [state, setState] = useState<"initial" | "hidden" | "visible">("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setState("visible");
      return;
    }

    // If already near viewport, show immediately (no animation for above-fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setState("visible");
      return;
    }

    // Below fold: hide and set up scroll-triggered animation
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);

    // Safety fallback: ensure content is visible within 5s
    const timer = setTimeout(() => setState("visible"), 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const transforms: Record<string, string> = {
    up: "translateY(30px)",
    down: "translateY(-30px)",
    left: "translateX(30px)",
    right: "translateX(-30px)",
  };

  const style: React.CSSProperties =
    state === "hidden"
      ? {
          opacity: 0,
          transform: transforms[direction] || transforms.up,
          transition: "none",
        }
      : state === "visible"
        ? {
            opacity: 1,
            transform: "none",
            transition: `opacity 0.6s cubic-bezier(0.25,0.4,0.25,1) ${delay}s, transform 0.6s cubic-bezier(0.25,0.4,0.25,1) ${delay}s`,
          }
        : {}; // "initial" — no inline styles, CSS shows content by default

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
