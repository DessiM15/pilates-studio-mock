import { assets } from "@/lib/data/assets";

export interface Location {
  /** slug used in /studios/[location] */
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  phone: string;
  image: string;
  /** Human hours, per day grouping */
  hours: { days: string; time: string }[];
  /** Google Maps embed query */
  mapQuery: string;
  intro: string;
}

export const locations: Location[] = [
  {
    id: "west-hollywood",
    name: "West Hollywood",
    neighborhood: "Melrose",
    address: "8420 Melrose Avenue",
    city: "West Hollywood, CA 90069",
    phone: "+1 (310) 555-0147",
    image: assets.locationWeho,
    hours: [
      { days: "Mon – Fri", time: "6:00 AM – 8:00 PM" },
      { days: "Saturday", time: "7:00 AM – 2:00 PM" },
      { days: "Sunday", time: "8:00 AM – 1:00 PM" },
    ],
    mapQuery: "8420 Melrose Avenue, West Hollywood, CA",
    intro:
      "Our flagship. Twelve reformers beneath a skylight, a stillness the city can't reach.",
  },
  {
    id: "venice",
    name: "Venice",
    neighborhood: "Abbot Kinney",
    address: "1215 Abbot Kinney Blvd",
    city: "Venice, CA 90291",
    phone: "+1 (310) 555-0162",
    image: assets.locationVenice,
    hours: [
      { days: "Mon – Fri", time: "6:30 AM – 7:30 PM" },
      { days: "Saturday", time: "7:30 AM – 1:00 PM" },
      { days: "Sunday", time: "8:30 AM – 12:30 PM" },
    ],
    mapQuery: "1215 Abbot Kinney Blvd, Venice, CA",
    intro:
      "Salt air and warm oak. Our Venice studio moves at the pace of the coast.",
  },
  {
    id: "pasadena",
    name: "Pasadena",
    neighborhood: "Old Town",
    address: "46 South Raymond Ave",
    city: "Pasadena, CA 91105",
    phone: "+1 (626) 555-0188",
    image: assets.locationPasadena,
    hours: [
      { days: "Mon – Fri", time: "6:00 AM – 8:00 PM" },
      { days: "Saturday", time: "7:00 AM – 2:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapQuery: "46 South Raymond Ave, Pasadena, CA",
    intro:
      "Light-filled and quiet, tucked into a restored 1920s storefront in Old Town.",
  },
];

export const locationById = (id: string) => locations.find((l) => l.id === id);
