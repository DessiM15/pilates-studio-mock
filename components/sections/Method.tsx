import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { assets } from "@/lib/data/assets";

const principles = [
  {
    n: "01",
    title: "Twelve reformers, never more",
    body: "Small by design. Every class is watched, corrected, and taught to the individual — the way Pilates was meant to be.",
  },
  {
    n: "02",
    title: "Precision over intensity",
    body: "We chase alignment, not exhaustion. The results — long lines, real strength, better posture — follow the detail.",
  },
  {
    n: "03",
    title: "A room worth returning to",
    body: "Warm light, natural materials, and a stillness the city can't reach. The practice begins the moment you arrive.",
  },
];

export function Method() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={assets.method1}
              alt="A precise moment on the reformer"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden aspect-square w-44 overflow-hidden ring-8 ring-cream lg:block xl:w-56">
            <Image
              src={assets.method2}
              alt="Detail of controlled movement"
              fill
              sizes="14rem"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Eyebrow>The Method</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl">
            Pilates as it was <span className="accent">intended</span> — exacting,
            personal, quietly powerful.
          </h2>

          <div className="mt-12 flex flex-col">
            {principles.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 90}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-taupe/15 py-7"
              >
                <span className="font-display text-lg text-mushroom">{p.n}</span>
                <div>
                  <h3 className="text-lg font-medium text-espresso">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
