import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  showDot?: boolean; // Premium touch: Optional animated pulse dot
}

export function Badge({ children, className, showDot = true }: BadgeProps) {
  return (
    <span
      className={cn(
        // 1. Layout & Border (Using our exact border token)
        "inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-1.5",
        // 2. Glassmorphism effect using our surface color
        "bg-surface/80 backdrop-blur-md",
        // 3. Typography (Mapped to our tailwind.config.ts 'text-caption')
        "text-caption font-medium uppercase tracking-wider text-foreground",
        // 4. Subtle depth
        "shadow-card-sm",
        className
      )}
    >
      {/* 5. Micro-interaction: Pulsing dot using our accent color */}
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
      )}
      
      {children}
    </span>
  );
}