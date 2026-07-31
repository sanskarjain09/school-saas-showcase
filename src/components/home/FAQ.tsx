"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);

  return (
    <Section id="faq" className="bg-surface/20 py-section-sm lg:py-section-lg overflow-hidden">
      <Container>
        {/* Centered Heading */}
        <Heading 
          eyebrow="FAQ" 
          title="Answers before you ask." 
          align="center" 
          className="mx-auto max-w-3xl" 
        />

        {/* FAQ List Container - max-w-2xl se bada karke max-w-3xl kar diya hai taaki margins balanced lagen */}
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="rounded-xl border border-border bg-surface/60">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-foreground">{item.question}</span>
                  <ChevronDown
                    className={cn("h-[18px] w-[18px] flex-shrink-0 text-muted transition-transform duration-300", isOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All FAQs Button */}
        <FadeUp delay={0.02}>
          <div className="mt-4 flex justify-center">
            <Button
              href="/faq"
              variant="secondary"
              size="lg"
              showArrow
            >
              View All FAQs
            </Button>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}