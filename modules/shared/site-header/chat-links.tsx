import Image from "next/image";

interface ChatLinksProps {
  whatsappHref?: string | null;
  viberHref?: string | null;
}

const ICON = "size-10 lg:size-[47px]";

export default function ChatLinks({ whatsappHref, viberHref }: ChatLinksProps) {
  return (
    <div className="flex items-center">
      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="shrink-0"
        >
          <Image src="/images/whatsapp.svg" alt="" width={47} height={47} className={ICON} />
        </a>
      )}

      {viberHref && (
        <a href={viberHref} aria-label="Chat on Viber" className="-ml-[9px] shrink-0">
          <Image src="/images/viber.svg" alt="" width={47} height={47} className={ICON} />
        </a>
      )}
    </div>
  );
}