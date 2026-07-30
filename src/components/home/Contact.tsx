"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";
// Agar tumhare paas icons hain to inko import kar lo
// import { Mail, Phone, MapPin } from "lucide-react"; 

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-background">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content & Contact Details (Matches the AI Section layout) */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
                Let&apos;s build your dream campus.
              </h2>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Whether you have a question about features, pricing, or need a personalized demo, our team is ready to answer all your questions.
              </p>
              
              {/* Contact Info Details */}
              <div className="mt-12 flex flex-col gap-8">
                <div>
                  <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Email us</p>
                  <a href="mailto:hello@jinanam.com" className="mt-2 text-xl font-medium text-[#1A73E8] transition-colors hover:text-blue-700">
                    hello@jinanam.com
                  </a>
                </div>
                
                <div>
                  <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Call us</p>
                  <a href="tel:+919876543210" className="mt-2 text-xl font-medium text-[#1A73E8] transition-colors hover:text-blue-700">
                    +91 98765 43210
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Location</p>
                  <p className="mt-2 text-lg text-foreground">
                    Makroniya, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Clean Contact Form (Replacing the Dashboard Mockup) */}
          <FadeUp delay={0.1}>
            <div className="relative w-full rounded-3xl bg-gray-50 dark:bg-white/[0.02] p-8 sm:p-10 border border-gray-200 dark:border-white/10 shadow-2xl">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      placeholder="John" 
                      className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-background px-4 py-3 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      placeholder="Doe" 
                      className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-background px-4 py-3 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8] transition-colors"
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
                    className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-background px-4 py-3 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">How can we help?</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your school's requirements..." 
                    className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-background px-4 py-3 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-4 rounded-full bg-[#1A73E8] px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto"
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