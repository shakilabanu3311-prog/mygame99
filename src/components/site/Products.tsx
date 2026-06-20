import { ExternalLink, MessageCircle, BadgeIndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, links } from "@/lib/site-config";

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Our Platforms
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">
            Choose Your <span className="text-gradient-gold">Winning ID</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get a verified ID on India's most trusted exchanges. Minimum deposit only{" "}
            <span className="font-semibold text-foreground">₹100</span> on both platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/30 bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 sm:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />

              <div className="flex min-h-24 items-center justify-center rounded-2xl bg-gradient-hero p-5 ring-1 ring-border/60">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="max-h-20 w-auto object-contain drop-shadow-lg"
                />
              </div>

              <h3 className="mt-6 font-display text-2xl font-extrabold uppercase">{p.name}</h3>
              <p className="mt-1 font-display text-sm font-semibold uppercase tracking-wide text-primary">
                {p.tagline}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>

              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5">
                <BadgeIndianRupee className="size-4 text-accent" />
                <span className="font-display text-sm font-bold uppercase tracking-wide text-accent">
                  Min Deposit {p.deposit}
                </span>
              </div>

              <p className="mt-4 text-center font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:text-left">
                🌐 {p.site}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg" className="btn-shimmer animate-blink flex-1">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    Play Now <ExternalLink className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="brand" size="lg" className="btn-shimmer flex-1">
                  <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" /> Get ID
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
