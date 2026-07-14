"use client";

import { useMemo, useState } from "react";
import type { ScheduleEntry, Weekday } from "@/lib/booking/types";
import { classTypeById } from "@/lib/data/classes";
import { instructorById } from "@/lib/data/instructors";
import { booking } from "@/lib/booking";

const DAYS: { key: Weekday; label: string; short: string }[] = [
  { key: "monday", label: "Monday", short: "Mon" },
  { key: "tuesday", label: "Tuesday", short: "Tue" },
  { key: "wednesday", label: "Wednesday", short: "Wed" },
  { key: "thursday", label: "Thursday", short: "Thu" },
  { key: "friday", label: "Friday", short: "Fri" },
  { key: "saturday", label: "Saturday", short: "Sat" },
  { key: "sunday", label: "Sunday", short: "Sun" },
];

function to12h(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

export function ScheduleBoard({ schedule }: { schedule: ScheduleEntry[] }) {
  const activeDays = useMemo(
    () => DAYS.filter((d) => schedule.some((s) => s.day === d.key)),
    [schedule],
  );
  const [day, setDay] = useState<Weekday>(activeDays[0]?.key ?? "monday");

  const rows = useMemo(
    () =>
      schedule
        .filter((s) => s.day === day)
        .sort((a, b) => a.start.localeCompare(b.start)),
    [schedule, day],
  );

  return (
    <div>
      {/* Day tabs */}
      <div className="no-scrollbar -mx-6 mb-10 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:px-0">
        {activeDays.map((d) => {
          const active = d.key === day;
          return (
            <button
              key={d.key}
              onClick={() => setDay(d.key)}
              className={[
                "shrink-0 rounded-full border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-500",
                active
                  ? "border-espresso bg-espresso text-cream"
                  : "border-taupe/25 text-espresso hover:border-espresso/50",
              ].join(" ")}
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              <span className="lg:hidden">{d.short}</span>
              <span className="hidden lg:inline">{d.label}</span>
            </button>
          );
        })}
      </div>

      {/* Rows */}
      <ul>
        {rows.map((entry) => {
          const ct = classTypeById(entry.classTypeId);
          const teacher = instructorById(entry.instructorId);
          if (!ct) return null;
          const full = entry.spotsOpen === 0;
          const low = !full && entry.spotsOpen <= 2;
          return (
            <li
              key={entry.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-taupe/15 py-6 last:border-b sm:grid-cols-[7rem_1fr_auto_auto] sm:gap-8"
            >
              <span className="font-display text-xl text-espresso sm:text-2xl">
                {to12h(entry.start)}
              </span>

              <div className="min-w-0">
                <h3 className="truncate text-base font-medium text-espresso sm:text-lg">
                  {ct.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-taupe">
                  {teacher?.name ?? "FORME Teacher"} · {ct.durationMin} min · {ct.level}
                </p>
              </div>

              <span
                className={[
                  "hidden text-xs uppercase tracking-[0.16em] sm:block",
                  full ? "text-clay" : low ? "text-clay" : "text-taupe",
                ].join(" ")}
              >
                {full ? "Waitlist" : `${entry.spotsOpen} left`}
              </span>

              <a
                href={booking.getDropInUrl(entry.id)}
                className={
                  full
                    ? "btn btn-outline !px-6 !py-3 opacity-70"
                    : "btn btn-solid !px-6 !py-3"
                }
              >
                {full ? "Join Waitlist" : "Drop In"}
              </a>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 text-xs text-taupe/70">
        Live schedule syncs from {booking.vendor}. Times shown in local studio time.
      </p>
    </div>
  );
}
