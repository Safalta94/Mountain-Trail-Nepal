import { SiteHeader } from "@/components/layouts/site-header";
import { BannerSection } from "@/components/Homepage/hero-section";
import {
  getHeaderData,
  getViberHref,
  getWhatsappHref,
  mapHeaderMenu,
} from "@/lib/api/header";
import { getHomepageData } from "@/lib/api/homepage";
import { FeaturesBarSection } from "@/lib/api/homepage";

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
      <FeaturesBarSection features={data?.features} />
    </>
  );
}