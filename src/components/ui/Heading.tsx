import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3"; // SEO & Semantic HTML upgrade
}

export function Heading({ 
  eyebrow, 
  title, 
  description, 
  align = "left", 
  as: As = "h2", // Defaults to h2 for regular sections
  className 
}: HeadingProps) {
  return (
    // max-w-3xl prevents long lines of text which are hard to read
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      
      {/* EYEBROW */}
      {eyebrow ? (
        <p className="mb-content-xs text-small font-semibold tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </p>
      ) : null}
      
      {/* TITLE: Using strict typography tokens */}
      <As className="text-card font-semibold text-foreground md:text-section">
        {title}
      </As>
      
      {/* DESCRIPTION: 20px vertical rhythm (mt-content-xs) and text-body token */}
      {description ? (
        <p className="mt-content-xs text-body text-muted">
          {description}
        </p>
      ) : null}
      
    </div>
  );
}