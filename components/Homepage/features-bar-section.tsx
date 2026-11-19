import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageFeatures } from "@/lib/api/homepage";

const FALLBACK_FEATURES: HomepageFeatures = {
  section_type: "features",
  items: [
    {
      title: "Journeys for every budget",
      description:
        "Incredible deals and prices. Find wellness packages at unbelievable prices.",
      icon: "/images/wallet.svg",
    },
    {
      title: "Personal guidance from experts",
      description:
        "Talk to an expert. Our wellness consultants are available 7 days a week.",
      icon: "/images/chat.svg",
    },
    {
      title: "Flexible payment options",
      description: "Easy payment options for a stress-free booking.",
      icon: "/images/card.svg",
    },
    {
      title: "100% carbon offset",
      description: "Leave no trace philosophy and eco-lodges only.",
      icon: "/images/leaf.svg",
    },
  ],
};

interface FeaturesBarSectionProps {
  features?: HomepageFeatures;
}

export function FeaturesBarSection({
  features = FALLBACK_FEATURES,
}: FeaturesBarSectionProps) {
  const items = features.items?.length
    ? features.items
    : FALLBACK_FEATURES.items;

  return (
    <section className="features-bar__section" aria-label="Why book with us">
      <div className="container">
        <ul className="features-bar__list">
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={`${item.title}-${i}`}
              className="features-bar__item"
              delay={i * 150}
            >
              <span className="features-bar__icon" aria-hidden="true">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={24}
                  height={24}
                />
              </span>

              <div className="features-bar__text">
                <p className="features-bar__title">{item.title}</p>
                <p className="features-bar__description">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}