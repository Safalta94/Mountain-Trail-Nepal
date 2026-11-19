"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import type { HomepageWhyTravel } from "@/lib/api/homepage";

const FALLBACK_WHY_TRAVEL: HomepageWhyTravel = {
  section_type: "why_travel",
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
    <Section
      id="why-travel"
      className="why-travel__section"
      containerClassName="why-travel__container"
    >
      <div className="why-travel__inner">
        <SectionHeading
          eyebrow={whyTravel.eyebrow}
          title={whyTravel.title}
          description={whyTravel.description}
        />

        <div className="why-travel__grid">
          {whyTravel.items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.title}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`why-travel__card ${
                  isActive ? "why-travel__card--active" : ""
                }`}
              >
                <Image
                  src="/images/why/leaf.svg"
                  alt=""
                  width={150}
                  height={150}
                  aria-hidden="true"
                  className="why-travel__leaf"
                />

                <div className="why-travel__icon">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className={isActive ? "brightness-0 invert" : ""}
                  />
                </div>

                <div className="why-travel__text">
                  <h3 className="why-travel__title">{item.title}</h3>
                  <p className="why-travel__description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Button href={whyTravel.cta.href} variant="primary">
          {whyTravel.cta.label}
        </Button>
      </div>
    </Section>
  );
}