import Image from "next/image";
import { SearchForm } from "@/components/ui/search-form";
import { Reveal } from "@/components/ui/reveal";
import type { HomepageHero } from "@/lib/api/homepage";

import BannerVideo from "@/modules/shared/homepage/banner-video";

const FALLBACK_IMAGE = "/images/banner.jpg";
const FALLBACK_VIDEO = "/images/hero-bg.mp4";
const FULL_STARS = 4;

const FALLBACK_HERO: HomepageHero = {
  section_type: "hero",
  heading: "Discover Nepal.",
  sub_heading: "Reconnect with yourself.",
  search_placeholder: "Find retreats, treks and quiet places to stay",
  banner_image: FALLBACK_IMAGE,
  banner_video: FALLBACK_VIDEO,
  rating: {
    title: "5.0 Google Rating",
    subtitle: "(140+ Authentic Reviews)",
  },
  certification: {
    title: "Certified Wilderness",
    subtitle: "& Yoga Guides",
  },
};

interface BannerSectionProps {
  /** Resolved to absolute URLs by the caller before passing down. */
  hero?: HomepageHero;
}

export function BannerSection({ hero = FALLBACK_HERO }: BannerSectionProps) {
  const image = hero.banner_image || FALLBACK_IMAGE;
  const video = hero.banner_video || FALLBACK_VIDEO;
  const { rating, certification } = hero;

  return (
    <section className="banner__section">
      <BannerVideo video={video} poster={image} />

      <div className="banner__content">
        <div className="container banner__container">
          <div className="banner__main">
            <div className="banner__inner">
              <Reveal as="h1">
                <span>{hero.heading}</span>
                <span>{hero.sub_heading}</span>
              </Reveal>

              <Reveal delay={150}>
                <div className="banner__search">
                  <SearchForm placeholder={hero.search_placeholder} />
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <div className="banner__trust">
              <div className="banner__trust-item banner__trust-item--rating">
                <Image src="/images/google.svg" alt="Google logo" width={34} height={35} />
                <div className="banner__trust-text">
                  <div className="banner__stars" role="img" aria-label={rating.title}>
                    {Array.from({ length: FULL_STARS }).map((_, i) => (
                      <Image
                        key={i}
                        src="/images/star.svg"
                        alt="Star"
                        width={13}
                        height={13}
                      />
                    ))}
                    <div className="banner__star-half">
                      <Image
                        src="/images/star.svg"
                        alt="Star background"
                        width={13}
                        height={13}
                      />
                      <Image
                        src="/images/star.svg"
                        alt="Half star"
                        width={13}
                        height={13}
                      />
                    </div>
                  </div>
                  <p>{rating.title}</p>
                  <p>{rating.subtitle}</p>
                </div>
              </div>

              <div className="banner__divider" aria-hidden="true" />

              <div className="banner__trust-item">
                <Image src="/images/shield.svg" alt="Certification shield badge" width={24} height={24} />
                <div className="banner__trust-text">
                  <p>{certification.title}</p>
                  <p>{certification.subtitle}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}