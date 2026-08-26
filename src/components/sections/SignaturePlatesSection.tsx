"use client";

import Link from "next/link";
import Image from "next/image";
import { ForkKnifeIcon } from "@/components/icons";
import { signaturePlates } from "@/content/signature-menu";
import { reserveLocations } from "@/content/nav";
import { MaskedChars, useRevealOnVisible } from "@/components/animations/MaskedChars";

export function SignaturePlatesSection() {
  const { ref, start } = useRevealOnVisible<HTMLElement>();

  return (
    <section ref={ref} className="flex w-full flex-col bg-biege-100 lg:flex-row">
      <div className="w-full bg-dark-800 p-6 lg:w-[45%] lg:p-7">
        <div className="bg-amber-500">
          <div className="flex items-start justify-between px-5 pt-6">
            <h3 className="font-display text-[clamp(1.75rem,4vw,4.25rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800">
              <MaskedChars text="Signature" start={start} />
              <br />
              <MaskedChars text="Plates" start={start} startIndex={9} />
            </h3>
            <ForkKnifeIcon className="mt-2 h-6 w-6 shrink-0 text-dark-800" />
          </div>

          <div className="mt-4">
            {signaturePlates.map((item) => (
              <div
                key={item.name}
                className="border-t border-dark-800/20 px-5 py-3"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-sans text-base font-medium text-dark-800">
                    {item.name}
                  </p>
                  <p className="whitespace-nowrap font-sans text-base font-medium text-dark-800">
                    {item.price}
                  </p>
                </div>
                <p className="mt-1 font-sans text-sm font-medium text-dark-800/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="px-5 pb-6 pt-5">
            <div className="w-full border-2 border-dark-800 p-1">
              <Link
                href="/menu"
                className="flex w-full items-center justify-center bg-dark-800 px-8 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col lg:w-[55%]">
        <div className="p-7 lg:p-10">
          <h3 className="font-display text-[clamp(1.75rem,4vw,4.25rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800">
            <MaskedChars text="Signature Dishes." start={start} />
            <br />
            <MaskedChars text="Classic Roots." start={start} startIndex={16} />
          </h3>

          <p className="mt-5 max-w-lg font-sans text-sm font-medium leading-relaxed text-dark-800/80 sm:text-base">
            Every item on our menu reflects decades of tradition — recipes
            passed down, refined through experience, and thoughtfully adapted
            for today&apos;s palate. From bold, aromatic curries to delicate
            tandoori finishes, our dishes are crafted to honor heritage while
            welcoming every kind of guest — whether it&apos;s your first taste
            or a family favorite.
          </p>

          <div className="mt-8 w-fit border-2 border-dark-800 p-1">
            <a
              href={reserveLocations[0].href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-dark-800 px-8 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="relative mt-auto aspect-[4/3] w-full">
          <Image
            src="/images/third.avif"
            alt="Signature dishes at Maza Bistrot"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
