"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Matches the live site's scroll-triggered reveal: the video sits inset within a
// cream-colored frame and expands to full-bleed as the section scrolls into view.
const MAX_INSET = 28; // px

export function SpiritSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function computeProgress() {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(Math.max((vh - rect.top) / vh, 0), 1);
        setProgress(p);
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeProgress);
      }
    }

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const inset = MAX_INSET * (1 - progress);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[640px] w-full bg-biege-100"
    >
      <div className="absolute overflow-hidden" style={{ inset: `${inset}px` }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/spirit-background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative flex h-full flex-col justify-start px-7 pt-24">
          <h2 className="font-display text-[clamp(1.75rem,4vw,4.25rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-biege-100">
            The Spirit Of
            <br />
            Indian Dining
          </h2>

          <p className="mt-5 max-w-md font-sans text-sm font-medium text-biege-100/90 sm:text-base">
            From warm hospitality to bold flavors, every detail tells a story.
          </p>

          <div className="mt-8 w-fit border-2 border-biege-100 p-1">
            <Link
              href="/about"
              className="flex items-center justify-center bg-khaki-300 px-8 py-3.5 font-sans text-sm font-medium text-dark-800 transition-colors hover:bg-biege-100"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
