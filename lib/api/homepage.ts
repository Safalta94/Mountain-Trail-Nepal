import { API_ENDPOINTS } from "./endpoints";

export type HomepageCta = {
  label: string;
  href: string;
}; 


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

export type HomepageFeatures = {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
};


export type HomepageExperiences = {
  eyebrow: string;
  title: string[];
  description: string;
  items: {
    title: string;
    description: string;
    image: string;
    trips_count: number;
    cta_label: string;
    href: string;
  }[];
  cta: HomepageCta;
};


export type HomepageJourneys = {
  eyebrow: string;
  title: string[];
  description: string;
  items: {
    title: string;
    image: string;
    duration: string;
    level: string;
    level_icon: string;
    href: string;
  }[];
};

export type HomepageWhyTravel = {
  eyebrow: string;
  title: string[];
  description: string;
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  cta: HomepageCta;
};

export type HomepageLocalFavorites = {
  eyebrow: string;
  title: string[];
  description: string;
  items: {
    title: string;
    subtitle: string;
    image: string;
    href: string;
  }[];
};


export type HomepageData = {
  hero: HomepageHero;
  features?: HomepageFeatures;
  experiences?: HomepageExperiences;
  journeys?: HomepageJourneys;
  why_travel?: HomepageWhyTravel;
  localFavorites?: HomepageLocalFavorites;
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