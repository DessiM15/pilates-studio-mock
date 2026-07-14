import { assets } from "@/lib/data/assets";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  image: string;
}

export const instructors: Instructor[] = [
  {
    id: "amara",
    name: "Amara Léon",
    title: "Founder & Lead Teacher",
    bio: "Twelve years and three continents of teaching. Amara built FORME around a single belief: that precision is a kind of luxury.",
    specialties: ["Reformer Flow", "Alignment", "Breath"],
    image: assets.instructorAmara,
  },
  {
    id: "juno",
    name: "Juno Park",
    title: "Senior Teacher",
    bio: "A former dancer with an eye for line. Juno's classes are musical, exacting, and quietly relentless.",
    specialties: ["Sculpt", "Prenatal", "Mobility"],
    image: assets.instructorJuno,
  },
  {
    id: "mateo",
    name: "Noa Ruiz",
    title: "Strength Teacher",
    bio: "Sports science background, athlete's discipline. Noa brings load and intent to the reformer.",
    specialties: ["Power 55", "Athletic Conditioning"],
    image: assets.instructorMateo,
  },
  {
    id: "elise",
    name: "Elise Warden",
    title: "Restore & Foundations",
    bio: "A patient, generous teacher who makes the first class feel like the tenth. Elise is where beginnings belong.",
    specialties: ["Foundations", "Stretch & Restore"],
    image: assets.instructorElise,
  },
];

export const instructorById = (id: string) =>
  instructors.find((i) => i.id === id);
