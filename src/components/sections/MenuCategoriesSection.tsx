"use client";

import { menuFull, type MenuDish } from "@/content/menu-full";
import { MaskedChars, useRevealOnVisible } from "@/components/animations/MaskedChars";

// Matches the live site: within each category row, the heading + tagline column
// is `sticky top-*` against its own row (which stretches to the height of the
// dish grid next to it via CSS Grid's default item-stretch). So it pins under the
// header while you scroll through that category's dishes, then releases the
// moment the row ends and the next category's heading takes over — the same
// per-row-sticky idiom already used for the drinks list on the homepage
// (see DrinksSection.tsx).
function DishGrid({ items }: { items: MenuDish[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={item.name}
          className={`px-7 py-5 sm:px-8 ${i > 0 ? "border-t border-dark-800/15" : ""} ${
            i === 1 ? "sm:border-t-0" : ""
          } ${i % 2 === 0 ? "sm:border-r sm:border-dark-800/15" : ""}`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-sans text-sm font-semibold text-dark-800">{item.name}</p>
            <p className="whitespace-nowrap font-sans text-sm font-semibold text-dark-800">{item.price}</p>
          </div>
          {item.description ? (
            <p className="mt-1.5 font-sans text-xs leading-relaxed text-dark-800/65 sm:text-sm">
              {item.description}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

// Each category's heading reveals independently the first time it scrolls
// into view, so a hook instance is needed per category — hence its own
// component rather than inlining the animation in the `menuFull.map` below.
function CategoryHeading({ text }: { text: string }) {
  const { ref, start } = useRevealOnVisible<HTMLHeadingElement>();
  return (
    <h2 ref={ref} className="font-display text-4xl font-light text-dark-800 sm:text-5xl">
      <MaskedChars text={text} start={start} />
    </h2>
  );
}

export function MenuCategoriesSection() {
  return (
    <div className="bg-biege-100 pb-28">
      {menuFull.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          className="scroll-mt-24 border-t border-dark-800/15 lg:grid lg:grid-cols-[minmax(220px,0.8fr)_2fr]"
        >
          <div className="px-7 py-10 lg:sticky lg:top-24 lg:self-start lg:py-14">
            <CategoryHeading text={category.heading} />
            <p className="mt-3 max-w-xs font-sans text-sm text-dark-800/70">{category.tagline}</p>
          </div>

          <div className="lg:border-l lg:border-dark-800/15">
            {category.subgroups
              ? category.subgroups.map((subgroup, i) => (
                  <div key={subgroup.label} className={i > 0 ? "border-t border-dark-800/15" : ""}>
                    <p className="px-7 pt-6 font-sans text-xs font-medium uppercase tracking-[0.2em] text-dark-800/50 sm:px-8">
                      {subgroup.label}
                    </p>
                    <DishGrid items={subgroup.items} />
                  </div>
                ))
              : category.items && <DishGrid items={category.items} />}
          </div>
        </section>
      ))}
    </div>
  );
}
