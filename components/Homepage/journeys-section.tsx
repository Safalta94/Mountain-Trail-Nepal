import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layouts/section";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageJourneys } from "@/lib/api/homepage";

const CLOCK_ICON = "/images/clock.svg";

const FALLBACK_JOURNEYS: HomepageJourneys = {
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
    className="pt-0 md:pt-0"
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
          <div className="journeys__card">
            <Link href={item.href}>
              <div className="journeys__media">
                <Image
                  src={item.image}
                  alt={`${item.title} in Nepal`}
                  fill
                  sizes="(min-width: 1024px) 322px, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="journeys__body">
                <div className="journeys__meta">
                  <div className="journeys__meta-item journeys__meta-item--duration">
                    <Image
                      src={CLOCK_ICON}
                      alt="Duration"
                      width={14}
                      height={14}
                    />
                    <p>{item.duration}</p>
                  </div>

                  <div className="journeys__dot" aria-hidden="true" />

                  <div className="journeys__meta-item journeys__meta-item--level">
                    <Image
                      src={item.level_icon}
                      alt="Difficulty level"
                      width={16}
                      height={14}
                    />
                    <p>{item.level}</p>
                  </div>
                </div>

                <h3>{item.title}</h3>
              </div>
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);
}