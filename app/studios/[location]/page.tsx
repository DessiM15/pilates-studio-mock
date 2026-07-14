import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ScheduleBoard } from "@/components/ScheduleBoard";
import { locations, locationById } from "@/lib/data/locations";
import { schedule } from "@/lib/data/classes";
import { site } from "@/lib/site";

type Params = Promise<{ location: string }>;

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = locationById(location);
  if (!loc) return { title: "Studio" };
  return {
    title: `${loc.name} Studio`,
    description: `${site.name} ${loc.name} — ${loc.intro} ${loc.address}, ${loc.city}.`,
  };
}

export default async function StudioPage({ params }: { params: Params }) {
  const { location } = await params;
  const loc = locationById(location);
  if (!loc) notFound();

  // In production this schedule is fetched per-location from the booking API.
  const locSchedule = schedule.filter((s) => s.locationId === loc.id);
  const others = locations.filter((l) => l.id !== loc.id);

  return (
    <>
      <PageHeader
        eyebrow={`${loc.neighborhood} · Studio`}
        image={loc.image}
        title={<>{loc.name}</>}
        intro={loc.intro}
      />

      {/* Details: address, hours, map */}
      <section className="bg-cream py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>Visit</Eyebrow>
            <h2 className="mt-6 font-display text-3xl text-espresso lg:text-4xl">
              {loc.address}
            </h2>
            <p className="mt-2 text-espresso/70">{loc.city}</p>

            <div className="mt-10">
              <p className="eyebrow text-taupe">Hours</p>
              <ul className="mt-5">
                {loc.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between border-t border-taupe/15 py-3.5 text-sm last:border-b"
                  >
                    <span className="text-espresso/80">{h.days}</span>
                    <span className="text-espresso">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a
                href={`tel:${loc.phone}`}
                className="text-espresso/80 transition-colors hover:text-espresso"
              >
                {loc.phone}
              </a>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="text-espresso/80 underline-offset-4 transition-colors hover:text-espresso hover:underline"
              >
                Get directions →
              </a>
            </div>

            <Link href="#schedule" className="btn btn-solid mt-10">
              See the Schedule
            </Link>
          </div>

          <Reveal className="min-h-[22rem] overflow-hidden bg-linen lg:min-h-full">
            <iframe
              title={`Map of ${loc.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
              className="h-full min-h-[22rem] w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-sand/50 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={`${loc.name} · This Week`}
            title={
              <>
                Book at <span className="accent">{loc.name}</span>.
              </>
            }
            intro="Live availability at this studio. Drop in to any class."
          />
          <div className="mt-14">
            <ScheduleBoard schedule={locSchedule} />
          </div>
        </Container>
      </section>

      {/* Other studios */}
      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <p className="eyebrow text-taupe">Also at FORME</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/studios/${o.id}`}
                className="group flex items-center justify-between border-t border-taupe/20 py-6"
              >
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-taupe">
                    {o.neighborhood}
                  </p>
                  <h3 className="mt-1 font-display text-3xl text-espresso">
                    {o.name}
                  </h3>
                </div>
                <span className="text-2xl text-espresso transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
