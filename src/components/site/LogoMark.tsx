import { brand } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Premium logo mark: rotating conic-gradient ring + pulsing glow + floating emblem.
 * The conic ring spins, the inner badge sits still and softly pulses.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("logo-mark relative inline-grid place-items-center", className)}>
      <span aria-hidden className="logo-mark__ring" />
      <span className="logo-mark__inner grid place-items-center rounded-full bg-gradient-hero p-1.5 shadow-card">
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={48}
          height={48}
          className="logo-mark__img h-full w-full object-contain"
        />
      </span>
    </span>
  );
}