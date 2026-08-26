"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const CHAR_STAGGER_MS = 68;
const CHAR_DURATION_MS = 550;
// Approximates GSAP's expo.out — fast start, long gentle settle.
const CHAR_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

// Masked reveal, per character: each letter sits inside an `overflow-hidden`
// box (the mask) and the letter itself slides in from the left into view, so
// it's clipped rather than faded — same technique as osmo.supply's masked
// text reveal, just split down to character granularity instead of line/word
// (and re-oriented to a horizontal wipe instead of their vertical one).
// `startIndex` lets a heading split across multiple elements (e.g. "Flavors"
// then "That Stay") keep counting characters continuously, so every block
// reveals in lockstep rather than one after another.
export function MaskedChars({
  text,
  start,
  startIndex = 0,
}: {
  text: string;
  start: boolean;
  startIndex?: number;
}) {
  const words = text.split(" ");
  let charIndex = startIndex;
  return (
    <>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          {word.split("").map((char, ci) => {
            const delay = charIndex * CHAR_STAGGER_MS;
            charIndex += 1;
            return (
              <span key={ci} className="inline-block overflow-hidden align-top">
                <span
                  className="inline-block transition-transform motion-reduce:transition-none"
                  style={{
                    transitionDelay: `${delay}ms`,
                    transitionDuration: `${CHAR_DURATION_MS}ms`,
                    transitionTimingFunction: CHAR_EASE,
                    transform: start ? "translateX(0%)" : "translateX(-110%)",
                  }}
                >
                  {char}
                </span>
              </span>
            );
          })}
          {wi < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}

// Triggers `start` the first time the returned ref scrolls into view, then
// stops watching — for reveals on sections that load below the fold.
export function useRevealOnVisible<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, start };
}
