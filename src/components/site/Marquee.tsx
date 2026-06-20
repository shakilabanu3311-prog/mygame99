const items = [
  "🎰 Live Casino",
  "🏏 Cricket ID",
  "💸 Best Odds",
  "⚡ Instant Deposit",
  "🏆 Fast Withdrawal",
  "💯 24/7 Support",
  "🎯 Trusted Platform",
  "🔥 India's No.1 Choice",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border/60 bg-gradient-primary py-3">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm font-bold uppercase tracking-widest text-primary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}