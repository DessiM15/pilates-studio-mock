import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";
import { assets } from "@/lib/data/assets";

const shots = [
  { src: assets.gallery1, ratio: "aspect-[3/4]" },
  { src: assets.gallery2, ratio: "aspect-[3/4] lg:mt-12" },
  { src: assets.gallery3, ratio: "aspect-[3/4]" },
  { src: assets.gallery4, ratio: "aspect-[3/4] lg:mt-12" },
];

export function Gallery() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <Reveal className="mb-14 flex flex-col items-center gap-4 text-center">
          <Eyebrow>Inside FORME</Eyebrow>
          <p className="max-w-md font-display text-2xl text-espresso lg:text-3xl">
            Follow the practice on{" "}
            <a href="#" className="accent underline-offset-4 hover:underline">
              @forme.studio
            </a>
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {shots.map((s, i) => (
            <Reveal
              key={i}
              as="figure"
              delay={i * 80}
              className={`group relative overflow-hidden bg-linen ${s.ratio}`}
            >
              <Image
                src={s.src}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
