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
    <Section className="py-section-sm lg:py-section-lg bg-surface border-t border-border">
      <Container>
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">
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
            <FadeUp key={school.id || school.name} delay={idx * 0.02}>
              {/* Image Card */}
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-transparent transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                <Image
                  src={school.img}
                  alt={school.name}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </FadeUp>
          ))}

          {/* 7th Card: View All Industries We Serve */}
          <FadeUp delay={0.02 * 0.02}>
            <Link href="/industries" className="block h-full">
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-accent/5 border border-accent/20 p-6 transition-all duration-300 hover:scale-105 hover:bg-accent/10 flex flex-col items-center justify-center text-center h-full shadow-card-sm hover:shadow-card-md">
                <span className="text-sm font-semibold tracking-tight text-accent mb-2 flex items-center gap-2">
                  View All Industries We Serve
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
                <p className="text-xs text-muted">
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