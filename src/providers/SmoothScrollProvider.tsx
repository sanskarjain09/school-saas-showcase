"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register plugin outside the component lifecycle
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/** Wires Lenis smooth scrolling into GSAP's ScrollTrigger ticker so animations stay in sync. */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // 1. Accessibility: Respect user's OS motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 2. Initialize Lenis with premium SaaS easing
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // 3. Keep ScrollTrigger perfectly in sync with Lenis's virtual scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Hook Lenis's RequestAnimationFrame (RAF) to GSAP's core ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // 5. CRITICAL CLEANUP: Prevents GSAP ticker memory leaks in Next.js Strict Mode
    return () => {
      gsap.ticker.remove(update); // Dettach GSAP ticker
      lenis.destroy();            // Destroy Lenis instance
    };
  }, []);

  return <>{children}</>;
}