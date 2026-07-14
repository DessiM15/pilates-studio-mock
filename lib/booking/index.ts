import type { BookingProvider } from "./types";
import { MockProvider } from "./mock-provider";
// import { MomenceProvider } from "./momence-provider";

/**
 * The single place the app resolves its booking backend.
 *
 * Today: MockProvider (demo data).
 * Live:  return new MomenceProvider(process.env.MOMENCE_HOST_ID!, process.env.MOMENCE_KEY!)
 *        — nothing else in the app changes.
 */
export const booking: BookingProvider = new MockProvider();

export * from "./types";
