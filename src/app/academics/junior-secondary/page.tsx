import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Junior Secondary Section",
  description: "Junior Secondary School (JSS1 - JSS3) education at BFIS Maiduguri.",
};

export default function JuniorSecondaryPage() {
  return (
    <main id="main-content">
      <PageHeader title="Junior Secondary" eyebrow="Middle Years (JSS1 - JSS3)" description="Fostering academic confidence, independent critical thought, and broad subject mastery." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div className="about-split">
            <div className="page-image-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/bg2.png" alt="Junior Secondary Classrooms" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>Bridging Foundation to Higher Learning</h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)", marginBottom: "1rem" }}>
                Our Junior Secondary School program (JSS1 to JSS3) marks a vital transition as students move from foundational learning into analytical academic disciplines. Students are introduced to subject specialists across science, humanities, languages, and vocational studies.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
                Throughout these three years, our rigorous teaching prepares students thoroughly for the Basic Education Certificate Examination (BECE / Junior WAEC), ensuring every child develops strong academic confidence.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "4rem", background: "var(--color-pale-blue)", padding: "3rem", borderRadius: "var(--radius-xl)" }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy)", marginBottom: "1.5rem" }}>Junior Secondary Curriculum Overview</h3>
            <ul style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", listStyle: "none", padding: 0 }}>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Mathematics & Quantitative Analysis</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>English Language & Literature</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Basic Science & Technology</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Social Studies & Civic Education</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Computer Studies & ICT</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Islamic / Religious Knowledge</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Agricultural Science</li>
              <li style={{ background: "white", padding: "1rem 1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--color-royal)" }}>Business Studies</li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
