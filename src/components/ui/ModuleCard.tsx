import { Card } from "./Card";
import type { ModuleCategory } from "@/types";

interface ModuleCardProps {
  module: ModuleCategory;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Card interactive className="group flex h-full flex-col">
      <div className="mb-content-xs flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-purple/10 transition-colors duration-300 group-hover:bg-accent-purple/20">
        <Icon className="h-6 w-6 text-accent-purple" aria-hidden />
      </div>

      <h3 className="mb-2 text-body font-semibold text-foreground">
        {module.title}
      </h3>

      <p className="mb-content-sm flex-grow text-small leading-relaxed text-muted">
        {module.description}
      </p>

      <ul className="space-y-2.5 border-t border-border pt-content-xs">
        {module.features.slice(0, 4).map((feature) => (
          <li
            key={feature.id}
            className="flex items-center gap-2.5 text-caption text-muted"
          >
            <span
              className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
              aria-hidden
            />
            <span className="truncate">{feature.text}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}