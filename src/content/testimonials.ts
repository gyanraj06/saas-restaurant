export type Testimonial = {
  platform: string;
  quote: string;
  author: string;
};

// Sourced directly from the live site's rendered reviews section (amritpalace.com).
export const testimonials: Testimonial[] = [
  {
    platform: "MapQuest",
    quote:
      "Unassuming on the outside, GORGEOUS on the inside. I was dining alone and it was just stellar.",
    author: "Marie R.",
  },
  {
    platform: "Google",
    quote:
      "Always so delicious. The staff is incredible and attentive. My favorite restaurant in Ocala.",
    author: "James T.",
  },
  {
    platform: "Yelp",
    quote:
      "The restaurant is very clean, food is amazing and servers very attentive. You will not regret eating here.",
    author: "Elizabeth M.",
  },
  {
    platform: "Reddit",
    quote:
      "I had some of the best Indian food around… Tandoori Chicken, Rogan Josh and samosa chaat — everything was incredible.",
    author: "Rahul S.",
  },
];
