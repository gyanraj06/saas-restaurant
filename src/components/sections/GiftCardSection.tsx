"use client";

import Link from "next/link";
import { MaskedChars, useRevealOnVisible } from "@/components/animations/MaskedChars";

// The card visual on the live site is a Lottie-wrapped 200-frame image sequence;
// re-encoded here as a looping mp4 (see public/videos/gift-cards.mp4).
export function GiftCardSection() {
  const { ref, start } = useRevealOnVisible<HTMLHeadingElement>();

  return (
    <section className="w-full bg-[#DBD1BF] px-7 py-20 sm:py-28">
      <h2
        ref={ref}
        className="text-center font-display text-[clamp(2rem,6vw,6rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800"
      >
        <MaskedChars text="Gift A Taste" start={start} />
        <br />
        <MaskedChars text="Of Tradition" start={start} startIndex={10} />
      </h2>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-10 sm:py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
        <p className="order-2 text-center font-sans text-xs font-medium uppercase tracking-wide text-dark-800 sm:text-sm lg:order-1 lg:justify-self-end lg:text-left">
          Share the experience.
        </p>

        <div className="relative order-1 mx-auto aspect-square w-full max-w-[560px] overflow-hidden bg-[#DBD1BF] lg:order-2">
          <video
            className="h-full w-full object-cover"
            src="/videos/gift-cards.mp4"
            poster="/images/gift-cards-poster.avif"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <p className="order-3 text-center font-sans text-xs font-medium uppercase tracking-wide text-dark-800 sm:text-sm lg:justify-self-start lg:text-right">
          Give the flavors they&rsquo;ll remember.
        </p>
      </div>

      <div className="mx-auto mt-14 flex max-w-md flex-col items-center text-center">
        <p className="font-sans text-sm font-medium leading-relaxed text-dark-800/80 sm:text-base">
          Whether it&rsquo;s a birthday, celebration, or a simple &ldquo;thank
          you,&rdquo; an Maza Bistrot gift card brings people together over
          timeless flavors.
        </p>

        <div className="mt-6 w-fit border-2 border-dark-800 p-1">
          <Link
            href="/gift-cards"
            className="flex items-center justify-center bg-dark-800 px-8 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
