import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ClassCard } from "@/components/ClassCard";
import { ScheduleBoard } from "@/components/ScheduleBoard";
import { classTypes, schedule } from "@/lib/data/classes";
import { assets } from "@/lib/data/assets";

export const metadata: Metadata = {
  title: "Classes & Schedule",
  description:
    "Browse the FORME reformer schedule and drop in to a class. Six class types, small groups, all levels.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Classes & Schedule"
        image={assets.hero}
        title={
          <>
            Find your <span className="accent">hour</span>.
          </>
        }
        intro="Reserve a reformer in a few taps. Drop in to any single class, or make it a habit with a membership."
      />

      {/* Schedule */}
      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="This Week"
            title={
              <>
                The <span className="accent">schedule</span>.
              </>
            }
            intro="Live availability, updated in real time. Green means go."
          />
          <div className="mt-14">
            <ScheduleBoard schedule={schedule} />
          </div>
        </Container>
      </section>

      {/* Class library */}
      <section className="bg-sand/50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="The Classes"
            title={
              <>
                Know before you <span className="accent">go</span>.
              </>
            }
          />
          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {classTypes.map((ct, i) => (
              <Reveal key={ct.id} delay={(i % 3) * 90}>
                <ClassCard classType={ct} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
