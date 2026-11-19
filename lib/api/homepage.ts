import { API_ENDPOINTS } from "./endpoints";

export type HomepageTrustItem = {
  title: string;
  subtitle: string;
};

export type HomepageHero = {
  section_type: "hero";
  heading: string;
  sub_heading: string;
  search_placeholder: string;
  banner_image: string;
  banner_video?: string | null;
  rating: HomepageTrustItem;
  certification: HomepageTrustItem;
};

export type HomepageFeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type HomepageFeatures = {
  section_type: "features";
  items: HomepageFeatureItem[];
};

export type HomepageExperienceItem = {
  title: string;
  description: string;
  image: string;
  trips_count: number;
  cta_label: string;
  href: string;
};

export type HomepageExperiences = {
  section_type: "experiences";
  eyebrow: string;
  title: string[];
  description: string;
  items: HomepageExperienceItem[];
  cta: { label: string; href: string };
};

export type HomepageJourneyItem = {
  title: string;
  image: string;
  duration: string; 
  level: string; 
  level_icon: string; 
  href: string;
};

export type HomepageJourneys = {
  section_type: "journeys";
  eyebrow: string;
  title: string[];
  description: string;
  items: HomepageJourneyItem[];
};

export type HomepageWhyItem = {
  title: string;
  description: string;
  icon: string;
};

export type HomepageWhyTravel = {
  section_type: "why_travel";
  eyebrow: string;
  title: string[];
  description: string;
  items: HomepageWhyItem[];
  cta: { label: string; href: string };
};

export type HomepageData = {
  hero: HomepageHero;
  features?: HomepageFeatures;
  experiences?: HomepageExperiences;
  journeys?: HomepageJourneys;
  whyTravel?: HomepageWhyItem;
};

const USE_MOCK_DATA = true;

export async function getHomepageData(): Promise<HomepageData | null> {
  if (USE_MOCK_DATA) return null;

  try {
    const response = await fetch(API_ENDPOINTS.homepage, {
      cache: "no-store",
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as {
      success: boolean;
      data: HomepageData;
    };

    return payload.success ? payload.data : null;
  } catch {
    return null;
  }
}