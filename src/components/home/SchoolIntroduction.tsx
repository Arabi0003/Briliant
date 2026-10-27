import Image from "next/image";
import { HeartHandshake, BookOpenCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SchoolIntroduction() {
  return (
    <section className="wide-section watermark-container" aria-labelledby="intro-heading">
      <Container>
        <div className="intro-grid">
          <div className="intro-copy">
            <span className="section-heading__eyebrow">Welcome to BFIS</span>
            <h2 id="intro-heading" className="text-display-38" style={{ marginBottom: "1.5rem" }}>
              Forming capable, confident learners prepared for higher study and responsible citizenship.
            </h2>
            <p>
              From the first years of primary education through junior and senior secondary
              pathways, our school combines structured teaching, pastoral care, and a
              values-led culture. Families are welcomed as partners in every student&apos;s progress.
            </p>
            <div className="intro-points">
              <div className="intro-point">
                <HeartHandshake size={22} color="var(--color-royal)" aria-hidden="true" />
                <div>
                  <strong>Character first</strong>
                  <span>Respect and tolerance guide daily school life.</span>
                </div>
              </div>
              <div className="intro-point">
                <BookOpenCheck size={22} color="var(--color-royal)" aria-hidden="true" />
                <div>
                  <strong>Academic discipline</strong>
                  <span>Clear pathways across primary and secondary sections.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-visual">
            <Image
              src="/Interfance.png"
              alt="Students and campus life at Brilliant Future Integrated School"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
            <div className="intro-badge">
              <strong>BFIS Maiduguri</strong>
              <span>Primary · Junior Secondary · Senior Secondary</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
