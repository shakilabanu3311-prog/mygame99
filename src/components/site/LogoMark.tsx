import { brand } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Displays the transparent A99 emblem on a subtle dark badge for contrast. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid place-items-center rounded-full bg-gradient-hero p-1.5 ring-1 ring-primary/40 shadow-card",
        className,
      )}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        width={48}
        height={48}
        className="h-full w-full object-contain"
      />
    </span>
  );
}