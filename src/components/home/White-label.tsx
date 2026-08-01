"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Palette,
  Smartphone,
  ShieldCheck,
  BadgeCheck,
  Building2,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";

const features = [
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Replace our logo, colors and identity with your school's own brand across the platform.",
  },
  {
    icon: Globe,
    title: "Custom Domain",
    description:
      "Launch your ERP on your own domain like erp.schoolname.com with complete branding.",
  },
  {
    icon: Smartphone,
    title: "Branded Mobile Apps",
    description:
      "Android & iOS applications with your logo, splash screen and application name.",
  },
  {
    icon: Building2,
    title: "Independent School Portal",
    description:
      "Every school gets its own dedicated login portal and personalized experience.",
  },
  {
    icon: ShieldCheck,
    title: "Tenant Isolation",
    description:
      "Every school's database remains completely isolated for maximum security.",
  },
  {
    icon: BadgeCheck,
    title: "Complete Ownership",
    description:
      "Parents, students and staff only see your brand—not ours—creating a premium experience.",
  },
];

export function WhiteLabel() {
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
    <Section
      id="white-label"
      className="relative overflow-hidden bg-surface/20 pt-section-sm pb-6 lg:pt-section-lg lg:pb-12"
    >
      {/* Shine keyframe definition */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>


      <Container className="relative">
        <Heading
          eyebrow="White Label"
          title="Launch your own branded School ERP Platform."
          description="Create a fully branded experience with your own logo, colors, domain and mobile applications while we handle the technology behind the scenes."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="relative">
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

          <div className="relative overflow-hidden">
            {/* Side fading gradient masks */}
            <div className="absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background via-background/70 to-transparent lg:block pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-background via-background/70 to-transparent lg:block pointer-events-none" />

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y py-6">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  const distance = Math.abs(index - selectedIndex);

                  const scale =
                    distance === 0
                      ? 1
                      : distance === 1
                      ? 0.92
                      : 0.84;

                  const opacity =
                    distance === 0
                      ? 1
                      : distance === 1
                      ? 0.7
                      : 0.35;

                  const rotate =
                    index < selectedIndex
                      ? -8
                      : index > selectedIndex
                      ? 8
                      : 0;

                  return (
                    <div
                      key={item.title}
                      className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                    >
                      <FadeUp delay={index *0.02}>
                        <div
                          style={{
                            transform: `scale(${scale}) rotateY(${rotate}deg) translateY(${distance === 0 ? -12 : 0}px)`,
                            opacity,
                            transformStyle: "preserve-3d",
                            perspective: 1200,
                          }}
                          className="group relative h-full overflow-hidden rounded-[30px] border border-border bg-card p-7 transition-all duration-500 ease-out will-change-transform shadow-card-sm hover:shadow-card-md"
                        >
                          {/* Background Glows on Hover */}
                          <div className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 transition duration-700 group-hover:opacity-100">
                            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-accent/5 via-transparent to-accent-purple/5" />
                            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-[120px]" />
                            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent-purple/15 blur-[120px]" />
                          </div>

                          {/* Border Rings & Inner Gradient */}
                          <div className="absolute inset-0 rounded-[30px] ring-1 ring-border transition duration-500 group-hover:ring-accent/40" />
                          <div className="absolute inset-[1px] rounded-[30px] bg-gradient-to-b from-white/5 to-transparent opacity-60" />

                          {/* Premium Badge */}
                          <div className="absolute right-6 top-6 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                            Premium
                          </div>

                          {/* Icon Container */}
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                            <Icon className="h-7 w-7" />
                          </div>

                          <h3 className="relative mt-6 text-2xl font-semibold text-foreground">
                            {item.title}
                          </h3>

                          <p className="relative mt-4 text-sm leading-7 text-muted">
                            {item.description}
                          </p>

                          {/* Learn More link */}
                          <div
                            className="mt-8 flex items-center gap-3 font-medium text-accent cursor-pointer transition-transform duration-300 hover:translate-x-2"
                          >
                            <span>Learn More</span>
                            <span>→</span>
                          </div>

                          {/* Animated bottom line */}
                          <div
                            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent-purple animate-[pulse_3s_ease-in-out_infinite] w-full"
                          />

                          {/* Rotating icon in bottom-right */}
                          <div className="absolute right-7 bottom-7 pointer-events-none">
                            <div
                              className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent/10 backdrop-blur-xl opacity-40 group-hover:opacity-100 transition-opacity animate-spin"
                              style={{ animationDuration: '18s' }}
                            >
                              <Icon className="h-5 w-5 text-accent" />
                            </div>
                          </div>

                          {/* Glow Shadow and Hover Tracers */}
                          <div className="absolute inset-0 rounded-[30px] shadow-glow opacity-0 transition duration-700 group-hover:opacity-100 pointer-events-none" />
                          <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-700 group-hover:w-full" />
                          <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-700 group-hover:w-full" />
                          <div className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-accent to-transparent transition-all duration-700 group-hover:h-full" />
                          <div className="absolute right-0 top-1/2 h-0 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-accent to-transparent transition-all duration-700 group-hover:h-full" />

                          {/* Shine Layer */}
                          <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.08),transparent)] bg-[length:250%_100%] opacity-0 transition duration-1000 group-hover:animate-[shine_1.4s_linear] group-hover:opacity-100 pointer-events-none" />
                        </div>
                      </FadeUp>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === selectedIndex
                    ? "w-10 bg-accent"
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