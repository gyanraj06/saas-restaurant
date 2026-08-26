"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

// Next.js resets the native scroll position to the top on navigation, but Lenis
// keeps its own remembered target from the previous page and smoothly "corrects"
// back toward it on the next animation frame — so a page navigated to (e.g. via
// the header's "Menu" link) can open mid-scroll instead of at the top. Snapping
// Lenis to 0 immediately whenever the route changes keeps it in sync.
function ScrollToTopOnNavigate() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

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
      <ScrollToTopOnNavigate />
      {children}
    </ReactLenis>
  );
}
