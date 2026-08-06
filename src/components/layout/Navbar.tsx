"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationData } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSelector } from "./LanguageSelector";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll detection for glassmorphism
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // UX Fix: Close mobile menu automatically if the screen is resized to desktop width
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* FIX 1: Wrapped Container in a native <nav> tag to avoid 'as' prop type error */}
      <nav aria-label="Primary">
        <Container className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="School ERP Logo"
              width={200}
              height={180}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigationData.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-semibold text-foreground/90 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <LanguageSelector />
            <Link
              href="https://www.jinanam.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              Admin Login
            </Link>
            <Button
              href={navigationData.cta.href}
              size="lg"
              onClick={() => track("demo_cta_click", { location: "navbar-desktop" })}
            >
              {navigationData.cta.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden">
              <LanguageSelector />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-hover"
                aria-expanded={open}
                aria-label="Toggle navigation menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
        </Container>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open ? (
        <div className="border-t border-border bg-surface/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {navigationData.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            
            {/* FIX 2: Wrapped Button in a div to handle onClick without TypeScript errors */}
            <div onClick={() => setOpen(false)} className="mt-2 w-full">
              <Button href={navigationData.cta.href} className="w-full">
                {navigationData.cta.label}
              </Button>
            </div>

            <Link
              href="https://jinanam.tech/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-center text-base font-semibold text-foreground/80 transition-colors hover:text-foreground"
            >
              Admin Login
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}