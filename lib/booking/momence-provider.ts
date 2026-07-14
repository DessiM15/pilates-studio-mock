import type { BookingProvider, ClassType, ScheduleEntry } from "./types";

/**
 * Skeleton adapter for Momence / Walla (near-identical integration shape).
 *
 * To go live:
 *  1. Set the studio's host id + public API key via env.
 *  2. Map the vendor's schedule payload onto ScheduleEntry / ClassType.
 *  3. Point getDropInUrl at the hosted checkout / widget deep-link.
 *  4. Swap this in for MockProvider in `index.ts`.
 *
 * Left intentionally unimplemented so the demo runs on mock data. The
 * signatures below are the contract the rest of the app already relies on.
 */
export class MomenceProvider implements BookingProvider {
  readonly vendor = "Momence";

  constructor(
    private readonly hostId: string,
    private readonly apiKey: string,
  ) {}

  async getClassTypes(): Promise<ClassType[]> {
    // return normalize(await fetch(`https://api.momence.com/host/${this.hostId}/class-types`, ...))
    throw new Error("MomenceProvider not configured — using MockProvider.");
  }

  async getSchedule(): Promise<ScheduleEntry[]> {
    // return normalize(await fetch(`https://api.momence.com/host/${this.hostId}/sessions`, ...))
    throw new Error("MomenceProvider not configured — using MockProvider.");
  }

  getDropInUrl(scheduleId: string): string {
    // Hosted checkout deep-link, e.g.:
    return `https://momence.com/${this.hostId}/session/${scheduleId}`;
  }
}
