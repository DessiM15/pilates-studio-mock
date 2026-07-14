/**
 * Central brand + site configuration.
 * Everything a non-developer might change lives here so it can later be
 * lifted into a CMS (Sanity/Contentful) without touching components.
 */
export const site = {
  name: "FORME",
  wordmark: "FORME",
  tagline: "Strength, refined.",
  description:
    "A boutique Reformer Pilates studio. Small classes, expert teachers, and a practice designed to change the way you move through the world.",
  email: "hello@formestudio.com",
  phone: "+1 (310) 555-0147",
  instagram: "@forme.studio",
  instagramUrl: "https://instagram.com",
  introOffer: {
    label: "New Client Intro",
    headline: "3 Weeks Unlimited",
    price: "$59",
    sub: "Available once, for those new to FORME.",
  },
  nav: [
    { label: "Classes", href: "/classes" },
    { label: "Membership", href: "/membership" },
    { label: "Studios", href: "/studios/west-hollywood" },
    { label: "The Method", href: "/about" },
  ],
} as const;

export type Site = typeof site;
