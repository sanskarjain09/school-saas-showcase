import * as Icons from "lucide-react";
import { Card } from "./Card";
import type { LucideIcon } from "@/types";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  // Safe dynamic icon rendering with a premium default fallback
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    // 1. Using our refactored Card with 'interactive' prop for built-in hover physics
    <Card interactive className="group flex h-full flex-col">
      
      {/* 2. Premium Icon Container: Scaled up slightly for a better visual anchor */}
      <div className="mb-content-sm flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
        <Icon className="h-6 w-6 text-accent" aria-hidden />
      </div>
      
      {/* 3. Title: Using our semantic typography (text-body) & spacing (content-xs -> 20px) tokens */}
      <h3 className="mb-content-xs text-body font-semibold text-foreground">
        {title}
      </h3>
      
      {/* 4. Description: Using semantic typography (text-small) */}
      <p className="text-small leading-relaxed text-muted">
        {description}
      </p>
      
    </Card>
  );
}