import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function StudentLifeSection() {
  return (
    <section className="section" aria-labelledby="student-life-heading">
      <Container>
        <div className="feature-split feature-split--reverse">
          <div className="intro-visual" style={{ minHeight: 380 }}>
            <Image
              src="/bg2.png"
              alt="Student activities at Brilliant Future Integrated School"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Student Life"
              title="Learning beyond the classroom"
            />
            <h2 id="student-life-heading" className="sr-only">Student life</h2>
            <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Clubs, sport, cultural activities, and school events help students build
              confidence, teamwork, and lasting friendships. Activity offerings are confirmed
              term by term by school leadership.
            </p>
            <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Explore student activities and upcoming community moments as information is published.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/student-life/activities">
                <Button variant="primary">Student activities</Button>
              </Link>
              <Link href="/gallery">
                <Button variant="secondary">School gallery</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
