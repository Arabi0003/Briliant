import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AdmissionsSection() {
  return (
    <section className="section section--pale" aria-labelledby="admissions-heading">
      <Container>
        <div className="admissions-band">
          <div>
            <p className="section-heading__eyebrow">Admissions</p>
            <h2 id="admissions-heading">Join the Brilliant Future community</h2>
            <p>
              We welcome families who share our commitment to respectful conduct, diligent
              study, and personal growth. Start with an enquiry and our office will guide you
              through requirements and registration steps.
            </p>
            <div className="admissions-actions">
              <Link href="/admissions/enquiry">
                <Button variant="primary" size="lg">Online Admissions Enquiry</Button>
              </Link>
              <Link href="/admissions/requirements">
                <Button variant="outline" size="lg">View Requirements</Button>
              </Link>
            </div>
          </div>
          <aside className="admissions-side" aria-label="Admissions process overview">
            <h3>What to prepare</h3>
            <ul>
              <li>Completed enquiry details for the prospective student</li>
              <li>Previous school records where applicable</li>
              <li>Required identification documents</li>
              <li>Follow-up conversation with the admissions office</li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
