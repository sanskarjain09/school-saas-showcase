"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function DailyCampusImage() {
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
    <div className="relative w-[100vw] -ml-4 md:ml-0 md:w-full flex justify-center mt-2 lg:mt-6 -mb-4 lg:mb-4">
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto overflow-y-visible lg:overflow-visible flex items-center scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => { setTimeout(() => setIsInteracting(false), 2000) }}
      >
        <div className="relative w-[280%] sm:w-[220%] shrink-0 lg:w-full max-w-5xl lg:mx-auto flex items-center justify-center pl-4 md:pl-0">
          <Image
            src="/images/daily-campus.png"
            alt="Daily Campus Flow"
            width={1200}
            height={200}
            className="w-full h-auto object-contain lg:scale-[1.15] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
