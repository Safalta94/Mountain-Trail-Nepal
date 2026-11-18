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

export interface HomepageFeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface HomepageFeatures {
  section_type: "features";
  items: HomepageFeatureItem[];
}


export type HomepageData = {
  hero: HomepageHero;
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