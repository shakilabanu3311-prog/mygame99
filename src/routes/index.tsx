import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
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
        aria-label="Chat on WhatsApp"
        className="float-whatsapp fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card ring-2 ring-white/20 transition-transform hover:scale-110 sm:size-16"
      >
        <WhatsAppIcon className="size-7 sm:size-8" />
      </a>
    </div>
  );
}
