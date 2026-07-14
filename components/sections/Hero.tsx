import Link from "next/link";
import { site } from "@/lib/site";
import { assets } from "@/lib/data/assets";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background media */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={assets.heroPoster}
        >
          <source src={assets.heroVideo} type="video/mp4" />
          <source src={assets.heroVideoAlt} type="video/mp4" />
        </video>
        {/* Fallback image sits under the video via poster; overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-espresso/40" />
        <div className="absolute inset-0 bg-espresso/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[80rem] px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <p className="eyebrow text-cream/80">
          West Hollywood · Venice · Pasadena
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-[3.4rem] leading-[0.98] text-cream sm:text-7xl lg:text-8xl">
          Strength,
          <br />
          <span className="accent">refined.</span>
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-cream/85 lg:text-lg">
          A boutique Reformer studio built on small classes, exceptional
          teaching, and a practice designed to change the way you move.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/membership" className="btn btn-light">
            {site.introOffer.headline} — {site.introOffer.price}
          </Link>
          <Link
            href="/classes"
            className="text-[0.72rem] uppercase tracking-[0.22em] text-cream underline-offset-8 hover:underline"
          >
            View the schedule
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 lg:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-cream/50" />
      </div>
    </section>
  );
}
