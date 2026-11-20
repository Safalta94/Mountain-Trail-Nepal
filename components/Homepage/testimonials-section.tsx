"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Section, SectionHeading } from "@/components/layouts/section";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageTestimonials } from "@/lib/api/homepage";

const STAR_ICON = "/images/star.svg";
const QUOTE_ICON = "/images/quote.svg";

const FALLBACK_TESTIMONIALS: HomepageTestimonials = {
  eyebrow: "Stories from our travelers",
  title: ["Every journey has a story"],
  description:
    "Hear from travelers who have experienced Nepal through our nature, wellness, and adventure journeys.",
  items: [
    {
      quote:
        "The hiking experience was incredible! Beautiful mountain views, friendly local guides, and a perfectly organized journey. It was exactly the peaceful escape I needed.",
      rating: 4.5,
      name: "Daniel Wilson",
      location: "United Kingdom · Yoga & Wellness Retreat",
      avatar: "/images/testimonials/avatar-1.jpg",
    },
    {
      quote:
        "The hiking experience was incredible! Beautiful mountain views, friendly local guides, and a perfectly organized journey. It was exactly the peaceful escape I needed.",
      rating: 4.5,
      name: "Daniel Wilson",
      location: "United Kingdom · Yoga & Wellness Retreat",
      avatar: "/images/testimonials/avatar-2.jpg",
    },
    {
      quote:
        "The hiking experience was incredible! Beautiful mountain views, friendly local guides, and a perfectly organized journey. It was exactly the peaceful escape I needed.",
      rating: 4.5,
      name: "Daniel Wilson",
      location: "United Kingdom · Yoga & Wellness Retreat",
      avatar: "/images/testimonials/avatar-3.jpg",
    },
    {
      quote:
        "The hiking experience was incredible! Beautiful mountain views, friendly local guides, and a perfectly organized journey. It was exactly the peaceful escape I needed.",
      rating: 4.5,
      name: "Daniel Wilson",
      location: "United Kingdom · Yoga & Wellness Retreat",
      avatar: "/images/testimonials/avatar-1.jpg",
    },
  ],
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M1.5 8h13M9 2.5 14.5 8 9 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <div
      className="testimonials__stars"
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Image key={i} src={STAR_ICON} alt="" width={17} height={17} />
      ))}
      {hasHalf && (
        <div className="testimonials__star-half">
          <Image src={STAR_ICON} alt="" width={17} height={17} />
          <Image src={STAR_ICON} alt="" width={17} height={17} />
        </div>
      )}
    </div>
  );
}

interface TestimonialsSectionProps {
  testimonials?: HomepageTestimonials;
}

export function TestimonialsSection({
  testimonials = FALLBACK_TESTIMONIALS,
}: TestimonialsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
        />
      </Reveal>

      <Reveal>
        <div className="testimonials__viewport" ref={emblaRef}>
          <div className="testimonials__track">
            {testimonials.items.map((item, i) => (
              <div key={`${item.name}-${i}`} className="testimonials__slide">
                <article className="testimonials__card">
                  <div className="testimonials__content">
                    <div className="testimonials__top">
                      <Stars rating={item.rating} />
                      <Image
                        src={QUOTE_ICON}
                        alt=""
                        width={31}
                        height={25}
                        className="testimonials__quote-icon"
                      />
                    </div>
                    <p className="testimonials__quote">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="testimonials__divider" aria-hidden="true" />

                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="44px"
                      />
                    </div>
                    <div className="testimonials__author-text">
                      <p>{item.name}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="testimonials__nav">
        <button
          type="button"
          aria-label="Previous testimonial"
          className="testimonials__btn"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          className="testimonials__btn"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </Section>
  );
}