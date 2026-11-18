import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeaderProps } from "@/lib/types/navigation";

export default function HeaderDesktop({ items, logo, chat }: HeaderProps) {
  return (
    <div className="hidden h-[101px] lg:block">
      <div className="container-header">
        <div className="flex h-[97px] items-center justify-between gap-4">
          {logo}

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-5 xl:gap-[30px]"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-trim font-primary text-base font-medium leading-4 tracking-[-0.32px] text-heading hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/experiences">Explore Experiences</Button>
            {chat}
          </div>
        </div>
      </div>
    </div>
  );
}