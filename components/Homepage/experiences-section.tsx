import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { DriftMedia } from "@/components/ui/drift-media";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageExperiences } from "@/lib/api/homepage";

const FALLBACK_EXPERIENCES: HomepageExperiences = {
  eyebrow: "Find your kind of experience",
  title: ["Explore experiences", "that inspire you"],
  description:
    "From peaceful nature escapes to mindful retreats and cultural adventures, discover experiences that bring your body, mind, and surroundings into balance.",
  items: [
    {
      title: "Day Hikes & Nature Walks",
      description:
        "Explore scenic trails and quiet forest paths on easy day hikes that fit around your schedule.",
      image: "/images/experiences/day-hikes.jpg",
      trips_count: 10,
      cta_label: "Explore Day Hikes",
      href: "/experiences/day-hikes",
    },
    {
      title: "Nature & Cultural Experiences",
      description:
        "Connect with local communities, discover traditional lifestyles, and Nepal's natural and cultural beauty.",
      image: "/images/experiences/cultural.jpg",
      trips_count: 8,
      cta_label: "Discover Local Experiences",
      href: "/experiences/cultural",
    },
    {
      title: "Wellness Treks & Journeys",
      description:
        "Combine mountain exploration with mindful practices, peaceful surroundings, and moments of relaxation.",
      image: "/images/experiences/wellness-treks.jpg",
      trips_count: 4,
      cta_label: "Explore Wellness Treks",
      href: "/experiences/wellness-treks",
    },
    {
      title: "Weekend Wellness Retreats",
      description:
        "Take a refreshing break with short escapes designed around nature, relaxation, and mindful experiences.",
      image: "/images/experiences/weekend-retreats.jpg",
      trips_count: 10,
      cta_label: "Find Your Retreat",
      href: "/experiences/weekend-retreats",
    },
    {
      title: "Yoga, Meditation & Spirituality",
      description:
        "Find space to slow down through yoga practices, meditation, and meaningful spiritual experiences.",
      image: "/images/experiences/yoga.jpg",
      trips_count: 8,
      cta_label: "Discover Mindful Journeys",
      href: "/experiences/yoga-meditation",
    },
    {
      title: "Ayurveda & Sound Healing",
      description:
        "Explore traditional wellness practices, calming sound, and restorative experiences in peaceful settings.",
      image: "/images/experiences/sound-healing.jpg",
      trips_count: 4,
      cta_label: "Explore Healing Experiences",
      href: "/experiences/healing",
    },
  ],
  cta: { label: "Explore All Experiences", href: "/experiences" },
};

function ArrowRight() {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 6h10M6.5 1.5 11 6l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ExperiencesSectionProps {
  experiences?: HomepageExperiences;
}

export function ExperiencesSection({
  experiences = FALLBACK_EXPERIENCES,
}: ExperiencesSectionProps) {
  return (
  <Section
    id="experiences"
    className="experiences__section"
  >
    <div className="experiences__leaf experiences__leaf--left">
      <Image
        src="/images/leaf-left.svg"
        alt="Decorative leaf"
        aria-hidden="true"
        width={239}
        height={253}
      />
    </div>
    <div className="experiences__leaf experiences__leaf--right">
      <Image
        src="/images/leaf-right.svg"
        alt="Decorative leaf"
        aria-hidden="true"
        width={183}
        height={183}
      />
    </div>

    <Reveal>
      <SectionHeading
        eyebrow={experiences.eyebrow}
        title={experiences.title}
        description={experiences.description}
      />
    </Reveal>

    <div className="experiences__grid">
      {experiences.items.map((item, i) => (
        <Reveal
          as="article"
          key={item.href}
          className="experiences__card"
          delay={(i % 3) * 150}
        >

          <DriftMedia className="experiences__media">
              <div className="experiences__drift">
                <Image
                  src={item.image}
                  alt={`${item.title} experience in Nepal`}
                  fill
                  sizes="(min-width: 1024px) 437px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="experiences__badge">
                {item.trips_count} {item.trips_count === 1 ? "Trip" : "Trips"}
              </div>
            </DriftMedia>

          {/* <div className="experiences__media">
            <Image
              src={item.image}
              alt={`${item.title} experience in Nepal`}
              fill
              sizes="(min-width: 1024px) 437px, (min-width: 768px) 50vw, 100vw"
            />
            <div className="experiences__badge">
              {item.trips_count} {item.trips_count === 1 ? "Trip" : "Trips"}
            </div>
          </div> */}

          <div className="experiences__body">
            <div className="experiences__text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>

            <div className="experiences__link">
              <Link href={item.href}>
                <span>{item.cta_label}</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal className="experiences__cta">
      <Button href={experiences.cta.href}>{experiences.cta.label}</Button>
    </Reveal>
  </Section>
);
}