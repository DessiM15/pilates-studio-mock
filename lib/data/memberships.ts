export interface Plan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  perks: string[];
  featured?: boolean;
  cta: string;
}

export const plans: Plan[] = [
  {
    id: "drop-in",
    name: "Drop In",
    price: "$38",
    cadence: "single class",
    blurb: "No commitment. Move with us whenever the day allows.",
    perks: [
      "One reformer class",
      "Any location",
      "Book up to 30 days ahead",
      "Never expires",
    ],
    cta: "Book a Drop In",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: "$289",
    cadence: "per month",
    blurb: "For the devoted. The practice, without a ceiling.",
    perks: [
      "Unlimited reformer classes",
      "All locations",
      "Priority booking window",
      "2 guest passes / month",
      "15% off retail & privates",
    ],
    featured: true,
    cta: "Become a Member",
  },
  {
    id: "pack",
    name: "Class Pack",
    price: "$320",
    cadence: "10 classes",
    blurb: "Flexibility with intent. Your ten, on your schedule.",
    perks: [
      "10 reformer classes",
      "Any location",
      "Valid for 4 months",
      "Shareable within household",
    ],
    cta: "Buy a Pack",
  },
];
