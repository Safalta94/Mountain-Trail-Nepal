"use client";

import type { MouseEvent, ReactNode } from "react";

const MAX_SHIFT = 8; // how far the photo can drift, in px

interface DriftMediaProps {
  className?: string;
  children: ReactNode;
}

export function DriftMedia({ className, children }: DriftMediaProps) {
  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const box = e.currentTarget.getBoundingClientRect();

    // Cursor position inside the photo, from -0.5 (left/top) to 0.5 (right/bottom)
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;

    // The photo moves against the cursor. CSS does the actual animation.
    e.currentTarget.style.setProperty("--drift-x", `${-x * MAX_SHIFT * 2}px`);
    e.currentTarget.style.setProperty("--drift-y", `${-y * MAX_SHIFT * 2}px`);
  }

  return (
    <div className={className} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}