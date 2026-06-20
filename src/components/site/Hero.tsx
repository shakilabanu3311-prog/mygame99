import { Send, Zap, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, links } from "@/lib/site-config";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: Zap, label: "Instant Deposit" },
  { icon: ShieldCheck, label: "Trusted Platform" },
  { icon: Star, label: "Best Odds" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Sports betting and live casino action"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-primary">
            🔥 India's No.1 Choice
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Play Bold.
            <br />
            Win <span className="text-gradient-gold">Big.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            {brand.name} brings you <span className="text-foreground font-semibold">Sports Betting</span>,{" "}
            <span className="text-foreground font-semibold">Live Casino</span> &amp;{" "}
            <span className="text-foreground font-semibold">Cricket IDs</span> — instant deposit, fast
            withdrawal and 24/7 support on one trusted platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href={links.telegram} target="_blank" rel="noopener noreferrer">
                <Send className="size-5" /> Get Your ID Now
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#games">Explore Games</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <b.icon className="size-4 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}