"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        // `<html>` is `h-full` (pinned to viewport height), so its own box never
        // grows with content and Lenis's ResizeObserver-based limit never updates,
        // capping scroll short of the real bottom whenever content height changes
        // after mount (e.g. Fast Refresh). `document.body` only has `min-h-full`,
        // so its box tracks real content height.
        content: typeof document !== "undefined" ? document.body : undefined,
      }}
    >
      {children}
    </ReactLenis>
  );
}
