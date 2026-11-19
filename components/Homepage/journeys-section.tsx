import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layouts/section";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageJourneys } from "@/lib/api/homepage";

const CLOCK_ICON = "/images/clock.svg";

const FALLBACK_JOURNEYS: HomepageJourneys = {
  section_type: "journeys",
  eyebrow: "Handpicked experiences",
  title: ["Journeys worth experiencing"],
  description:
    "Explore some of our selected experiences, carefully chosen for travelers looking to discover Nepal in a more meaningful way.",
  items: [
    {
      title: "Nagarkot Sunrise & Himalayan Ridge Hike",
      image: "/images/journeys/nagarkot.jpg",
      duration: "1 Day",
      level: "Easy",
      level_icon: "/images/easy.svg",
      href: "/experiences/nagarkot-sunrise-hike",
    },
    {
      title: "Shivapuri Forest & Monastery Nature Walk",
      image: "/images/journeys/shivapuri.jpg",
      duration: "2 Days",
      level: "Moderate",
      level_icon: "/images/moderate.svg",
      href: "/experiences/shivapuri-nature-walk",
    },
    {
      title: "Pokhara Serenity Wellness Escape",
      image: "/images/journeys/pokhara.jpg",
      duration: "4 Days",
      level: "Mindful",
      level_icon: "/images/mindful.svg",
      href: "/experiences/pokhara-wellness-escape",
    },
    {
      title: "Kathmandu Himalayan Yoga & Sound Retreat",
      image: "/images/journeys/kathmandu.jpg",
      duration: "8 Days",
      level: "Meditation",
      level_icon: "/images/meditation.svg",
      href: "/experiences/kathmandu-yoga-sound-retreat",
    },
  ],
};

interface JourneysSectionProps {
  journeys?: HomepageJourneys;
}

export function JourneysSection({
  journeys = FALLBACK_JOURNEYS,
}: JourneysSectionProps) {
  return (
    <Section
      id="journeys"
      className="pt-0"
      containerClassName="journeys__container"
    >
      <Reveal>
        <SectionHeading
          eyebrow={journeys.eyebrow}
          title={journeys.title}
          description={journeys.description}
        />
      </Reveal>

      <div className="journeys__grid">
        {journeys.items.map((item, i) => (
          <Reveal key={item.href} className="h-full" delay={i * 150}>
            <Link href={item.href} className="journeys__card">
              <div className="journeys__media">
                <Image
                  src={item.image}
                  alt={`${item.title} in Nepal`}
                  fill
                  sizes="(min-width: 1024px) 322px, (min-width: 768px) 50vw, 100vw"
                  className="journeys__image"
                />
              </div>

              <div className="journeys__body">
                <div className="journeys__meta">
                  <span className="journeys__meta-item journeys__meta-item--duration">
                    <Image
                      src={CLOCK_ICON}
                      alt="Duration"
                      width={14}
                      height={14}
                      className="journeys__icon"
                    />
                    <span>{item.duration}</span>
                  </span>

                  <span className="journeys__dot" aria-hidden="true" />

                  <span className="journeys__meta-item journeys__meta-item--level">
                    <Image
                      src={item.level_icon}
                      alt="Difficulty level"
                      width={16}
                      height={14}
                      className="journeys__icon"
                    />
                    <span>{item.level}</span>
                  </span>
                </div>

                <h3 className="journeys__title">{item.title}</h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}