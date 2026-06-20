import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/site-config";
import cricket from "@/assets/cricket.jpg";
import casino from "@/assets/casino.jpg";
import liveDealer from "@/assets/live-dealer.jpg";
import slots from "@/assets/slots.jpg";
import football from "@/assets/football.jpg";

const cards = [
  { title: "Cricket Betting", desc: "Best odds on IPL, T20, ODI & every international match.", img: cricket, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Live Casino", desc: "Real dealers, real-time tables.", img: liveDealer, span: "" },
  { title: "Slots & Jackpots", desc: "Spin to win huge jackpots.", img: slots, span: "" },
  { title: "Roulette & Cards", desc: "Classic table games, 24/7.", img: casino, span: "" },
  { title: "Football & More", desc: "Football, tennis, kabaddi & more.", img: football, span: "" },
];

export function Categories() {
  return (
    <section id="games" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
          Games &amp; Sports
        </span>
        <h2 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">
          Everything In <span className="text-gradient-primary">One Place</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          From cricket pitches to casino tables — bet, play and win on India's most trusted platform.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 shadow-card ${card.span}`}
          >
            <img
              src={card.img}
              alt={card.title}
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-xl font-bold uppercase">{card.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="brand" size="xl">
          <a href={links.telegram} target="_blank" rel="noopener noreferrer">
            <Send className="size-5" /> Start Playing Now
          </a>
        </Button>
      </div>
    </section>
  );
}