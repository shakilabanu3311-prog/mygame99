import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links, nav } from "@/lib/site-config";
import { LogoMark } from "@/components/site/LogoMark";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5">
          <LogoMark className="enter-zoom size-10 transition-transform duration-300 group-hover:scale-105" />
          <span
            aria-label="ALLROUNDER99"
            className="wordmark font-display text-xl font-extrabold uppercase tracking-wide"
          >
            {Array.from("ALLROUNDER99").map((ch, i) => (
              <span
                key={i}
                aria-hidden
                className="letter-in inline-block"
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                {ch}
              </span>
            ))}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="lg" className="btn-shimmer animate-blink">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> Get ID Now
            </a>
          </Button>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="btn-shimmer animate-blink mt-2 w-full">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Get ID Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}