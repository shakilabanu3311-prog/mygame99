import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Products } from "@/components/site/Products";
import { Categories } from "@/components/site/Categories";
import { WhyUs } from "@/components/site/WhyUs";
import { GetId } from "@/components/site/GetId";
import { Footer } from "@/components/site/Footer";
import { links } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AllRounder99 | Sports Betting, Live Casino & Cricket ID" },
      {
        name: "description",
        content:
          "AllRounder99 — India's No.1 platform for sports betting, live casino & cricket IDs. Instant deposit, fast withdrawal, best odds & 24/7 support.",
      },
      { property: "og:title", content: "AllRounder99 | Sports Betting & Live Casino" },
      {
        property: "og:description",
        content:
          "Get your Cricket / Casino ID instantly. Best odds, instant deposit, fast withdrawal & 24/7 support.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Categories />
        <WhyUs />
        <GetId />
      </main>
      <Footer />

      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get your ID on WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full bg-gradient-whatsapp px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-card transition-transform hover:scale-105 sm:bottom-5 sm:right-5 sm:px-4 sm:py-2.5 sm:text-sm"
      >
        <MessageCircle className="size-4" /> Get ID
      </a>
    </div>
  );
}
