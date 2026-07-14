import type { ClassType, ScheduleEntry } from "@/lib/booking/types";
import { assets } from "@/lib/data/assets";

export const classTypes: ClassType[] = [
  {
    id: "reformer-flow",
    name: "Reformer Flow",
    blurb:
      "Our signature. A fluid, full-body sequence on the reformer that builds long, lean strength and control.",
    level: "All Levels",
    durationMin: 50,
    image: assets.classReformer,
  },
  {
    id: "sculpt",
    name: "Sculpt",
    blurb:
      "Springs loaded, tempo up. Deep, burning work through the seat, core and arms. You will feel this tomorrow.",
    level: "Intermediate",
    durationMin: 50,
    image: assets.classSculpt,
  },
  {
    id: "foundations",
    name: "Foundations",
    blurb:
      "New to the reformer? Start here. Principles, breath and precise alignment at a considered pace.",
    level: "Foundations",
    durationMin: 55,
    image: assets.classFoundations,
  },
  {
    id: "restore",
    name: "Stretch & Restore",
    blurb:
      "Slow, deliberate lengthening and mobility work. The exhale to your week — recovery as a discipline.",
    level: "All Levels",
    durationMin: 45,
    image: assets.classRestore,
  },
  {
    id: "prenatal",
    name: "Prenatal",
    blurb:
      "A safe, strengthening practice for every trimester, taught by pre/postnatal certified teachers.",
    level: "All Levels",
    durationMin: 45,
    image: assets.classPrenatal,
  },
  {
    id: "power",
    name: "Power 55",
    blurb:
      "Athletic, cardio-forward reformer built on intervals and heavier springs. For the practiced body.",
    level: "Advanced",
    durationMin: 55,
    image: assets.classPower,
  },
];

export const classTypeById = (id: string) =>
  classTypes.find((c) => c.id === id);

/**
 * A representative weekly schedule. In production this comes from the
 * booking provider's live API — here it's mock data so the demo is full.
 */
export const schedule: ScheduleEntry[] = [
  // Monday
  s("mon-1", "reformer-flow", "west-hollywood", "amara", "monday", "06:30", 12, 2),
  s("mon-2", "sculpt", "west-hollywood", "juno", "monday", "09:00", 12, 5),
  s("mon-3", "foundations", "west-hollywood", "elise", "monday", "12:00", 10, 8),
  s("mon-4", "power", "west-hollywood", "mateo", "monday", "18:00", 12, 0),
  // Tuesday
  s("tue-1", "restore", "west-hollywood", "elise", "tuesday", "07:00", 14, 6),
  s("tue-2", "reformer-flow", "west-hollywood", "amara", "tuesday", "10:00", 12, 3),
  s("tue-3", "prenatal", "west-hollywood", "juno", "tuesday", "13:00", 8, 4),
  s("tue-4", "sculpt", "west-hollywood", "mateo", "tuesday", "17:30", 12, 1),
  // Wednesday
  s("wed-1", "reformer-flow", "west-hollywood", "juno", "wednesday", "06:30", 12, 4),
  s("wed-2", "power", "west-hollywood", "mateo", "wednesday", "09:15", 12, 2),
  s("wed-3", "foundations", "west-hollywood", "elise", "wednesday", "12:30", 10, 7),
  s("wed-4", "reformer-flow", "west-hollywood", "amara", "wednesday", "18:30", 12, 0),
  // Thursday
  s("thu-1", "sculpt", "west-hollywood", "amara", "thursday", "07:00", 12, 3),
  s("thu-2", "restore", "west-hollywood", "elise", "thursday", "11:00", 14, 9),
  s("thu-3", "reformer-flow", "west-hollywood", "juno", "thursday", "17:00", 12, 2),
  s("thu-4", "power", "west-hollywood", "mateo", "thursday", "19:00", 12, 5),
  // Friday
  s("fri-1", "reformer-flow", "west-hollywood", "amara", "friday", "06:30", 12, 1),
  s("fri-2", "sculpt", "west-hollywood", "juno", "friday", "09:00", 12, 6),
  s("fri-3", "foundations", "west-hollywood", "elise", "friday", "12:00", 10, 5),
  // Saturday
  s("sat-1", "reformer-flow", "west-hollywood", "juno", "saturday", "08:00", 12, 4),
  s("sat-2", "sculpt", "west-hollywood", "mateo", "saturday", "09:30", 12, 2),
  s("sat-3", "restore", "west-hollywood", "elise", "saturday", "11:00", 14, 10),
  // Sunday
  s("sun-1", "restore", "west-hollywood", "elise", "sunday", "09:00", 14, 8),
  s("sun-2", "reformer-flow", "west-hollywood", "amara", "sunday", "10:30", 12, 3),
  s("sun-3", "prenatal", "west-hollywood", "juno", "sunday", "12:00", 8, 5),
];

function s(
  id: string,
  classTypeId: string,
  locationId: string,
  instructorId: string,
  day: ScheduleEntry["day"],
  start: string,
  spotsTotal: number,
  spotsOpen: number,
): ScheduleEntry {
  return { id, classTypeId, locationId, instructorId, day, start, spotsTotal, spotsOpen };
}
