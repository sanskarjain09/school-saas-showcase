
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactForm } from "@/components/ui/ContactForm";
// Agar tumhare paas icons hain to inko import kar lo
// import { Mail, Phone, MapPin } from "lucide-react"; 

export default function Contact() {
  return (
    <Section id="contact" className="pt-32 py-section-sm lg:py-section-lg bg-background relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Side: Content & Contact Details (Matches the AI Section layout) */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
                Let&apos;s build your dream campus.
              </h2>

              <p className="mt-6 text-lg text-muted leading-relaxed">
                Whether you have a question about features, pricing, or need a personalized demo, our team is ready to answer all your questions.
              </p>

              {/* Contact Info Details */}
              <div className="mt-12 flex flex-col gap-8">
                <div>
                  <p className="text-sm font-semibold tracking-wider text-accent uppercase">Email us</p>
                  <a href="mailto:hello@jinanam.in" className="mt-2 text-xl font-medium text-foreground transition-colors hover:text-accent break-all">
                    hello@jinanam.in
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-accent uppercase">Call us</p>
                  <a href="tel:+918693838281" className="mt-2 text-xl font-medium text-foreground transition-colors hover:text-accent break-words">
                    +91 869 3838 281
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-accent uppercase">Location</p>
                  <p className="mt-2 text-lg text-foreground">
                    203, Navghar Road, Mulund East. Mumbai 400081. Maharashtra. India
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Clean Contact Form (Replacing the Dashboard Mockup) */}
          <FadeUp delay={0.02}>
            <div className="relative w-full rounded-3xl bg-card p-8 sm:p-10 border border-border shadow-card-lg">
              <ContactForm />
            </div>
          </FadeUp>

        </div>
      </Container>
    </Section>
  );
}