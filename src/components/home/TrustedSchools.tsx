import { trustedSchools } from "@/data/trustedSchools";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/animations/Marquee";

export function TrustedSchools() {
  return (
    <section 
      className="border-y border-border bg-surface/30 py-8 md:py-10 overflow-hidden" 
      aria-label="Trusted by schools"
    >
      <Container>
        {/* mb-8 ko hata kar mb-5 kar diya taaki heading aur marquee paas rahein */}
        <p className="mb-5 text-center text-caption font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by Modern Educational Institutions
        </p>
      </Container>
      
      {/* Infinite Marquee Component */}
      <Marquee>
        {trustedSchools.map((school) => (
          <span 
            key={school.id} 
            className="whitespace-nowrap px-10 text-body font-semibold tracking-tight text-foreground/45 transition-colors hover:text-foreground/80"
          >
            {school.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}