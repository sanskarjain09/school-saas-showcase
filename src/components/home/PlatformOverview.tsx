"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function PlatformOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isInteracting) return;
    
    let animationId: number;
    let direction = 1;

    const scroll = () => {
      if (window.innerWidth >= 1024) return;
      
      el.scrollLeft += direction * 0.4;
      
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        direction = -1;
      } else if (el.scrollLeft <= 1) {
        direction = 1;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    // Small delay before auto-scrolling starts
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isInteracting]);

  return (
    <Section id="platform-overview" className="overflow-hidden pt-section-sm pb-0 lg:py-section-lg bg-background border-t border-border">
      <Container>
        {/* Grid gap ko bada kiya taaki dono sides ko saans lene ki jagah mile */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Side: Text Content (max-w-2xl kar diya taaki compressed na lage) */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            
            {/* Clean Eyebrow */}
            <p className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
              Platform Overview
            </p>

            {/* Google-Style Large Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
              Every Module. Every Workflow. Everything Connected.
            </h2>
            
            {/* Clean Description Text */}
            <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed">
              Eliminate data silos with a unified ecosystem designed specifically for modern educational institutions. Seamlessly bridge administration, academics, and student success.
            </p>
          
            {/* Pill-shaped Secondary CTA Button */}
            <div className="mt-10 flex w-full sm:w-auto">
              <Button href="/features" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore All Modules <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>

          {/* Right Side: Large, Scrollable Image on Mobile */}
          <div className="relative flex w-full justify-center lg:justify-end -mb-16 lg:mb-0">
            <div 
              ref={scrollRef}
              className="w-[100vw] overflow-x-auto overflow-y-visible lg:overflow-visible flex items-center scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onTouchStart={() => setIsInteracting(true)}
              onTouchEnd={() => { setTimeout(() => setIsInteracting(false), 2000) }}
            >
              {/* Force image to be wide on mobile to enable scrolling */}
              <div className="relative w-[150%] sm:w-[130%] shrink-0 lg:w-full aspect-[1.2] lg:aspect-[16/10] flex items-center justify-center pl-4 lg:pl-0">
                <Image
                  src="/images/heroOne.png"
                  alt="JINANAM Campus Platform Overview"
                  fill
                  className="object-contain w-full h-full drop-shadow-2xl origin-center lg:scale-[1.4] pointer-events-none"
                />
                
                {/* Subtle Semantic Glow */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                  <div className="h-64 w-64 lg:h-96 lg:w-96 rounded-full bg-accent/10 blur-[140px]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}