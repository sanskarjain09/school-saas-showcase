"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "EN", name: "English", symbol: "GB" },
  { code: "HI", name: "Hindi", symbol: "IN" },
  { code: "MR", name: "Marathi", symbol: "महाराष्ट्र" },
  { code: "GU", name: "Gujarati", symbol: "ગુજરાત" },
  { code: "TA", name: "Tamil", symbol: "தமிழ்" },
  { code: "TE", name: "Telugu", symbol: "తెలుగు" },
  { code: "BN", name: "Bengali", symbol: "বাংলা" },
  { code: "PA", name: "Punjabi", symbol: "ਪੰਜਾਬੀ" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline-block">EN</span>
        <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute right-0 top-full mt-2 w-64 origin-top-right rounded-xl border border-border bg-surface p-2 shadow-lg backdrop-blur-sm transition-all duration-200 ease-out",
          isOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
        )}
      >
        <div className="mb-2 border-b border-border p-2">
          <p className="text-xs font-medium text-foreground">
            Our platform supports these languages, you can easily switch.
          </p>
        </div>
        <div className="flex max-h-60 flex-col gap-1 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex w-full items-center justify-start gap-3 rounded-lg px-2 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xs opacity-60 w-12 text-left">{lang.symbol}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
