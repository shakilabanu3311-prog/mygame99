import { Send, Instagram, Facebook, MessageCircle, ExternalLink } from "lucide-react";
import { brand, links, nav, products } from "@/lib/site-config";
import { LogoMark } from "@/components/site/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark className="size-12" />
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide">
              AllRounder<span className="text-primary">99</span>
            </span>
          </a>
          <p className="max-w-md text-sm text-muted-foreground">{brand.tagline}</p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap justify-center gap-3">
            {products.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {p.site} <ExternalLink className="size-3.5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: links.whatsapp, icon: MessageCircle, label: "WhatsApp" },
              { href: links.instagram, icon: Instagram, label: "Instagram" },
              { href: links.facebook, icon: Facebook, label: "Facebook" },
              { href: links.telegram, icon: Send, label: "Telegram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. 18+ only. Please play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}