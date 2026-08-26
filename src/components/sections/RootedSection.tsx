import Image from "next/image";

// Matches the live site: the section runs taller than the viewport on desktop
// (135vh, vs a plain full screen below the lg breakpoint), with the heading
// pinned to the top and the paragraph pinned to the bottom via `justify-between`
// — so the paragraph only comes into view after scrolling further into the section.
export function RootedSection() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden lg:h-[135vh]">
      <Image
        src="/images/rooted.avif"
        alt="Dining room interior at Maza Bistrot"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative flex h-full flex-col justify-between px-7 py-[42px]">
        <h2 className="font-display text-[clamp(2rem,6vw,6rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-biege-100">
          Rooted In
          <br />
          Experience
        </h2>

        <p className="max-w-lg font-sans text-xs font-medium leading-relaxed text-biege-100 sm:text-sm">
          Since 1996, Maza Bistrot has been more than a destination for Indian
          cuisine. It has been a space for celebration, connection, and
          tradition reimagined. Each visit is a quiet ritual; the warmth of
          spice, the hum of conversation, the comfort of something familiar yet
          elevated. Whether it&rsquo;s your first time or your fiftieth, we
          believe the best meals are the ones that stay with you long after the
          last bite.
        </p>
      </div>
    </section>
  );
}
