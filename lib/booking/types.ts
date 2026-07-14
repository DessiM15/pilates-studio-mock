/**
 * Booking provider abstraction.
 *
 * The whole site talks to *this* interface, never to a specific vendor.
 * Today it's backed by MockProvider. To go live with a real studio you
 * implement this interface against Momence, Walla, Mindbody, Mariana Tek,
 * etc. and swap it in `lib/booking/index.ts` — no component changes.
 */

export type ClassLevel = "All Levels" | "Foundations" | "Intermediate" | "Advanced";

export interface ClassType {
  id: string;
  name: string;
  /** Short marketing description */
  blurb: string;
  level: ClassLevel;
  durationMin: number;
  /** Reference into the asset map / CMS image */
  image: string;
}

export interface ScheduleEntry {
  id: string;
  classTypeId: string;
  locationId: string;
  instructorId: string;
  /** ISO-ish day key, e.g. "monday" */
  day: Weekday;
  /** 24h "HH:MM" */
  start: string;
  spotsTotal: number;
  spotsOpen: number;
}

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface BookingProvider {
  /** Human label, shown in a "Powered by …" line if desired */
  readonly vendor: string;
  getClassTypes(): Promise<ClassType[]>;
  getSchedule(opts?: { locationId?: string }): Promise<ScheduleEntry[]>;
  /**
   * Deep link a visitor into the provider's checkout for a single drop-in.
   * With Momence/Walla this is a hosted widget URL; the mock returns a
   * harmless anchor so the UI is fully clickable in the demo.
   */
  getDropInUrl(scheduleId: string): string;
}
