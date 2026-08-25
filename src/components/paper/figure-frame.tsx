import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FigureFrame({
  n,
  caption,
  children,
  className,
}: {
  n: string;
  caption: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "my-8 overflow-hidden rounded-xl bg-paper-2 p-3 sm:p-4",
        className,
      )}
    >
      <div className="overflow-hidden rounded-lg bg-paper">{children}</div>
      <figcaption className="mt-3 px-1 font-sans text-sm leading-relaxed text-muted">
        <span className="font-medium text-ink-soft">Figure {n}. </span>
        {caption}
      </figcaption>
    </figure>
  );
}
