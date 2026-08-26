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
        // Without this, clicking an `<a href="#id">` (e.g. the menu category
        // pills) lets the browser jump natively, but Lenis's own raf loop then
        // snaps the scroll position straight back to where it thinks it should
        // be — the anchor click visually does nothing. This routes anchor
        // clicks through `lenis.scrollTo()` instead, which also respects each
        // target's `scroll-margin-top` (see `scroll-mt-*` on the menu sections).
        anchors: true,
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
