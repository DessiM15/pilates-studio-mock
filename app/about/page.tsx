import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Instructors } from "@/components/sections/Instructors";
import { assets } from "@/lib/data/assets";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "The philosophy behind FORME — precision, small classes, and Pilates taught the way it was intended.",
};

const values = [
  {
    n: "01",
    title: "Precision",
    body: "We teach the millimetres. Real change lives in the details others rush past.",
  },
  {
    n: "02",
    title: "Intimacy",
    body: "Twelve reformers, never more. You are seen, corrected, and known by name.",
  },
  {
    n: "03",
    title: "Beauty",
    body: "The room matters. Light, materials and quiet are part of the practice, not a backdrop.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Method"
        image={assets.method1}
        title={
          <>
            A studio built on <span className="accent">restraint</span>.
          </>
        }
        intro="FORME began with a simple frustration: Pilates had grown loud, crowded and generic. We wanted to make it precise again."
      />

      {/* Story */}
      <section className="bg-cream py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-linen">
            <Image
              src={assets.method2}
              alt="The FORME practice"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl">
              We chose <span className="accent">fewer</span> reformers and better
              teaching — and never looked back.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-espresso/75">
              <p>
                Founded in West Hollywood by lead teacher Amara Léon, FORME was a
                reaction to the fitness-factory model. Where others packed rooms,
                we halved them. Where others counted reps, we corrected form.
              </p>
              <p>
                Three studios later, the philosophy hasn't moved an inch. Small
                classes. Exceptional teachers. A room that feels like an exhale.
                The result is a body that stands taller and a practice you actually
                keep.
              </p>
            </div>
            <Link href="/classes" className="btn btn-outline mt-10">
              Experience a Class
            </Link>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-sand/50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What we believe"
            title={
              <>
                Three ideas, held <span className="accent">closely</span>.
              </>
            }
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.n}
                delay={i * 100}
                className="border-t border-taupe/20 pt-8"
              >
                <span className="font-display text-3xl text-mushroom">{v.n}</span>
                <h3 className="mt-4 font-display text-2xl text-espresso">
                  {v.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-espresso/70">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Instructors />
    </>
  );
}
