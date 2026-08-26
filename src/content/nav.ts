export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Catering", href: "/catering" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "About", href: "/about" },
];

export const contactLink: NavLink = { label: "Contact", href: "/contact" };

export const reserveLink: NavLink = { label: "Reserve a Table", href: "/reserve" };

export const reserveLocations: NavLink[] = [
  {
    label: "Book — Ocala",
    href: "https://www.opentable.com/r/amrit-palace-indian-restaurant-reservations-ocala?restref=276529&lang=en-US&ot_source=Restaurant%20website",
  },
  {
    label: "Book — Gainesville",
    href: "https://www.opentable.com/r/amrit-palace-gainesville-reservations-gainesville?restref=1493497&lang=en-US&ot_source=Restaurant%20website",
  },
];

export const orderLocations: NavLink[] = [
  { label: "Maza Bistrot Ocala", href: "https://order.toasttab.com/online/amrit-palace-ocala" },
  { label: "Maza Bistrot Gainesville", href: "https://order.toasttab.com/online/amrit-palace-gainesville" },
];

export const siteInfo = {
  name: "Maza Bistrot",
};
