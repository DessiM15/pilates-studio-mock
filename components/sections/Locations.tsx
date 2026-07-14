import Link from "next/link";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/data/locations";

export function Locations() {
  return (
    <section id="studios" className="bg-sand/50 py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="The Studios"
          title={
            <>
              Three rooms, one <span className="accent">standard</span>.
            </>
          }
          intro="Each studio has its own character and the same obsession with light, quiet, and craft. Your membership moves with you across all of them."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 100}>
              <Link href={`/studios/${loc.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cream/80">
                      {loc.neighborhood}
                    </p>
                    <h3 className="mt-1 font-display text-3xl text-cream">
                      {loc.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-espresso/70">{loc.address}</p>
                  <span className="text-[0.72rem] uppercase tracking-[0.2em] text-espresso transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
