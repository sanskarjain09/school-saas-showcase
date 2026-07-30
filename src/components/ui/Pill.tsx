import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        // 1. Layout & Shape
        "inline-flex items-center justify-center rounded-full",
        // 2. Light Theme Safe Background & Border (Premium outlined look)
        "border border-border bg-surface px-3 py-1",
        // 3. Semantic Typography (Mapped to text-caption)
        "text-caption font-medium text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}