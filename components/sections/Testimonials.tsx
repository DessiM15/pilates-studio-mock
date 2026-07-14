"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const active = testimonials[i];

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-espresso py-28 text-cream lg:py-40">
      <Container className="flex flex-col items-center text-center">
        <p className="eyebrow text-mushroom">In their words</p>

        <blockquote className="mt-10 min-h-[9.5rem] max-w-4xl transition-opacity duration-700 lg:min-h-[11rem]">
          <p
            key={i}
            className="font-display text-2xl leading-[1.28] text-cream sm:text-3xl lg:text-[2.4rem] lg:leading-[1.25]"
          >
            “{active.quote}”
          </p>
        </blockquote>

        <div className="mt-8">
          <p className="text-sm font-medium text-cream">{active.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/50">
            {active.detail}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-8 bg-cream" : "w-1.5 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
