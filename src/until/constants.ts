import type { NavLink } from "../types";

// Navbar items list array
export const NAVIGATION_LINKS: NavLink[] = [
  { label: "Homepage", href: "#homepage" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
  { label: "Pages", href: "#pages", hasDropdown: true },
];

// Content constants (flowgen text config)
export const HERO_CONTENT = {
  badge: "Smarter Supply Chain Solutions",
  titleLine1: "Smart solutions for",
  titleLine2: "complex supply chains.",
  description:
    "Unlock efficiency across your entire operation with expert-driven strategies. We help businesses transform their logistics, reduce costs, and enhance performance from end to end.",
  ctaPrimary: "Explore Services",
  ctaSecondary: "Request a Consultation",
};
