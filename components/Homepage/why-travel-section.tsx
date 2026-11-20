"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageWhyTravel } from "@/lib/api/homepage";

const FALLBACK_WHY_TRAVEL: HomepageWhyTravel = {
  eyebrow: "Why travel with us",
  title: ["Meaningful experiences,", "guided by local knowledge"],
  description:
    "We believe the best journeys go beyond beautiful destinations. They connect you with nature, local communities, and experiences that stay with you.",
  items: [
    {
      title: "Local Expertise",
      description:
        "Explore Nepal with knowledgeable local guides who understand the trails and culture.",
      icon: "/images/why/local-expertise.svg",
    },
    {
      title: "Personalized Journeys",
      description:
        "Find experiences that match your interests, schedule, and travel style.",
      icon: "/images/why/personalized-journeys.svg",
    },
    {
      title: "Nature & Wellness",
      description:
        "Enjoy meaningful experiences that bring you closer to nature and wellbeing.",
      icon: "/images/why/nature-wellness.svg",
    },
    {
      title: "Authentic Connections",
      description:
        "Connect with local communities and discover Nepal beyond popular destinations.",
      icon: "/images/why/authentic-connections.svg",
    },
    {
      title: "Thoughtful Support",
      description:
        "Get guidance and assistance throughout your trip planning and experience.",
      icon: "/images/why/thoughtful-support.svg",
    },
    {
      title: "Flexible Experiences",
      description:
        "Choose from different experiences and customize your journey where available.",
      icon: "/images/why/flexible-experiences.svg",
    },
  ],
  cta: { label: "Discover Our Story", href: "/about-us" },
};

interface WhyTravelSectionProps {
  whyTravel?: HomepageWhyTravel;
}

export function WhyTravelSection({
  whyTravel = FALLBACK_WHY_TRAVEL,
}: WhyTravelSectionProps) {

const [activeIndex, setActiveIndex] = useState(0);

 return (
  <section
    id="why-travel"
    className="why-travel__section"
  >
    <div className="container-small">
    <div className="why-travel__inner">
      <Reveal>
      <SectionHeading
        eyebrow={whyTravel.eyebrow}
        title={whyTravel.title}
        description={whyTravel.description}
      />
      </Reveal>

      <div className="why-travel__grid">
      {whyTravel.items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Reveal key={item.title} className="h-full" delay={(index % 3) * 150}>
            <div
              tabIndex={0}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`why-travel__card ${isActive ? "why-travel__card--active" : ""}`}
            >
              <div className="why-travel__leaf" aria-hidden="true">
                <Image src="/images/why/leaf.svg" alt="" width={150} height={150} />
              </div>

              <div className="why-travel__icon">
                <Image src={item.icon} alt="" width={24} height={24} />
              </div>

              <div className="why-travel__text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
      </div>

      <Reveal>
      <Button href={whyTravel.cta.href} variant="primary">
        {whyTravel.cta.label}
      </Button>
      </Reveal>
    </div>
    </div>
  </section>
);
}