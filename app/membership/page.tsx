import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PlanCard } from "@/components/PlanCard";
import { Faq, type QA } from "@/components/Faq";
import { plans } from "@/lib/data/memberships";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership & Pricing",
  description:
    "Intro offer, unlimited membership, class packs and drop-ins. One membership, all three FORME studios.",
};

const faqs: QA[] = [
  {
    q: "I'm completely new to Pilates. Where do I start?",
    a: "With the Intro Offer, then a Foundations class. It's built for first-timers — principles, breath and alignment at a considered pace. Our teachers will have you moving confidently within a session or two.",
  },
  {
    q: "Can I use my membership at every location?",
    a: "Yes. Every membership, pack and the intro offer works across all three studios — West Hollywood, Venice and Pasadena. Book wherever the day takes you.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Plans are month-to-month with no lock-in — pause or cancel anytime before your next billing date. Classes can be cancelled up to 12 hours ahead with no charge.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Just grippy socks (we sell them, or bring your own) and water. We provide everything else. Arrive ten minutes early so we can settle you in.",
  },
  {
    q: "Do you offer private sessions?",
    a: "We do. One-to-one and duet reformer sessions are available at every studio — ideal for rehab, pre/postnatal, or simply faster progress. Ask the front desk to arrange one.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title={
          <>
            Choose how you <span className="accent">belong</span>.
          </>
        }
        intro="Start with the intro. Stay for the practice. Every option opens all three studios, with no lock-in."
      />

      {/* Intro offer band */}
      <section className="bg-espresso py-16 text-cream">
        <Container className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <p className="eyebrow text-mushroom">{site.introOffer.label}</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">
              {site.introOffer.headline} — <span className="accent">{site.introOffer.price}</span>
            </h2>
            <p className="mt-3 max-w-md text-cream/70">{site.introOffer.sub}</p>
          </div>
          <Link href="#book" className="btn btn-light shrink-0">
            Claim the Intro
          </Link>
        </Container>
      </section>

      {/* Plans */}
      <section id="book" className="bg-cream py-24 lg:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90} className="h-full">
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-taupe">
            Prices in USD. Corporate & founding-member rates available on request.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-sand/50 py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Good to know"
            title={
              <>
                Questions, <span className="accent">answered</span>.
              </>
            }
            intro="Everything you need before your first visit. Still curious? We're a message away."
          />
          <div>
            <Faq items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
