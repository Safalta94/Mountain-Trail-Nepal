import Image from "next/image";
import type { HomepageFeatures } from "@/lib/api/homepage";

const FALLBACK_FEATURES: HomepageFeatures = {
  section_type: "features",
  items: [
    {
      title: "Journeys for every budget",
      description:
        "incredible deals & prices find wellness packages at unbelieable prices",
      icon: "/images/icons/wallet.svg",
    },
    {
      title: "Personal guidance from experts",
      description:
        "Talk to an expert our wellness consultants are available 7 days a week",
      icon: "/images/icons/chat.svg",
    },
    {
      title: "Flexible payment options",
      description: "Easy payment options for a stress-free booking.",
      icon: "/images/icons/card.svg",
    },
    {
      title: "100% carbon offset",
      description: "Leave no trace philosophy & eco-lodges only.",
      icon: "/images/icons/leaf.svg",
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
    <section className="features-bar__section">
      <div className="container">
        <ul className="features-bar__list">
          {items.map((item) => (
            <li key={item.title} className="features-bar__item">
              <span className="features-bar__icon">
                <Image src={item.icon} alt="" width={24} height={24} />
              </span>

              <div className="features-bar__text">
                <h3 className="features-bar__title">{item.title}</h3>
                <p className="features-bar__description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}