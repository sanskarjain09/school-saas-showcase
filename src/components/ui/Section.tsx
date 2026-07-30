import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  as?: "section" | "main" | "article" | "div";
}

export function Section({ 
  children, 
  className, 
  id, 
  ariaLabel, 
  as: As = "section",
  ...props 
}: SectionProps) {
  return (
    <As 
      id={id} 
      aria-label={ariaLabel} 
      className={cn(
        // 1. Relative positioning for absolute background assets (blobs, grids, etc.)
        "relative",
        // 2. Strict Mobile-First Vertical Rhythm (64px -> 96px -> 128px)
        "py-16 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
}