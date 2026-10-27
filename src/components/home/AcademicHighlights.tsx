import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AcademicHighlights() {
  return (
    <section className="section section--navy" aria-labelledby="academics-heading">
      <Container>
        <div className="feature-split">
          <div>
            <SectionHeading
              eyebrow="Academics"
              title="A clear framework for teaching, assessment and growth"
            />
            <h2 id="academics-heading" className="sr-only">Academic highlights</h2>
            <div className="feature-panel">
              <p style={{ color: "var(--color-sky-pale)", lineHeight: 1.7 }}>
                Our academic programme emphasises mastery of core subjects, regular feedback,
                and habits that prepare students for examinations and lifelong learning.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle2 className="check-icon" size={20} aria-hidden="true" />
                  <div>
                    <strong>Curriculum structure</strong>
                    Subject offerings organised by section and stage of learning.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={20} aria-hidden="true" />
                  <div>
                    <strong>Assessment culture</strong>
                    Continuous monitoring supported by formal examination periods.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={20} aria-hidden="true" />
                  <div>
                    <strong>Learning resources</strong>
                    Classroom practice reinforced by guided study expectations.
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: "1.75rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/academics/curriculum">
                  <Button variant="primary">Curriculum overview</Button>
                </Link>
                <Link href="/academics/calendar">
                  <Button variant="outline">Academic calendar</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="highlight-grid">
            <article className="highlight-card">
              <h3>Term planning</h3>
              <p>
                Families can review term structures and key academic dates as the official
                calendar is published and updated by the school office.
              </p>
            </article>
            <article className="highlight-card">
              <h3>Timetable access</h3>
              <p>
                Section timetables will be made available through dedicated academic pages
                once verified schedules are approved for publication.
              </p>
            </article>
            <article className="highlight-card">
              <h3>Examinations</h3>
              <p>
                Assessment expectations and examination information are maintained for
                transparency with students and parents.
              </p>
            </article>
            <article className="highlight-card">
              <h3>Future student portal</h3>
              <p>
                Online academic tools for results, attendance, and homework are planned as a
                secure, authenticated system separate from this public website.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
