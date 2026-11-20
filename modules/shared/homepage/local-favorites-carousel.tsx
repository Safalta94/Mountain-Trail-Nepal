"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import type { HomepageLocalFavorites } from "@/lib/api/homepage";

type FavoriteItem = HomepageLocalFavorites["items"][number];

function ArrowRight() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 8h12M8.5 2.5 14 8l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  dragFree: false,
};

export function LocalFavoritesCarousel({
  items,
}: {
  items: FavoriteItem[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const slides = items.length >= 8 ? items : [...items, ...items];

  return (
    <div className="favorites__viewport">
      <div ref={emblaRef} className="favorites__embla">
        <div className="favorites__track">
          {slides.map((item, i) => (
            <div key={`${item.href}-${i}`} className="favorites__slide">
              <div className="favorites__card">
                <Link href={item.href} draggable={false}>
                  <Image
                    src={item.image}
                    alt={`${item.title} – ${item.subtitle}`}
                    fill
                    sizes="320px"
                    draggable={false}
                  />
                  <div className="favorites__overlay" />
                  <div className="favorites__text">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next places"
        className="favorites__next"
      >
        <ArrowRight />
      </button>
    </div>
  );
}