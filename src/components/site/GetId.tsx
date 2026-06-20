import { Send, Instagram, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, links, products } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const steps = [
  { num: "01", title: "Message Us", desc: "Tap the button and message us on Telegram or WhatsApp." },
  { num: "02", title: "Get Your ID", desc: "We create your verified Cricket / Casino ID instantly." },
  { num: "03", title: "Deposit & Play", desc: "Make an instant deposit and start winning right away." },
];

export function GetId() {
  return (
    <section id="get-id" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Get Started
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">
              Get Your <span className="text-gradient-primary">ID</span> In 3 Steps
            </h2>
            <div className="mt-8 space-y-6">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5">
                  <span className="font-display text-3xl font-extrabold text-gradient-gold">{s.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary/30 bg-card p-8 shadow-card glow-primary sm:p-10">
            <h3 className="font-display text-2xl font-extrabold uppercase">
              Join {brand.name} Today 🎰
            </h3>
            <p className="mt-3 text-muted-foreground">
              Instant ID • Best Odds • Fast Withdrawal. Get yours now on your favourite channel.
            </p>

            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-accent">
              💰 Min Deposit ₹100 Only
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Button asChild variant="brand" size="xl" className="btn-shimmer animate-blink w-full">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" /> Get ID on WhatsApp
                </a>
              </Button>
              <Button asChild variant="hero" size="xl" className="btn-shimmer w-full">
                <a href={links.telegram} target="_blank" rel="noopener noreferrer">
                  <Send className="size-5" /> Get ID on Telegram
                </a>
              </Button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-border/60 px-3 py-2.5 text-center font-display text-xs font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {p.name} <ExternalLink className="size-3.5" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-wa flex size-11 items-center justify-center rounded-full transition-all"
              >
                <WhatsAppIcon className="size-5" />
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-ig flex size-11 items-center justify-center rounded-full transition-all"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-fb flex size-11 items-center justify-center rounded-full transition-all"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href={links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="social-tg flex size-11 items-center justify-center rounded-full transition-all"
              >
                <Send className="size-5" />
              </a>
            </div>
            <p className="mt-5 text-center font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              🌐 {brand.website}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}