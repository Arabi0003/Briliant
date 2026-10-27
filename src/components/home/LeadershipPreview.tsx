import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function LeadershipPreview() {
  return (
    <section className="section" aria-labelledby="leadership-heading">
      <Container width="narrow">
        <SectionHeading
          eyebrow="People"
          title="Leadership committed to every learner"
          description="School leadership provides academic direction, staff support, and a culture of care. Named profiles and biographies will be published with management approval."
          align="center"
        />
        <h2 id="leadership-heading" className="sr-only">School leadership</h2>
        <div style={{ textAlign: "center" }}>
          <Link href="/people/leadership">
            <Button variant="primary">Meet school leadership</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
