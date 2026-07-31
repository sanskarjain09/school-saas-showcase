"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";
// Agar tumhare paas icons hain to inko import kar lo
// import { Mail, Phone, MapPin } from "lucide-react"; 

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden py-section-sm lg:py-section-lg bg-surface">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content & Contact Details (Matches the AI Section layout) */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-section font-bold tracking-tight text-foreground">
                Let&apos;s build your dream campus.
              </h2>
              
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Whether you have a question about features, pricing, or need a personalized demo, our team is ready to answer all your questions.
              </p>
              
              {/* Contact Info Details */}
              <div className="mt-12 flex flex-col gap-8">
                <div>
                  <p className="text-sm font-semibold tracking-wider text-muted uppercase">Email us</p>
                  <a href="mailto:hello@jinanamcampus.in" className="mt-2 text-xl font-medium text-accent transition-colors hover:text-accent-hover">
                    hello@jinanamcampus.in
                  </a>
                </div>
                
                <div>
                  <p className="text-sm font-semibold tracking-wider text-muted uppercase">Call us</p>
                  <a href="tel:+918693838281" className="mt-2 text-xl font-medium text-accent transition-colors hover:text-accent-hover">
                    +91 869 3838 281
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-muted uppercase">Location</p>
                  <p className="mt-2 text-lg text-foreground">
                    203, Navghar Road, Mulund East. Mumbai 400081. Maharashtra. India
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Clean Contact Form (Replacing the Dashboard Mockup) */}
          <FadeUp delay={0.02}>
            <div className="relative w-full rounded-card bg-card p-8 sm:p-10 border border-border shadow-card-lg">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      placeholder="John" 
                      className="w-full rounded-input border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      placeholder="Doe" 
                      className="w-full rounded-input border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@school.edu" 
                    className="w-full rounded-input border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">How can we help?</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your school's requirements..." 
                    className="w-full rounded-input border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-4 w-full sm:w-auto inline-flex items-center justify-center rounded-button bg-gradient-blue-purple px-8 py-3.5 text-base font-medium text-white shadow-glow transition-all duration-300 hover:brightness-110 hover:shadow-glow-purple hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeUp>
          
        </div>
      </Container>
    </Section>
  );
}