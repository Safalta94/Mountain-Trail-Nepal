"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number; 
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hold = el.animate([{ opacity: 0 }, { opacity: 0 }], {
      duration: 1,
      fill: "forwards",
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return;
        hold.cancel();
        el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 900,
          delay,
          easing: "cubic-bezier(0.4, 0, 0.6, 1)",
          fill: "backwards",
        });
        el.animate(
          [{ transform: "translateY(30px)" }, { transform: "none" }],
          {
            duration: 700,
            delay,
            easing: "cubic-bezier(0.25, 0.1, 0.3, 1)",
            fill: "backwards",
          }
        );
        io.disconnect(); // play once
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      hold.cancel();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}