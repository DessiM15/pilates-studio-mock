import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { instructors } from "@/lib/data/instructors";

export function Instructors() {
  return (
    <section id="teachers" className="bg-cream py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="The Teachers"
          title={
            <>
              You book a class. You <span className="accent">remember</span> a teacher.
            </>
          }
          intro="Our teachers are the studio. Deeply trained, endlessly attentive, and the reason our members keep coming back."
        />

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 22vw"
                    className="object-cover grayscale-[0.15] transition-all duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-4">
                  <h3 className="font-display text-xl text-espresso">{t.name}</h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-taupe">
                    {t.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                    {t.bio}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
