import { Section, SectionHeading } from "@/components/layouts/section";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageLocalFavorites } from "@/lib/api/homepage";
import { LocalFavoritesCarousel } from "@/modules/shared/homepage/local-favorites-carousel";

const FALLBACK_LOCAL_FAVORITES: HomepageLocalFavorites = {
  eyebrow: "Local favorites",
  title: ["Hidden places.", "beautiful stories."],
  description:
    "Go beyond the usual tourist routes and discover peaceful trails, charming villages, scenic viewpoints, and special places recommended by our local team.",
  items: [
    { title: "Nagarkot", subtitle: "Sunrise & Mountain Views", image: "/images/favorites/nagarkot.jpg", href: "/places/nagarkot" },
    { title: "Shivapuri", subtitle: "Forest Trails & Nature", image: "/images/favorites/shivapuri.jpg", href: "/places/shivapuri" },
    { title: "Phulchowki", subtitle: "Village Life & Himalayan Views", image: "/images/favorites/phulchowki.jpg", href: "/places/phulchowki" },
    { title: "Hattiban", subtitle: "Sunrise & Mountain Views", image: "/images/favorites/hattiban.jpg", href: "/places/hattiban" },
    { title: "Chandragiri", subtitle: "Sunrise & Mountain Views", image: "/images/favorites/chandragiri.jpg", href: "/places/chandragiri" },
    { title: "Champadevi", subtitle: "Sunrise & Mountain Views", image: "/images/favorites/champadevi.jpg", href: "/places/champadevi" },
  ],
};

interface LocalFavoritesSectionProps {
  localFavorites?: HomepageLocalFavorites;
}

export function LocalFavoritesSection({
  localFavorites = FALLBACK_LOCAL_FAVORITES,
}: LocalFavoritesSectionProps) {
  return (
    <section id="local-favorites" className="favorites__section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={localFavorites.eyebrow}
            title={localFavorites.title}
            description={localFavorites.description}
            textClassName="text-white"
            inlineTitle
            titleClassName="md:-mx-24 md:whitespace-nowrap"
          />
        </Reveal>
      </div>

      <Reveal className="favorites__carousel-wrap" delay={150}>
        <LocalFavoritesCarousel items={localFavorites.items} />
      </Reveal>
    </section>
  );
}