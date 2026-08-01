"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { productShowcaseData } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import { accentText } from "@/lib/theme";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function ProductShowcase() {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
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
    <Section id="products" className="overflow-hidden pt-section-sm pb-0 lg:py-section-lg bg-background">
      <Container>
        {/* Centered Section Header */}
        <Heading
          eyebrow="Product Showcase"
          title="One platform, every part of school life."
          description="Nine connected modules that share the same student, staff and fee data — so nothing is ever entered twice."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* Carousel Wrapper with Side Padding to keep arrows away from content */}
        <div className="relative mt-14 lg:mt-20 px-4 sm:px-10 lg:px-16">

          {/* Left Navigation Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface shadow-md backdrop-blur-xl transition hover:scale-110 hover:border-accent hover:text-accent lg:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface shadow-md backdrop-blur-xl transition hover:scale-110 hover:border-accent hover:text-accent lg:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {productShowcaseData.map((product, idx) => {
                const reversed = idx % 2 === 1;
                return (
                  <div
                    key={product.id}
                    className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_100%] pr-4 sm:pr-0 px-2 sm:px-4"
                  >
                    <div
                      className={cn(
                        "grid grid-cols-1 items-center gap-6 md:gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16",
                        reversed && "lg:[&>*:first-child]:order-2 lg:grid-cols-[7fr_5fr]"
                      )}
                    >
                      {/* Left/Right Text Content (Google Minimalist Style) */}
                      <FadeUp>
                        <div className="flex flex-col items-start max-w-xl">

                          {/* Eyebrow */}
                          <p className={cn("mb-2 md:mb-4 text-xs md:text-sm font-semibold tracking-wider uppercase", accentText[product.accent])}>
                            {product.eyebrow}
                          </p>

                          {/* Google-Style Large Heading */}
                          <h3 className="text-2xl md:text-4xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
                            {product.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-3 md:mt-6 text-base md:text-lg text-muted leading-relaxed">
                            {product.description}
                          </p>

                          {/* Capabilities Bullet List (2 Columns) */}
                          <ul className="mt-5 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 w-full">
                            {product.capabilities.map((cap) => (
                              <li key={cap.id} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/80">
                                <span className={cn("mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current", accentText[product.accent])} />
                                {cap.text}
                              </li>
                            ))}
                          </ul>

                          {/* Pill-shaped CTA Action */}
                          <div className="mt-6 md:mt-10">
                            <Button href={product.cta.href} variant="secondary" className="w-full sm:w-auto" showArrow>
                              {product.cta.label}
                            </Button>
                          </div>

                        </div>
                      </FadeUp>

                      {/* Left/Right Mockup Showcase */}
                      <FadeUp delay={0.02}>
                        <div className="relative flex justify-center w-full -mb-12 lg:mb-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={1000}
                            height={750}
                            className="w-full h-auto rounded-card shadow-card-lg border border-border object-cover scale-[1.35] md:scale-110 lg:scale-100 origin-center"
                          />
                        </div>
                      </FadeUp>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-12 flex justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${index === selectedIndex
                    ? "w-10 bg-accent" // Active Google blue dot
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