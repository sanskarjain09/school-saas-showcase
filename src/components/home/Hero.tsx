"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Play, ArrowRight } from "lucide-react";

import { heroData } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { Counter } from "@/components/animations/Counter";
import { ANIMATION } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
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

    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isInteracting]);

  useGSAP(
    () => {
      // Fade in text elements
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 20,
        duration: ANIMATION.durationMedium,
        ease: ANIMATION.ease,
        stagger: ANIMATION.stagger,
        delay: 0.6,
      });

      // Float up mockups and images
      gsap.from("[data-hero-mockup]", {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: ANIMATION.durationLong,
        ease: ANIMATION.ease,
        delay: 0.4,
      });
    },
    { scope: sceneRef }
  );

  return (
    <section
      ref={sceneRef}
      className="relative overflow-hidden py-section-sm lg:py-section-lg bg-background"
    >
      {/* Background Elements (Subtle & Minimal) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1 opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2 opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="text-left flex flex-col items-start max-w-2xl">

            {/* Clean Eyebrow */}
            <div data-hero-fade>
              <p className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
                {heroData.eyebrow || "The Future of Education"}
              </p>
            </div>

            {/* Premium Typography Scale for Headline */}
            <RevealText
              lines={heroData.headlineLines}
              className="mt-2"
              lineClassName="text-4xl md:text-5xl lg:text-hero font-bold tracking-tight text-foreground mb-2 leading-[1.1]"
            />

            {/* Clean Description Text */}
            <p
              data-hero-fade
              className="mt-6 text-lg md:text-xl text-muted leading-relaxed"
            >
              {heroData.description}
            </p>

            {/* Action Buttons */}
            <div
              data-hero-fade
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button href={heroData.primaryCta.href} variant="primary" showArrow>
                {heroData.primaryCta.label}
              </Button>

              <Button href={heroData.secondaryCta.href} variant="secondary" icon={Play}>
                {heroData.secondaryCta.label}
              </Button>
            </div>

            {/* Minimalist Trust Indicators / Stats */}
            <div
              data-hero-fade
              className="mt-6 lg:mt-12 grid w-full grid-cols-3 gap-2 sm:gap-4 md:gap-6 border-t border-border dark:border-white/10 pt-4 lg:pt-8"
            >
              {heroData.stats.map((stat) => (
                <div key={stat.id} className="min-w-0 flex flex-col justify-center">
                  <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground truncate">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs font-semibold tracking-wider text-muted uppercase break-words sm:break-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container (Perfected Size & Balance) */}
          <div
            data-hero-mockup
            className="relative flex w-full justify-center lg:justify-end mt-2 -mb-2 lg:mt-0 lg:mb-0"
          >
            <div
              ref={scrollRef}
              className="w-[100vw] overflow-x-auto overflow-y-visible lg:overflow-visible flex items-center scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onTouchStart={() => setIsInteracting(true)}
              onTouchEnd={() => { setTimeout(() => setIsInteracting(false), 2000) }}
            >
              {/* Force image to be wide on mobile to enable scrolling */}
              <div className="relative w-[125%] sm:w-[115%] shrink-0 lg:w-full max-w-xl lg:max-w-2xl aspect-[1.1] lg:aspect-square flex items-center justify-center pl-4 lg:pl-0">
                <Image
                  src="/images/two.png"
                  alt="Platform Illustration"
                  fill
                  priority
                  className="object-contain w-full h-full drop-shadow-2xl origin-center scale-[1.15] lg:scale-[1.15] pointer-events-none"
                />

                {/* Subtle Semantic Glow */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                  <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-accent/10 blur-[140px]" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Secondary Dashboard Mockup Reveal (Plain Image) */}
        <div data-hero-mockup className="relative mt-12 md:mt-20 w-full">
          <Image
            src="/images/dashboard/5.png"
            alt="Hero Dashboard Mockup"
            width={1200}
            height={800}
            className="animate-float w-full h-auto object-cover"
          />
        </div>
      </Container>
    </section>
  );
}