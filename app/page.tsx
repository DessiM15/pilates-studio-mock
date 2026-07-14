import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { Method } from "@/components/sections/Method";
import { FeaturedClasses } from "@/components/sections/FeaturedClasses";
import { IntroOffer } from "@/components/sections/IntroOffer";
import { MembershipPreview } from "@/components/sections/MembershipPreview";
import { Instructors } from "@/components/sections/Instructors";
import { Locations } from "@/components/sections/Locations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pressLogos } from "@/lib/data/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-cream">
        <Marquee items={pressLogos} />
      </div>
      <Method />
      <FeaturedClasses />
      <IntroOffer />
      <MembershipPreview />
      <Instructors />
      <Locations />
      <Testimonials />
      <Gallery />
      <FinalCTA />
    </>
  );
}
