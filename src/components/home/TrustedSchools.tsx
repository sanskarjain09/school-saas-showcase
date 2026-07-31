import Image from "next/image";
import Link from "next/link";
import { trustedSchools } from "@/data/trustedSchools";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";

export function TrustedSchools() {
  // Taking exactly 6 schools for the image cards
  const displayedSchools = trustedSchools.slice(0, 6);

  return (
    <Section className="py-16 lg:py-24 bg-white dark:bg-background border-t border-gray-100 dark:border-white/5">
      <Container>
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-3">
            Educational Institutions
          </p>
          <Heading 
            title="Tailored for Every Learning Environment" 
            align="center" 
            className="mx-auto max-w-3xl" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedSchools.map((school, idx) => (
            <FadeUp key={school.id || school.name} delay={idx * 0.03}>
              {/* Image Card */}
              <div className="group relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-3xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-gray-200 dark:hover:border-white/20 shadow-sm flex items-center justify-center">
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={school.img}
                    alt={school.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
            </FadeUp>
          ))}

          {/* 7th Card: View All Industries We Serve */}
          <FadeUp delay={6 * 0.03}>
            <Link href="/industries" className="block h-full">
              <div className="group relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-3xl bg-[#1A73E8]/5 dark:bg-[#1A73E8]/10 border border-[#1A73E8]/20 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-[#1A73E8]/10 dark:hover:bg-[#1A73E8]/20 flex flex-col items-center justify-center text-center h-full shadow-sm">
                <span className="text-sm font-semibold tracking-tight text-[#1A73E8] mb-2 flex items-center gap-2">
                  View All Industries We Serve
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
                <p className="text-xs text-muted-foreground">
                  Explore our comprehensive solutions for all sectors
                </p>
              </div>
            </Link>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}