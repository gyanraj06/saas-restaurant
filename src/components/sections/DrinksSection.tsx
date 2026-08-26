"use client";

import Image from "next/image";
import Link from "next/link";
import { drinksMenu } from "@/content/drinks-menu";
import { MaskedChars, useRevealOnVisible } from "@/components/animations/MaskedChars";

// Matches the live site: the left panel pins with `sticky` for the height of the
// section while the two stacked photos on the right keep scrolling past it.
export function DrinksSection() {
  const { ref, start } = useRevealOnVisible<HTMLDivElement>();

  return (
    <section className="flex w-full flex-col bg-biege-100 lg:flex-row">
      <div className="flex w-full flex-col justify-between bg-biege-100 px-7 pb-5 pt-6 lg:sticky lg:top-0 lg:h-screen lg:w-[45%]">
        <div ref={ref}>
          <h2 className="font-display text-[clamp(1.75rem,4vw,4.25rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800">
            <MaskedChars text="Drinks That" start={start} />
            <br />
            <MaskedChars text="Complete" start={start} startIndex={10} />
            <br />
            <MaskedChars text="The Experience" start={start} startIndex={18} />
          </h2>

          <p className="mt-5 max-w-md font-sans text-sm font-medium leading-relaxed text-dark-800/80 sm:text-base">
            From house-special cocktails to traditional Indian lassi, every
            drink is designed to pair perfectly with your meal.
          </p>

          <div className="mt-4 w-fit border-2 border-dark-800 p-1">
            <Link
              href="/menu"
              className="flex items-center justify-center bg-dark-800 px-8 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
            >
              Open Menu
            </Link>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          {drinksMenu.map((item) => (
            <div key={item.name} className="border-t border-dark-800/20 py-3">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-sans text-sm font-medium text-dark-800">
                  {item.name}
                </p>
                <p className="whitespace-nowrap font-sans text-sm font-medium text-dark-800">
                  {item.price}
                </p>
              </div>
              <p className="mt-1 font-sans text-xs font-medium text-dark-800/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="order-first hidden w-full flex-col gap-1.5 py-1.5 pr-1.5 sm:flex lg:order-none lg:w-[55%]">
        <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-auto sm:h-[76em] lg:h-[54em]">
          <Image
            src="/images/cocktails-1.avif"
            alt="Bartender pouring a cocktail into a coupe glass at Maza Bistrot"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-auto sm:h-[76em] lg:h-[54em]">
          <Image
            src="/images/cocktails-2.avif"
            alt="Smoked Old Fashioned cocktail at Maza Bistrot"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
