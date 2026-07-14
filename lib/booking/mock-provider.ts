import type { BookingProvider, ClassType, ScheduleEntry } from "./types";
import { classTypes, schedule } from "@/lib/data/classes";

/**
 * Demo-only provider backed by local data. Fully clickable — "Drop In"
 * links resolve to a harmless in-app anchor so the mockup behaves like the
 * real thing without a live booking account.
 */
export class MockProvider implements BookingProvider {
  readonly vendor = "FORME Demo";

  async getClassTypes(): Promise<ClassType[]> {
    return classTypes;
  }

  async getSchedule(opts?: { locationId?: string }): Promise<ScheduleEntry[]> {
    if (opts?.locationId) {
      return schedule.filter((s) => s.locationId === opts.locationId);
    }
    return schedule;
  }

  getDropInUrl(scheduleId: string): string {
    return `#book-${scheduleId}`;
  }
}
