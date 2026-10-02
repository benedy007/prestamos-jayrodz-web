import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-kicker font-medium uppercase tracking-kicker",
            invert ? "text-paper/55" : "text-muted",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-section leading-tight tracking-display",
          invert ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 text-lede leading-relaxed",
            invert ? "text-paper/70" : "text-muted",
          )}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}
