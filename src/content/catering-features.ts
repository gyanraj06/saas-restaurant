export type CateringFeature = {
  title: string;
  description: string;
  image: string;
};

// Sourced directly from the live site's rendered catering section (mazza.com).
export const cateringFeatures: CateringFeature[] = [
  {
    title: "Buffet Displays",
    description:
      "Elegant and abundant buffet setups that showcase our dishes beautifully while making service smooth and efficient.",
    image: "/images/f1.avif",
  },
  {
    title: "Professional Service Team",
    description: "Our experienced staff provides courteous, attentive service so your event runs seamlessly.",
    image: "/images/f2.avif",
  },
  {
    title: "Years of Experience",
    description:
      "Decades of catering knowledge and event expertise to ensure a stress-free, memorable experience for you and your guests.",
    image: "/images/f3.avif",
  },
];
