"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { moduleCategories } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";

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
    <Section id="modules" className="bg-surface/25 py-16 lg:py-10 md:py-24 overflow-hidden relative">
      <Container className="relative">
        {/* Centered Heading */}
        <Heading
          eyebrow="Core Modules"
          title="The operational backbone behind the showcase."
          description="Beyond the flagship products, JINANAM Campus covers every corner of daily school operations."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="relative mt-14">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur-xl transition hover:scale-110 hover:border-red-500 hover:text-red-500 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur-xl transition hover:scale-110 hover:border-red-500 hover:text-red-500 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative overflow-visible">
            {/* Side fading gradient masks (Optional depending on your theme) */}
            <div className="absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background via-background/70 to-transparent lg:block pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-background via-background/70 to-transparent lg:block pointer-events-none" />

            {/* Slider Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              {/* py-16 is very important here so the top absolute icon doesn't get cut off! */}
              <div className="flex touch-pan-y py-16 px-2">
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
                      <FadeUp delay={(index % 3) * 0.05}>
                        <motion.div
                          animate={{
                            scale,
                            opacity,
                            rotateY: rotate,
                            y: distance === 0 ? -12 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 22,
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                            perspective: 1200,
                          }}
                          className="h-full pt-6" // extra padding for the overlapping icon
                        >
                          {/* --- Your Custom FeatureCard Design --- */}
                          <div className="relative bg-white rounded-xl shadow-lg p-8 pt-16 text-center max-w-sm w-full mx-auto border border-gray-100 h-full flex flex-col justify-between transition-shadow hover:shadow-2xl">

                            {/* Overlapping Icon Container */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#D31027] rounded-full flex items-center justify-center border-8 border-gray-100 shadow-sm text-white">
                              {Icon && <Icon className="w-8 h-8" />}
                            </div>

                            <div>
                              {/* Title */}
                              <h3 className="text-lg font-bold tracking-widest text-gray-800 uppercase mb-4">
                                {module.title}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {module.description}
                              </p>
                            </div>

                            {/* Outline Action Button */}
                            <div className="mt-auto">
                              <button className="w-full border-2 border-gray-800 text-gray-800 font-bold text-lg px-8 py-2.5 rounded hover:bg-gray-800 hover:text-white transition-all duration-300">

                                <a
                                  href="/features"
                                >
                                  View Details
                                </a>
                              </button>
                            </div>
                          </div>
                          {/* ------------------------------------- */}
                        </motion.div>
                      </FadeUp>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === selectedIndex
                    ? "w-10 bg-[#D31027]" // Matched dot color to your card's icon theme
                    : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}