import { Zap, Wallet, Headphones, ShieldCheck, TrendingUp, BadgeCheck } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Deposit", desc: "Top up your account in seconds and never miss a bet." },
  { icon: Wallet, title: "Fast Withdrawal", desc: "Quick, hassle-free payouts straight to your account." },
  { icon: Headphones, title: "24/7 Support", desc: "Friendly help available any time, day or night." },
  { icon: TrendingUp, title: "Best Odds Available", desc: "Maximise winnings with the most competitive odds." },
  { icon: ShieldCheck, title: "Trusted Platform", desc: "Safe, secure and reliable — your data stays protected." },
  { icon: BadgeCheck, title: "Instant ID Creation", desc: "Get your verified ID in minutes and start playing." },
];

export function WhyUs() {
  return (
    <section id="why" className="border-y border-border/60 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Why AllRounder99
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">
            Built For <span className="text-gradient-gold">Winners</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border/60 bg-card p-7 shadow-card transition-colors hover:border-primary/50"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow-primary">
                <f.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}