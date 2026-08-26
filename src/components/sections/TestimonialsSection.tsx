"use client";

import { StarIcon, GoogleIcon } from "@/components/icons";
import { MaskedChars, useRevealOnVisible } from "@/components/animations/MaskedChars";
import { testimonials } from "@/content/testimonials";

function TestimonialCard({
  platform,
  quote,
  author,
}: {
  platform: string;
  quote: string;
  author: string;
}) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col border border-dark-800/15 sm:w-[380px]">
      <div className="flex items-center justify-between border-b border-dark-800/15 px-6 py-4">
        <div className="flex gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-3.5 w-3.5" />
          ))}
        </div>
        <p className="font-sans text-xs font-medium text-dark-800/60">{platform}</p>
      </div>

      <p className="flex-1 px-6 py-6 font-display text-lg font-light leading-snug text-dark-800">
        {quote}
      </p>

      <div className="px-6 pb-6">
        <p className="font-sans text-xs font-medium uppercase tracking-wide text-dark-800/50">
          Author
        </p>
        <p className="font-sans text-sm font-semibold text-dark-800">{author}</p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { ref, start } = useRevealOnVisible<HTMLDivElement>();

  return (
    <section className="w-full overflow-hidden bg-biege-100 py-20 sm:py-28">
      <div
        ref={ref}
        className="flex flex-col gap-10 px-7 lg:flex-row lg:items-start lg:justify-between"
      >
        <h2 className="font-display text-[clamp(2rem,6vw,6rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-dark-800">
          <MaskedChars text="What Our" start={start} />
          <br />
          <MaskedChars text="Guests Say" start={start} startIndex={7} />
        </h2>

        <div className="w-full border border-dark-800/20 px-6 py-5 sm:w-[380px]">
          <div className="flex items-center justify-between border-b border-dark-800/15 pb-4">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <GoogleIcon className="h-5 w-5 shrink-0" />
          </div>
          <div className="mt-4 flex items-center gap-2.5">
            <p className="font-display text-2xl font-light leading-none text-dark-800">
              4.7<span className="text-sm">/5</span>
            </p>
            <div className="leading-tight">
              <p className="font-sans text-sm font-bold text-dark-800">Excellent</p>
              <p className="font-sans text-xs text-dark-800/70">Based on 3,576 reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
