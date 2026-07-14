import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
}) {
  if (image) {
    return (
      <header className="relative flex min-h-[62vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/40" />
        </div>
        <Container className="relative z-10 pb-16 pt-40 lg:pb-20">
          {eyebrow ? (
            <p className="eyebrow text-cream/80">{eyebrow}</p>
          ) : null}
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 lg:text-lg">
              {intro}
            </p>
          ) : null}
        </Container>
      </header>
    );
  }

  return (
    <header className="bg-sand/40">
      <Container className="pb-16 pt-40 lg:pb-20 lg:pt-48">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-espresso sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-espresso/70 lg:text-lg">
            {intro}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
