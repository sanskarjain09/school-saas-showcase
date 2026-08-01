import * as Icons from "lucide-react";
import { Counter } from "@/components/animations/Counter";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "@/types";

interface StatCardProps {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  className?: string;
}

export function StatCard({ icon, value, suffix, label, className }: StatCardProps) {
  // Safe dynamic icon rendering
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    // 1. Using our central Card component to enforce global radius, border, and padding
    <Card className={cn("flex flex-col items-center justify-center text-center", className)}>
      
      {/* 2. Scaled up Icon Container (56x56) with clean light-theme tint */}
      <div className="mb-content-sm flex h-14 w-14 items-center justify-center rounded-full bg-accent-cyan/10">
        <Icon className="h-6 w-6 text-accent-cyan" aria-hidden />
      </div>
      
      {/* 3. Number/Counter: Preserving the font-display utility but standardizing size */}
      <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground md:text-4xl truncate w-full">
        <Counter value={value} suffix={suffix} />
      </div>
      
      {/* 4. Label: Using semantic text-small and 20px spacing (mt-content-xs) */}
      <p className="mt-content-xs text-xs sm:text-small text-muted break-words w-full">
        {label}
      </p>
      
    </Card>
  );
}