import { API_ENDPOINTS } from "./endpoints";
import type { NavItem } from "@/lib/types/navigation";

export type HeaderMenuItem = {
  id: number;
  title: string;
  slug: string;
  children: HeaderMenuItem[];
};

export type HeaderData = {
  header_logo:
    | {
        id: number;
        url: string;
        alt: string;
      }
    | false;
  whatsapp_number: string;
  viber_number: string;
  menu: HeaderMenuItem[];
};

const USE_MOCK_DATA = true;

const MOCK_HEADER: HeaderData = {
  header_logo: {
    id: 1,
    url: "/images/logo.png",
    alt: "Mountain Trail Nepal",
  },
  whatsapp_number: "+977 9800000000",
  viber_number: "+977 9800000000",
  menu: [
    {
      id: 1,
      title: "Experiences",
      slug: "experiences",
      children: [
        { id: 11, title: "Day Hikes & Nature Walks", slug: "day-hikes", children: [] },
        { id: 12, title: "Nature & Cultural Experiences", slug: "cultural", children: [] },
        { id: 13, title: "Wellness Treks & Journeys", slug: "wellness-treks", children: [] },
        { id: 14, title: "Weekend Wellness Retreats", slug: "weekend-retreats", children: [] },
        { id: 15, title: "Yoga, Meditation & Spirituality", slug: "yoga-meditation", children: [] },
        { id: 16, title: "Ayurveda & Sound Healing", slug: "ayurveda-sound-healing", children: [] },
      ],
    },
    { id: 2, title: "Destinations", slug: "destinations", children: [] },
    { id: 3, title: "About Us", slug: "about-us", children: [] },
    { id: 4, title: "Journal", slug: "journal", children: [] },
    { id: 5, title: "Contact", slug: "contact", children: [] },
  ],
};

export async function getHeaderData(): Promise<HeaderData | null> {
  if (USE_MOCK_DATA) return MOCK_HEADER;

  try {
    const response = await fetch(API_ENDPOINTS.header, {
      cache: "no-store",
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as {
      success: boolean;
      data: HeaderData;
    };

    return payload.success ? payload.data : null;
  } catch {
    return null;
  }
}

export function mapHeaderMenu(menu: HeaderMenuItem[] = []): NavItem[] {
  return menu.map((item) => ({
    label: item.title,
    href: `/${item.slug}`,
  }));
}

export function getWhatsappHref(number?: string): string | null {
  const digits = number?.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

export function getViberHref(number?: string): string | null {
  const digits = number?.replace(/\D/g, "");
  return digits ? `viber://chat?number=%2B${digits}` : null;
}