"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
}

/** Splits multi-line headlines into per-line masked reveal animations. */
export function RevealText({ lines, className, lineClassName }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const rows = ref.current.querySelectorAll("[data-line-inner]");
      gsap.from(rows, {
        yPercent: 110,
        opacity: 0,
        duration: ANIMATION.durationLong,
        ease: ANIMATION.ease,
        stagger: ANIMATION.stagger * 1.5,
        delay: 0.15,
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <span data-line-inner className={cn("block", lineClassName)}>
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}
