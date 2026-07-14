import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ClassCard } from "@/components/ClassCard";
import { classTypes } from "@/lib/data/classes";

export function FeaturedClasses() {
  const featured = classTypes.slice(0, 3);
  return (
    <section id="classes" className="bg-sand/50 py-24 lg:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="The Classes"
            title={
              <>
                Six ways to <span className="accent">move</span>.
              </>
            }
            intro="Every class is on the reformer, taught in small groups, and built to meet you where you are — from your very first session to your strongest."
          />
          <Reveal delay={120}>
            <Link href="/classes" className="btn btn-outline">
              Full Schedule
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((ct, i) => (
            <Reveal key={ct.id} delay={i * 90}>
              <ClassCard classType={ct} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
