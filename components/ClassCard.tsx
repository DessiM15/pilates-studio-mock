import Image from "next/image";
import type { ClassType } from "@/lib/booking/types";
import { booking } from "@/lib/booking";

/**
 * Editorial class card used in the featured grid. The "Drop In" link routes
 * through the booking provider so it becomes a real checkout deep-link when a
 * live provider is connected.
 */
export function ClassCard({
  classType,
  index,
}: {
  classType: ClassType;
  index: number;
}) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-linen">
        <Image
          src={classType.image}
          alt={classType.name}
          fill
          sizes="(max-width: 768px) 90vw, 30vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-espresso backdrop-blur">
          {classType.level}
        </span>
        <span className="absolute right-4 top-4 font-display text-sm text-cream drop-shadow">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl text-espresso">{classType.name}</h3>
          <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-taupe">
            {classType.durationMin} min
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso/70">
          {classType.blurb}
        </p>
        <a
          href={booking.getDropInUrl(classType.id)}
          className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-espresso transition-opacity hover:opacity-60"
        >
          Drop In
          <span aria-hidden className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
