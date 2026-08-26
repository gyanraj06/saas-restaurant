export type MenuDish = {
  name: string;
  price: string;
  description?: string;
};

export type MenuSubgroup = {
  label: string;
  items: MenuDish[];
};

export type MenuCategoryContent = {
  slug: string;
  heading: string;
  tagline: string;
  items?: MenuDish[];
  subgroups?: MenuSubgroup[];
};

// Sourced directly from the live site's rendered menu data (mazza.com/menu).
// Note: the nav tab for the first category reads "Appetizers" (see menu-categories.ts)
// while the on-page section heading reads "Starters" — that mismatch is on the live
// site itself, reproduced here intentionally.
export const menuFull: MenuCategoryContent[] = [
  {
    slug: "appetizers",
    heading: "Starters",
    tagline: "Light starters and shareable bites to begin your meal.",
    items: [
      {
        name: "Vegetable Samosa (V)",
        price: "$7.99",
        description:
          "Crispy turnovers filled with a vibrant mix of spiced potatoes, peas, and a hint of ginger and fenugreek.",
      },
      {
        name: "Bhujia (V)",
        price: "$7.99",
        description:
          "A crunchy snack featuring spinach and thinly sliced onions seasoned with cumin and fenugreek.",
      },
      {
        name: "Samosa Chaat",
        price: "$15.99",
        description:
          "A delightful mix of potato turnovers and chickpeas layered with chopped onions, yogurt, tamarind, and mint chutney, offering a burst of flavors in every bite.",
      },
      {
        name: "Variety Tray",
        price: "$17.99",
        description:
          "A sampler platter perfect for sharing, featuring vegetable samosas, aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.",
      },
      {
        name: "Gobhi Manchurian (V)",
        price: "$16.99",
        description: "Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste.",
      },
      {
        name: "Chilli Chicken",
        price: "$16.99",
        description:
          "Chicken pieces stir-fried with bell peppers, onion, and a blend of ginger, garlic, and chili paste, sprinkled with sesame seeds for an extra crunch.",
      },
      {
        name: "Papadam",
        price: "$4.99",
        description:
          "Crispy, thin lentil wafers served your way- fried for a bold crunch or roasted for a light, airy crisp. Comes with 5 pieces per order.",
      },
    ],
  },
  {
    slug: "chicken",
    heading: "Chicken",
    tagline: "Classic and signature chicken dishes cooked with authentic spices.",
    items: [
      {
        name: "Methi Chicken",
        price: "$19.29",
        description: "Chicken pieces simmered with fenugreek, cream, garlic, and garam masala for a fragrantly spiced dish.",
      },
      {
        name: "Butter Chicken",
        price: "$19.99",
        description: "Chicken cooked in a creamy tomato sauce, a staple dish celebrated for its rich and velvety texture.",
      },
      {
        name: "Chicken Korma",
        price: "$20.49",
        description: "Chicken in a creamy sauce with nuts and a touch of fenugreek, delivering a sweet and savory taste profile.",
      },
      {
        name: "Chicken Curry",
        price: "$19.29",
        description: "A traditional curry richly seasoned with onions, garlic, ginger, and fenugreek, offering deep aromatic flavors.",
      },
      {
        name: "Chicken Biryani",
        price: "$20.99",
        description:
          "Aromatic basmati rice cooked with chicken pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness to this classic dish. Served with rayta.",
      },
      {
        name: "Chicken Tikka Masala",
        price: "$21.99",
        description: "Chicken chunks cooked in a rich tomato sauce with light cream, giving it a magical creamy texture.",
      },
      {
        name: "Chicken Vindaloo",
        price: "$20.29",
        description: "A fiery dish with chicken, chili, tomato, and a hint of coconut, known for its bold spice and tangy flavor.",
      },
    ],
  },
  {
    slug: "lamb",
    heading: "Lamb",
    tagline: "Tender lamb specialties rich in flavor and tradition.",
    items: [
      {
        name: "Rogan Josh",
        price: "$21.99",
        description:
          "Lamb cooked in a rich sauce of yogurt, tomatoes, and garlic, seasoned with a special blend of masala spicers for a deep, complex flavor.",
      },
      {
        name: "Lamb Korma",
        price: "$21.99",
        description: "Lamb in a creamy sauce with nuts, raisins, and a touch of fenugreek delivering a sweet and savory taste profile.",
      },
      {
        name: "Lamb Curry",
        price: "$19.29",
        description:
          "Lamb simmered in a fragrant curry sauce with onions, garlic, ginger, and a hint of fenugreek creating a robust and aromatic dish.",
      },
      {
        name: "Lamb Vindaloo",
        price: "$21.99",
        description: "A spicy and tangy lamb dish with chili, tomato, and coconut known for its vibrant and fiery flavor.",
      },
      {
        name: "Lamb Biryani",
        price: "$22.49",
        description:
          "Aromatic basmati rice cooked with lamb pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness to this classic dish. Served with rayta.",
      },
      {
        name: "Goat Curry",
        price: "$21.99",
        description: "Bone-in goat cooked with ginger, garlic, and onion for an authentic, richly spiced experience.",
      },
    ],
  },
  {
    slug: "tandoori",
    heading: "Tandoori",
    tagline: "Charcoal-grilled favorites from the traditional clay oven.",
    items: [
      {
        name: "Chicken Tikka",
        price: "$23.99",
        description:
          "Boneless chicken pieces marinated in lime juice, vinegar, and yogurt, grilled until perfectly charred for a tangy and tender bite.",
      },
      {
        name: "Seikh Kebab",
        price: "$24.49",
        description:
          "Minced meat kebabs mixed with onions, peppers, and masala spices, skewered and grilled in the tandoor for a rich flavorful experience.",
      },
      {
        name: "Chicken Tandoori",
        price: "$21.79",
        description: "Chicken marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish.",
      },
      {
        name: "Lamb Chops",
        price: "$39.29",
        description:
          "Lamb chops marinated in yogurt with a hint of nutmeg and vinegar, grilled to tender perfection, offering a luxurious and aromatic dish.",
      },
      {
        name: "Mixed Platter",
        price: "$32.49",
        description:
          "A sampler of tandoori favorites, featuring chicken tandoori, chicken tikka, seikh kebab, and a lamb chop. Perfect for sharing.",
      },
    ],
  },
  {
    slug: "seafood",
    heading: "Seafood",
    tagline: "Freshly prepared fish and shrimp with bold seasoning.",
    items: [
      {
        name: "Shrimp Vindaloo",
        price: "$21.79",
        description: "Spicy shrimp dish made with chili, tomato, and coconut, offering a bold and tangy flavor profile.",
      },
      {
        name: "Shrimp Masala",
        price: "$22.99",
        description: "Shrimp tossed in a tomato sauce with peppers, onions, ginger, and garlic.",
      },
      {
        name: "Shrimp Curry",
        price: "$21.49",
        description: "Shrimp cooked in a flavorful curry sauce with onions, garlic, ginger, and a hint of fenugreek.",
      },
    ],
  },
  {
    slug: "sides-breads",
    heading: "Sides & Breads",
    tagline: "Fluffy breads and comforting sides to complete your plate.",
    items: [
      {
        name: "Basmati Rice",
        price: "$4.99",
        description: "Perfectly steamed rice, light, fluffy, and fragrant, serves as an ideal base for any of our robust, flavorful dishes.",
      },
      {
        name: "Dal Soup",
        price: "$4.99",
        description: "Our famous soup made from yellow split pea lentils, simmered with a hint of ginger and garlic.",
      },
      {
        name: "Chickpea Salad",
        price: "$4.99",
        description: "A refreshing mix of chickpeas, iceberg lettuce, sliced red onions, cherry tomatoes, and cilantro.",
      },
      {
        name: "Fried Cabbage",
        price: "$4.99",
        description: "Chopped cabbage sautéed with turmeric cumin, garlic, and ginger, offering delightful and vibrant colors.",
      },
      {
        name: "Bhatura",
        price: "$5.99",
        description: "Deep-fried and puffy, this indulgent bread is light and airy, ideal for pairing with chickpea curries.",
      },
      {
        name: "Naan",
        price: "$3.99",
        description: "Classic leavened flatbread, soft and pillowy, perfect for scooping up curries and gravies.",
      },
      {
        name: "Chili Naan",
        price: "$4.79",
        description: "Spicy flatbread enriched with green chillies and cilantro, providing a fiery twist to traditional naan. Add garlic +($0.99)",
      },
      {
        name: "Tandoori Roti",
        price: "$3.99",
        description: "Whole wheat flatbread baked in a tandoor, offering a robust texture and a smokey flavor.",
      },
      {
        name: "Garlic Naan",
        price: "$4.99",
        description:
          "Garlic-infused flatbread, crisp on the outside, tender on the inside, a delightful accompaniment to any meal. Add mozzarella cheese + ($3.49)",
      },
      {
        name: "Peshawari (Sweet) Naan",
        price: "$7.99",
        description: "A sweet and nutty flatbread filled with cherries, pineapple, coconut flakes, cashews, and raisins.",
      },
    ],
  },
  {
    slug: "vegetable",
    heading: "Vegetable",
    tagline: "Wholesome vegetarian creations full of color and taste.",
    items: [
      {
        name: "Aloo Gobhi (V)",
        price: "$19.29",
        description:
          "Cauliflower and potatoes sautéed with green peas in a traditional seasoning, perfect for those who love a hearty vegetable dish.",
      },
      {
        name: "Paneer Bhurji",
        price: "$19.29",
        description: "Shredded cheese delicately flavored with fenugreek and cilantro, offering a fragrant and satisfying meal.",
      },
      {
        name: "Navrattan Korma",
        price: "$19.49",
        description: "A mix of vegetables including cauliflower, potatoes, and peppers enriched with cashews and raisins in a creamy sauce.",
      },
      {
        name: "Dal Fry (V)",
        price: "$17.99",
        description: "Stir-fried lentils with tomatoes, ginger, and garlic, then simmered with Indian spices for an extra layer of flavor.",
      },
      {
        name: "Palak Paneer",
        price: "$19.49",
        description: "Creamy spinach sauce enveloping soft cheese cubes, a rich and comforting classic.",
      },
      {
        name: "Vegetable Biryani",
        price: "$19.49",
        description:
          "Aromatic basmati rice tossed with cauliflower, tomatoes, snow peas, and potatoes, garnished with nuts and raisins for a crunchy texture. Served with rayta.",
      },
      {
        name: "Paneer Masala",
        price: "$19.29",
        description: "Cheese cubes tossed with tomatoes, onions, and peppers in a vibrant masala sauce full of bold flavors.",
      },
      {
        name: "Channa Masala",
        price: "$18.79",
        description:
          "Tender chickpeas cooked in an onion gravy, bursting with flavor and slow-simmered for a rich, satisfying taste. Add bhatura + ($4.99)",
      },
    ],
  },
  {
    slug: "desserts",
    heading: "Desserts",
    tagline: "Sweet finishes and traditional Indian treats.",
    items: [
      {
        name: "Rice Pudding",
        price: "$6.49",
        description:
          "Creamy basmati rice pudding flavored with cardamom and mixed with a variety of nuts for a comforting and traditional dessert.",
      },
      {
        name: "Gulab Jamun",
        price: "$6.99",
        description: "Soft, deep-fried dumplings soaked in a sweet syrup infused with rose water and coconut.",
      },
      {
        name: "Mango Ice Cream",
        price: "$7.29",
        description:
          "Smooth ice cream blended with ripe Kesar mangoes, enriched with dairy and sweetened with honey, offering a tropical delight.",
      },
      {
        name: "Mango Cheesecake",
        price: "$9.79",
        description:
          "A creamy cheesecake layer topped with lush mango mousse, sprinkled with almonds and resting on a graham cracker base for a decadent finish.",
      },
    ],
  },
  {
    slug: "drinks",
    heading: "Drinks",
    tagline: "Curated cocktails, wine, and beer to complement your meal.",
    subgroups: [
      {
        label: "Zero Proof",
        items: [
          { name: "Tamarind Lemonade", price: "$6.29" },
          { name: "Mint Cucumber Soda", price: "$5.99" },
          { name: "Ginger Peach Soda", price: "$6.49" },
          { name: "Lychee Spritzer", price: "$5.99" },
        ],
      },
      {
        label: "Cocktails",
        items: [
          { name: "Tipsy Lassi", price: "$10.99", description: "Our renowned signature mango lassi with a boozy rum kick." },
          { name: "Lychee-Tini", price: "$11.29", description: "Fresh lychees and vodka; shaken not stirred." },
          { name: "Mango Monsoon", price: "$10.99", description: "Refreshing kesar mango puree and vodka shaken to perfection." },
          { name: "Indian Summer", price: "$11.99", description: "Melon liqueur, rum, and fresh pineapple juice unite for a refreshing taste." },
          { name: "Cucumber Rus", price: "$11.99", description: "Invigorating fizzy blend of mint, cucumbers, and gin." },
          { name: "Ginger Whiskey Mojito", price: "$11.99", description: "As the name implies, a whiskey mojito enhanced with ginger." },
          {
            name: "Tamarind Margarita",
            price: "$12.49",
            description: "Tamarind with our signature in-house mix for a distinct take on the classic margarita. Pro-tip: make it spicy!",
          },
          { name: "Smoked Old Fashion", price: "$13.99", description: "The classic cocktail smoked to excellence." },
        ],
      },
      {
        label: "Beer",
        items: [
          { name: "Corona", price: "$4.99" },
          { name: "Yuengling", price: "$4.99" },
          { name: "Heineken", price: "$4.99" },
          { name: "Michelob Ultra", price: "$4.99" },
          { name: "Kingfisher", price: "$6.99" },
          { name: "Taj", price: "$10.99" },
          { name: "Haywards 5000", price: "$11.99" },
        ],
      },
      {
        label: "Red Wine",
        items: [
          { name: "Sula Vineyards Shiraz, India", price: "$29.99" },
          { name: "Colombia Crest Merlot, Washington State", price: "$31.99" },
          { name: "Josh Cellars Cabernet Sauvignon, California", price: "$41.99" },
          { name: "La Crema Pinot Noir, California", price: "$48.99" },
          { name: "Caymus Cabernet Sauvignon, Napa", price: "$89.99" },
        ],
      },
      {
        label: "White Wine",
        items: [
          { name: "Rodney Strong Chardonnay, Sonoma", price: "$38.99" },
          { name: "Sula Vineyards Chenin Blanc, India", price: "$29.99" },
          { name: "Barone Fini Pinot Grigio, Italy", price: "$32.99" },
          { name: "Pouilly-Fuisse, France", price: "$49.99" },
        ],
      },
      {
        label: "By The Glass",
        items: [
          { name: "Chardonnay", price: "$9.29" },
          { name: "Pinot Grigio", price: "$9.29" },
          { name: "Riesling", price: "$8.99" },
          { name: "Cabernet Sauvignon, India", price: "$9.49" },
          { name: "Cabernet Sauvignon", price: "$9.29" },
          { name: "Merlot", price: "$8.99" },
          { name: "Pinot Noir", price: "$9.29" },
          { name: "Shiraz, India", price: "$9.29" },
          { name: "Moscato", price: "$8.99" },
          { name: "Sangria", price: "$8.99" },
        ],
      },
    ],
  },
];
