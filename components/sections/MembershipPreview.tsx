import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PlanCard } from "@/components/PlanCard";
import { plans } from "@/lib/data/memberships";

export function MembershipPreview() {
  return (
    <section id="membership" className="bg-cream py-24 lg:py-36">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Membership"
          title={
            <>
              Belong to the <span className="accent">practice</span>.
            </>
          }
          intro="Drop in when it suits you, or make it a ritual. Every option opens all three studios."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
