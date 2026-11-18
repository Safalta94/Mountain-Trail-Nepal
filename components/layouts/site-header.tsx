import Image from "next/image";
import Link from "next/link";
import ChatLinks from "@/modules/shared/site-header/chat-links";
import HeaderDesktop from "@/modules/shared/site-header/header-desktop";
import HeaderMobile from "@/modules/shared/site-header/header-mobile";
import type { NavItem } from "@/lib/types/navigation";

const FALLBACK_NAVIGATION: NavItem[] = [
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/about-us" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

interface SiteHeaderProps {
  navigation?: NavItem[];
  logo?: { url: string; alt: string } | null;
  whatsappHref?: string | null;
  viberHref?: string | null;
}

export function SiteHeader({
  navigation,
  logo,
  whatsappHref,
  viberHref,
}: SiteHeaderProps) {
  const items = navigation?.length ? navigation : FALLBACK_NAVIGATION;

  const logoLink = (
    <Link href="/" className="block shrink-0">
      {logo && (
        <Image
          src={logo.url}
          alt={logo.alt}
          width={115}
          height={79}
          priority
          className="h-auto w-20 md:w-24 lg:w-[115px]"
        />
      )}
    </Link>
  );

  const chat = <ChatLinks whatsappHref={whatsappHref} viberHref={viberHref} />;

  return (
    <header className="relative z-50 w-full bg-white">
      <HeaderDesktop items={items} logo={logoLink} chat={chat} />
      <HeaderMobile items={items} logo={logoLink} chat={chat} />
    </header>
  );
}