import Link from "next/link";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-sand/60 py-28 lg:py-40">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <p className="eyebrow text-taupe">Your first class</p>
          <h2 className="max-w-3xl font-display text-5xl leading-[1.02] text-espresso sm:text-6xl lg:text-7xl">
            The best time to begin <span className="accent">was</span> yesterday.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-espresso/70 lg:text-lg">
            Reserve a spot on the reformer and feel the difference precision
            makes. We'll be waiting for you.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Link href="/membership" className="btn btn-solid">
              {site.introOffer.headline} — {site.introOffer.price}
            </Link>
            <Link href="/classes" className="btn btn-outline">
              View the Schedule
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
