import Link from "next/link";
import type { Plan } from "@/lib/data/memberships";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={[
        "flex h-full flex-col rounded-sm p-8 lg:p-10 transition-transform duration-700",
        plan.featured
          ? "bg-espresso text-cream"
          : "bg-sand/60 text-espresso ring-1 ring-taupe/15",
      ].join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl">{plan.name}</h3>
        {plan.featured ? (
          <span className="rounded-full bg-mushroom/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-cream">
            Most loved
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-5xl">{plan.price}</span>
        <span
          className={`text-xs uppercase tracking-[0.16em] ${
            plan.featured ? "text-cream/60" : "text-taupe"
          }`}
        >
          / {plan.cadence}
        </span>
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${
          plan.featured ? "text-cream/75" : "text-espresso/70"
        }`}
      >
        {plan.blurb}
      </p>

      <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
        {plan.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-3">
            <span
              className={`mt-2 h-px w-4 shrink-0 ${
                plan.featured ? "bg-mushroom" : "bg-taupe"
              }`}
            />
            <span className={plan.featured ? "text-cream/85" : "text-espresso/80"}>
              {perk}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="#book"
        className={`mt-10 ${plan.featured ? "btn btn-light" : "btn btn-solid"} w-full`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
