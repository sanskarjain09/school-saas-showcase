"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function FeaturesHeroImage() {
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

  return (
    <div className="relative flex w-full justify-center lg:justify-end mt-4 lg:mt-0">
      <div 
        ref={scrollRef}
        className="w-[100vw] overflow-x-auto overflow-y-visible lg:overflow-visible flex items-center scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => { setTimeout(() => setIsInteracting(false), 2000) }}
      >
        <div className="relative w-[135%] sm:w-[115%] shrink-0 lg:w-full max-w-xl lg:max-w-2xl aspect-[1.1] lg:aspect-square flex items-center justify-center pl-4 lg:pl-0">
          <Image
            src="/images/faturesall.png"
            alt="JiNANAM Campus Devices"
            fill
            priority
            className="object-contain w-full h-full drop-shadow-2xl scale-[1.15] lg:scale-[1.3] origin-center pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
