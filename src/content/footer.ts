import { primaryNav, contactLink, reserveLocations, type NavLink } from "@/content/nav";

export type FooterLinkItem = NavLink & { external?: boolean };

export type FooterLocation = {
  city: string;
  address: string;
};

export type FooterHours = {
  city: string;
  schedule: string[];
};

export type FooterContact = {
  city: string;
  phone: string;
};

// Sourced directly from the live site's rendered footer (mazza.com).
export const footerLocations: FooterLocation[] = [
  { city: "Ocala", address: "3415 SW College Rd Ocala, FL 34474" },
  { city: "Gainesville", address: "3105 SW 34th Street Gainesville, FL 32608" },
];

// Schedule strings (including the live site's "12 M" / "—9 PM" typos) are kept
// verbatim to match the source footer exactly.
export const footerHours: FooterHours[] = [
  {
    city: "Ocala",
    schedule: ["Tue-Thu 11 AM — 9 PM", "Fri-Sat 12 PM — 10 PM", "Sunday 12 PM — 9 PM", "Mon (Closed)"],
  },
  {
    city: "Gainesville",
    schedule: ["Tue-Thu 11 AM — 9 PM", "Fri-Sat 12 M — 10 PM", "Sunday 12 PM —9 PM", "Mon (Closed)"],
  },
];

export const footerContacts: FooterContact[] = [
  { city: "Ocala", phone: "+1 (352) 873-8500" },
  { city: "Gainesville", phone: "+1 (352) 769-8500" },
];

// TODO: swap in the business's real inbox once supplied.
export const footerEmail = "info@mazza.com";

export const discoverLinks: FooterLinkItem[] = [...primaryNav, contactLink];

// TODO: point at the real legal pages once they exist.
export const legalLinks: FooterLinkItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const actionLinks: FooterLinkItem[] = [
  { label: "View Menu", href: "/menu" },
  { label: "Order Gift Card", href: "/gift-cards" },
  // Footer has no room for the header's per-city dropdown, so this points at Ocala's booking page.
  { label: "Reserve a Table", href: reserveLocations[0].href, external: true },
];

// TODO: swap in the business's real social profiles once supplied.
export const socialLinks: FooterLinkItem[] = [
  { label: "Instagram", href: "#", external: true },
  { label: "Facebook", href: "#", external: true },
];
