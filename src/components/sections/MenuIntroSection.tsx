"use client";

import Image from "next/image";
import { Sacramento } from "next/font/google";
import { MenuCategoryNav } from "@/components/sections/MenuCategoryNav";
import { MaskedChars, useRevealOnVisible } from "@/components/animations/MaskedChars";

// Matches the live site's handwritten-script tagline under the "Menu" heading.
// No cursive display font ships with the project's self-hosted set, so this is
// pulled from Google Fonts (self-hosted by Next at build time).
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export function MenuIntroSection() {
  const { ref, start } = useRevealOnVisible<HTMLDivElement>();

  return (
    <div className="relative bg-biege-100">
      <div className="px-7 pb-14 pt-36 sm:pt-44 lg:pb-20 lg:pt-52">
        <div
          ref={ref}
          className="flex flex-col items-center gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6"
        >
          <p className="order-2 justify-self-end font-sans text-[10px] font-medium uppercase tracking-wide text-dark-800 sm:order-1 sm:text-xs">
            <MaskedChars text="Spices Of India" start={start} />
          </p>
          <h1 className="order-1 font-display text-[clamp(2.875rem,7.5vw,5.4375rem)] font-light uppercase leading-[0.9] tracking-[-0.03em] text-dark-800 sm:order-2">
            <MaskedChars text="Menu" start={start} />
          </h1>
          <p className="order-3 justify-self-start font-sans text-[10px] font-medium uppercase tracking-wide text-dark-800 sm:text-xs">
            <MaskedChars text="New Discoveries" start={start} />
          </p>
        </div>

        <p
          className={`${sacramento.className} mt-8 text-center text-xl leading-none text-dark-800 sm:mt-10 sm:text-2xl lg:text-3xl`}
        >
          Every dish tells a story of spice, care, and heritage&hellip;
        </p>
      </div>

      <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[85vh]">
        <Image
          src="/images/menu.avif"
          alt="Fresh naan breads baked in a traditional clay tandoor at Maza Bistrot"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="px-7 py-14 sm:py-20 lg:py-28">
        <p className="max-w-2xl font-display text-base font-light leading-snug text-dark-800 sm:text-lg lg:text-xl">
          A symphony of flavors, crafted with care. At Maza Bistrot, every
          dish is a reflection of tradition and creativity — from the spices
          that awaken your senses to the sweetness that lingers at the end.
          Pair your meal with curated drinks and let the journey unfold.
        </p>
      </div>

      <MenuCategoryNav />
    </div>
  );
}
