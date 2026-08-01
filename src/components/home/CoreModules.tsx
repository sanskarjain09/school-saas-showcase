"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { moduleCategories } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";

export function CoreModules() {
  const autoplay = Autoplay({
    delay: 3500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <Section id="modules" className="bg-surface/25 py-section-sm lg:py-section-lg overflow-hidden relative">
      <Container className="relative">
        {/* Centered Heading */}
        <Heading
          eyebrow="Core Modules"
          title="The operational backbone behind the showcase."
          description="Beyond the flagship products, JiNANAM Campus covers every corner of daily school operations."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="relative mt-4 md:mt-10">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface backdrop-blur-xl transition hover:scale-110 hover:border-accent hover:text-accent lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface backdrop-blur-xl transition hover:scale-110 hover:border-accent hover:text-accent lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative overflow-visible">
            {/* Side fading gradient masks (Optional depending on your theme) */}
            <div className="absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background via-background/70 to-transparent lg:block pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-background via-background/70 to-transparent lg:block pointer-events-none" />

            {/* Slider Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              {/* pt-14 is important here so the top absolute icon doesn't get cut off! */}
              <div className="flex touch-pan-y pt-14 pb-2 px-2">
                {moduleCategories.map((module, index) => {
                  const Icon = module.icon as React.ElementType;

                  // 3D calculation logic
                  const distance = Math.abs(index - selectedIndex);
                  const scale = distance === 0 ? 1 : distance === 1 ? 0.92 : 0.84;
                  const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0.35;
                  const rotate = index < selectedIndex ? -8 : index > selectedIndex ? 8 : 0;

                  return (
                    <div
                      key={module.id || index}
                      className="min-w-0 flex-[0_0_100%] px-4 sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                    >
                      <FadeUp delay={(index % 3) * 0.02}>
                        <div
                          style={{
                            transform: `scale(${scale}) rotateY(${rotate}deg) translateY(${distance === 0 ? -12 : 0}px)`,
                            opacity,
                            transformStyle: "preserve-3d",
                            perspective: 1200,
                          }}
                          className="h-full pt-6 transition-all duration-500 ease-out will-change-transform" // extra padding for the overlapping icon
                        >
                          {/* --- Your Custom FeatureCard Design --- */}
                          <div className="relative bg-card rounded-card shadow-card-sm hover:shadow-card-md p-8 pt-16 text-center max-w-sm w-full mx-auto border border-border h-full flex flex-col items-center transition-shadow">

                            {/* Overlapping Icon Container */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-accent rounded-full flex items-center justify-center border-8 border-surface shadow-sm text-white">
                              {Icon && <Icon className="w-8 h-8" />}
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                              {/* Title */}
                              <h3 className="text-lg font-bold tracking-widest text-foreground uppercase mb-4">
                                {module.title}
                              </h3>

                              {/* Description */}
                              <p className="text-muted text-base leading-relaxed mb-8">
                                {module.description}
                              </p>
                            </div>
                          </div>
                          {/* ------------------------------------- */}
                        </div>
                      </FadeUp>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-4 flex justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === selectedIndex
                  ? "w-10 bg-accent" // Matched dot color to your card's icon theme
                  : "w-2 bg-border hover:bg-muted"
                  }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}