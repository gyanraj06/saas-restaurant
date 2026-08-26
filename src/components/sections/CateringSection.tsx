import Image from "next/image";
import { cateringFeatures } from "@/content/catering-features";

export function CateringSection() {
  return (
    <section className="w-full bg-taupe-400 px-7 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[clamp(2rem,6vw,6rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800">
          Catering
        </h2>

        <div className="mt-2 flex flex-col items-center gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
          <p className="order-2 justify-self-end font-sans text-xs font-medium uppercase tracking-wide text-dark-800 sm:order-1 sm:text-sm">
            Exceptional Food
          </p>
          <h2 className="order-1 font-display text-[clamp(2rem,6vw,6rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800 sm:order-2 [font-kerning:none]">
            The Amrit Way
          </h2>
          <p className="order-3 justify-self-start font-sans text-xs font-medium uppercase tracking-wide text-dark-800 sm:text-sm">
            Anywhere
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-sm font-medium leading-relaxed text-dark-800/80 sm:text-base">
          Whether you&apos;re hosting a wedding, corporate gathering, or private
          celebration, our catering brings the warmth of Indian hospitality
          straight to your table. From full-service spreads to curated menus,
          Maza Bistrot delivers flavor, style, and care — wherever the occasion
          takes you.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
        {cateringFeatures.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="relative aspect-square w-full">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 font-display text-2xl font-light text-dark-800">
              {feature.title}
            </h3>
            <p className="mx-auto mt-2 max-w-xs font-sans text-sm font-medium leading-relaxed text-dark-800/75">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
