import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export function GradientText({ children, className, as: As = "span" }: GradientTextProps) {
  return (
    <As 
      className={cn(
        // Connecting to the single source of truth from globals.css
        "text-gradient", 
        className
      )}
    >
      {children}
    </As>
  );
}