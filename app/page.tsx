import { SiteHeader } from "@/components/layouts/site-header";
import { BannerSection } from "@/components/Homepage/hero-section";
import { FeaturesBarSection } from "@/components/Homepage/features-bar-section";
import { ExperiencesSection } from "@/components/Homepage/experiences-section";
import { JourneysSection } from "@/components/Homepage/journeys-section";
import { WhyTravelSection } from "@/components/Homepage/why-travel-section";
import { LocalFavoritesSection } from "@/components/Homepage/local-favorites-section";
import { TestimonialsSection } from "@/components/Homepage/testimonials-section";
import {
  getHeaderData,
  getViberHref,
  getWhatsappHref,
  mapHeaderMenu,
} from "@/lib/api/header";
import { getHomepageData } from "@/lib/api/homepage";

export default async function Home() {
  const [header, homepage] = await Promise.all([
    getHeaderData(),
    getHomepageData(),
  ]);

  return (
    <>
      <SiteHeader
        navigation={mapHeaderMenu(header?.menu)}
        logo={header?.header_logo || null}
        whatsappHref={getWhatsappHref(header?.whatsapp_number)}
        viberHref={getViberHref(header?.viber_number)}
      />

      <BannerSection hero={homepage?.hero} />
      <FeaturesBarSection features={homepage?.features} />
      <ExperiencesSection experiences={homepage?.experiences} />
      <JourneysSection journeys={homepage?.journeys}/>
      <WhyTravelSection why-travel={homepage?.why_travel} />  
      <LocalFavoritesSection localFavorites={homepage?.localFavorites} />
      <TestimonialsSection testimonials={homepage?.testimonials} />
      </>
  );
}