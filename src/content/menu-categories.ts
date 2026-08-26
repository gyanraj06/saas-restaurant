export type MenuCategory = {
  label: string;
  slug: string;
};

// Sourced directly from the live site's rendered category tabs (amritpalace.com/menu).
export const menuCategories: MenuCategory[] = [
  { label: "Appetizers", slug: "appetizers" },
  { label: "Chicken", slug: "chicken" },
  { label: "Lamb", slug: "lamb" },
  { label: "Tandoori", slug: "tandoori" },
  { label: "Seafood", slug: "seafood" },
  { label: "Sides & Breads", slug: "sides-breads" },
  { label: "Vegetable", slug: "vegetable" },
  { label: "Desserts", slug: "desserts" },
  { label: "Drinks", slug: "drinks" },
];
