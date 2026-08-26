export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

// Sourced directly from the live site's rendered menu data (amritpalace.com).
export const signaturePlates: MenuItem[] = [
  {
    name: "Variety Tray",
    price: "$17.99",
    description:
      "A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas, aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.",
  },
  {
    name: "Butter Chicken",
    price: "$19.99",
    description:
      "Chicken cooked in a creamy tomato sauce, a staple dish celebrated for its rich and velvety texture.",
  },
  {
    name: "Lamb Curry",
    price: "$19.29",
    description:
      "Lamb simmered in a fragrant curry sauce with onions, garlic, ginger, and a hint of fenugreek creating a robust and aromatic dish.",
  },
  {
    name: "Palak Paneer",
    price: "$19.49",
    description: "Creamy spinach sauce enveloping soft cheese cubes, a rich and comforting classic.",
  },
  {
    name: "Chicken Tandoori",
    price: "$21.79",
    description:
      "Chicken marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish.",
  },
  {
    name: "Chicken Tikka Masala",
    price: "$21.99",
    description:
      "Chicken chunks cooked in a rich tomato sauce with light cream, giving it a magical creamy texture.",
  },
  {
    name: "Gobhi Manchurian (V)",
    price: "$15.99",
    description: "Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste.",
  },
  {
    name: "Aloo Gobhi (V)",
    price: "$19.29",
    description:
      "Cauliflower and potatoes sautéed with green peas in a traditional seasoning, perfect for those who love a hearty vegetable dish.",
  },
];
