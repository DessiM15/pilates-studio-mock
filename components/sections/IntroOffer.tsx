import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { assets } from "@/lib/data/assets";

export function IntroOffer() {
  return (
    <section className="relative overflow-hidden bg-espresso text-cream">
      <div className="absolute inset-0 opacity-25">
        <Image
          src={assets.gallery2}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/40" />
      </div>

      <div className="relative mx-auto flex max-w-[80rem] flex-col items-start gap-8 px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="flex flex-col items-start gap-8">
          <p className="eyebrow text-mushroom">{site.introOffer.label}</p>
          <h2 className="max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            {site.introOffer.headline}, <span className="accent">{site.introOffer.price}</span>.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-cream/80 lg:text-lg">
            {site.introOffer.sub} Unlimited access to every class, every studio —
            the most generous way to begin. No membership required.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/membership" className="btn btn-light">
              Claim the Intro
            </Link>
            <Link
              href="/classes"
              className="text-[0.72rem] uppercase tracking-[0.22em] text-cream/80 underline-offset-8 hover:underline"
            >
              Browse classes first
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
