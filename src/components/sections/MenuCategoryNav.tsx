import { menuCategories } from "@/content/menu-categories";

// Matches the live site: a floating pill, inset from the viewport edges (not a
// full-width bar), fixed to the bottom of the screen so it stays constant while
// the rest of the page scrolls underneath it. Horizontally scrollable on mobile
// since 9 tabs don't fit a narrow viewport.
export function MenuCategoryNav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-20 flex justify-center px-4 sm:bottom-8">
      <nav
        aria-label="Menu categories"
        className="pointer-events-auto max-w-full overflow-x-auto bg-amber-500 shadow-lg shadow-black/25 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-w-4xl"
      >
        <div className="flex w-max divide-x divide-dark-800/15">
          {menuCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="flex shrink-0 items-center justify-center whitespace-nowrap px-5 py-3.5 font-display text-[11px] font-bold text-dark-800 transition-colors hover:bg-dark-800 hover:text-biege-100"
            >
              {category.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
