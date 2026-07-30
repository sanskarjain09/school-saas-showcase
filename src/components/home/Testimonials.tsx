"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";

export function Testimonials() {
  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center", // Ensures active slide is in the center
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
    <Section id="testimonials" className="bg-surface/20 py-16 lg:py-10 md:py-24 overflow-hidden relative">
      <Container className="relative">
        <Heading
          eyebrow="Loved by school leaders"
          title="Schools that switched, and never looked back."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="relative mt-14">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-md backdrop-blur-xl transition hover:scale-110 hover:border-[#D31027] hover:text-[#D31027] lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-md backdrop-blur-xl transition hover:scale-110 hover:border-[#D31027] hover:text-[#D31027] lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative overflow-visible">
            {/* Slider Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              {/* py-16 ensures the top bubble doesn't get clipped */}
              <div className="flex touch-pan-y py-16 px-2">
                {testimonials.map((testimonial, index) => {
                  const count = testimonials.length;
                  let diff = index - selectedIndex;

                  // Circular math: Handle loop logic so distance is always accurate
                  if (diff > count / 2) diff -= count;
                  if (diff < -count / 2) diff += count;

                  const distance = Math.abs(diff);

                  // 3D calculation logic
                  const scale = distance === 0 ? 1 : distance === 1 ? 0.90 : 0.82;
                  const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : 0.2; // Matching the screenshot fade
                  const rotate = diff < 0 ? -6 : diff > 0 ? 6 : 0;
                  
                  // Z-INDEX FIX: Center card must have the highest z-index
                  const zIndex = 30 - distance;

                  return (
                    <div
                      key={testimonial.id || index}
                      className="min-w-0 flex-[0_0_100%] px-4 sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                    >
                      <FadeUp delay={(index % 3) * 0.05}>
                        <motion.div
                          animate={{
                            scale,
                            opacity,
                            rotateY: rotate,
                            y: distance === 0 ? -12 : 0,
                            zIndex, // Applies the Z-Index fix smoothly
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 22,
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                            perspective: 1200,
                            position: "relative", 
                          }}
                          className="h-full pt-6" // Space for the bubble
                        >
                          {/* --- Custom Testimonial Card Design --- */}
                          <div className="relative bg-white rounded-xl shadow-xl p-8 pt-14 text-center max-w-sm w-full mx-auto border border-gray-100 h-full flex flex-col justify-between transition-shadow">
                            
                            {/* Overlapping Initials Container (Red Bubble) */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#D31027] rounded-full flex items-center justify-center border-[6px] border-white shadow-sm text-white text-3xl font-bold tracking-wider uppercase overflow-hidden">
                              {testimonial.initials}
                            </div>

                            <div className="flex flex-col h-full justify-between flex-grow">
                              <div>
                                {/* Small decorative quote icon */}
                                <Quote className="w-8 h-8 mx-auto text-gray-200 mb-4" fill="currentColor" />
                                
                                {/* Testimonial Quote */}
                                <p className="text-gray-600 text-base italic leading-relaxed mb-8">
                                  &ldquo;{testimonial.quote}&rdquo;
                                </p>
                              </div>

                              {/* Author Details */}
                              <div className="mt-auto border-t border-gray-100 pt-6">
                                <h4 className="text-lg font-bold text-gray-900">
                                  {testimonial.name}
                                </h4>
                                <p className="text-sm font-medium text-[#D31027] mt-1">
                                  {testimonial.role}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {testimonial.school}
                                </p>
                              </div>
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
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === selectedIndex
                    ? "w-10 bg-[#D31027]" // Red active dot
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}