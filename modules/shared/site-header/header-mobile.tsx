"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeaderProps } from "@/lib/types/navigation";

export default function HeaderMobile({ items, logo, chat }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="container-header">
        <div className="flex h-[72px] items-center justify-between gap-3">
          {logo}

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <Button href="/experiences">Explore Experiences</Button>
            </div>

            {chat}

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="cursor-pointer text-heading hover:text-primary"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-[360px] flex-col bg-white transition-[transform,visibility] duration-300 ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-black/10 px-5">
          <span className="font-primary text-base font-semibold text-heading">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="cursor-pointer text-heading hover:text-primary"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-black/10 px-5 py-4 font-primary text-base font-medium text-heading hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 border-t border-black/10 p-5 md:hidden">
          <Button href="/experiences" onClick={close}>
            Explore Experiences
          </Button>
        </div>
      </aside>
    </div>
  );
}