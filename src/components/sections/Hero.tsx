"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon, GoogleIcon } from "@/components/icons";
import { MaskedChars } from "@/components/animations/MaskedChars";

export function Hero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Double rAF so the browser paints the initial (opacity: 0) state before
    // we flip to visible — otherwise the transition can get skipped on mount.
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStart(true));
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[720px] w-full flex-col overflow-hidden">
      <Image
        src="/images/hero-background.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(#101010, rgba(16,16,16,0.2))" }}
      />

      <div className="relative flex h-full flex-col px-7">
        <div className="flex flex-1 flex-col justify-center pt-20">
          <h1 className="text-center font-display text-[clamp(2.5rem,8vw,10rem)] font-light uppercase leading-[0.8] tracking-[-0.04em] text-biege-100">
            <MaskedChars text="Flavors" start={start} />
          </h1>

          <div className="mt-2 flex flex-col items-center gap-4 sm:mt-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
            <p className="order-2 justify-self-end font-sans text-[0.85em] font-medium uppercase tracking-wide text-biege-100 sm:order-1 sm:text-sm">
              <MaskedChars text="Serving Central Florida" start={start} />
            </p>
            <h1 className="order-1 text-center font-display text-[clamp(2.5rem,8vw,10rem)] font-light uppercase leading-[0.8] tracking-[-0.04em] text-biege-100 sm:order-2">
              <MaskedChars text="That Stay" start={start} startIndex={7} />
            </h1>
            <p className="order-3 justify-self-start font-sans text-[0.85em] font-medium uppercase tracking-wide text-biege-100 sm:text-sm">
              <MaskedChars text="Established 1996" start={start} />
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-14">
          {/* TODO: confirm this marketing copy with the business before publishing. */}
          <p className="max-w-[443px] font-sans text-sm font-medium leading-relaxed text-biege-50">
            At Maza Bistrot, every dish is a tribute to tradition and every
            moment is crafted for today. We bring together the warmth of Indian
            hospitality, the richness of timeless flavors, and the pace of
            modern life.
          </p>

          <div className="w-full max-w-[280px] bg-biege-100 px-5 py-4 text-dark-800 sm:w-[280px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <GoogleIcon className="h-5 w-5 shrink-0" />
            </div>
            <div className="mt-2 flex items-center gap-2.5">
              <p className="font-display text-2xl font-light leading-none">
                4.7<span className="text-sm">/5</span>
              </p>
              <div className="leading-tight">
                <p className="font-sans text-sm font-bold">Excellent</p>
                <p className="font-sans text-xs text-dark-800/70">
                  Based on 3,576 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
