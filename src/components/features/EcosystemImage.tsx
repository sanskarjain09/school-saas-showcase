"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function EcosystemImage() {
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
    <div className="relative w-full flex justify-center">
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto overflow-y-visible lg:overflow-visible flex items-center scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => { setTimeout(() => setIsInteracting(false), 2000) }}
      >
        <div className="relative w-[150%] sm:w-[130%] shrink-0 lg:w-full max-w-5xl lg:max-w-6xl mx-auto flex items-center justify-center px-4 md:px-0">
          <Image
            src="/images/feature.png"
            alt="Complete Campus Ecosystem"
            width={1600}
            height={900}
            className="w-full h-auto object-contain pointer-events-none drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
