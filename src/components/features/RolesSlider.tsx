"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const roles = [
  { img: "/images/admin.png", title: "Institution Management", desc: "Executive dashboards and complete institutional oversight." },
  { img: "/images/teacher.png", title: "Faculty & Staff", desc: "Manage classes, attendance, homework and examinations efficiently." },
  { img: "/images/student.png", title: "Students", desc: "Stay updated with schedules, assignments, results and campus announcements." },
  { img: "/images/aboutfuture.png", title: "Office Administration", desc: "Handle admissions, fees, communication and everyday operations with ease." },
  { img: "/images/support.png", title: "Support Departments", desc: "Reception, Library, Transport, Hostel, HR and Security all work through one platform." },
];

export function RolesSlider() {
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
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative group mt-10 max-w-[1200px] mx-auto">
      <div className="overflow-hidden px-4 sm:px-0" ref={emblaRef}>
        <div className="flex -ml-6 py-12">
          {roles.map((role, index) => {
            const distance = Math.abs(index - selectedIndex);
            
            const scale =
              distance === 0
                ? 1
                : distance === 1
                ? 0.9
                : 0.8;

            const opacity =
              distance === 0
                ? 1
                : distance === 1
                ? 0.6
                : 0.3;

            const rotate =
              index < selectedIndex
                ? -5
                : index > selectedIndex
                ? 5
                : 0;

            return (
              <div 
                key={role.title} 
                className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_33.33%]"
              >
                <div
                  style={{
                    transform: `scale(${scale}) rotateY(${rotate}deg) translateY(${distance === 0 ? -10 : 0}px)`,
                    opacity,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                  className="group h-full bg-surface rounded-3xl overflow-hidden border border-border transition-all duration-500 ease-out will-change-transform shadow-card-sm hover:shadow-card-md"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-border">
                    <Image
                      src={role.img}
                      alt={role.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-foreground text-lg mb-2 leading-tight">{role.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-[-15px] sm:left-[-30px] lg:left-[-50px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-surface-hover hover:text-accent shadow-md backdrop-blur-xl transition hover:scale-110 opacity-0 group-hover:opacity-100 z-10 hidden sm:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-[-15px] sm:right-[-30px] lg:right-[-50px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-surface-hover hover:text-accent shadow-md backdrop-blur-xl transition hover:scale-110 opacity-0 group-hover:opacity-100 z-10 hidden sm:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
