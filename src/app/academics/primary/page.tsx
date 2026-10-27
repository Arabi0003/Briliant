import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Primary Section",
  description: "Primary education at Brilliant Future Integrated School Maiduguri.",
};

export default function PrimaryPage() {
  return (
    <main id="main-content">
      <PageHeader title="Primary Section" eyebrow="Foundational Years" description="Nurturing curiosity, foundational literacy, and joyful discovery in young minds." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div className="about-split">
            <div>
              <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>Where Strong Foundations Begin</h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)", marginBottom: "1rem" }}>
                The primary school years represent the most vital formative window in a child’s development. At Brilliant Future Integrated School, our Primary Section provides a warm, structured, and stimulating environment where pupils develop mastery in literacy, numeracy, and scientific inquiry.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
                Our experienced primary educators employ child-centered instructional methods that inspire confidence, foster creativity, and instill habits of daily study and respectful conduct.
              </p>
            </div>
            <div className="page-image-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/bg1.png" alt="Primary Section Learning" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>

          <div style={{ marginTop: "4rem" }}>
            <h3 style={{ fontSize: "1.75rem", color: "var(--color-navy)", marginBottom: "2rem" }}>Key Learning Areas in Primary School</h3>
            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              <div style={{ padding: "2rem", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-lg)", background: "var(--color-white)" }}>
                <h4 style={{ color: "var(--color-royal)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>English & Phonics</h4>
                <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Comprehensive reading fluency, spelling, grammar, creative writing, and public speaking skills.</p>
              </div>
              <div style={{ padding: "2rem", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-lg)", background: "var(--color-white)" }}>
                <h4 style={{ color: "var(--color-royal)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Mathematics & Logic</h4>
                <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Number operations, practical problem-solving, spatial reasoning, and mental arithmetic.</p>
              </div>
              <div style={{ padding: "2rem", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-lg)", background: "var(--color-white)" }}>
                <h4 style={{ color: "var(--color-royal)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Basic Science & Tech</h4>
                <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Hands-on exploration of natural phenomena, living things, hygiene, and computer literacy.</p>
              </div>
              <div style={{ padding: "2rem", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-lg)", background: "var(--color-white)" }}>
                <h4 style={{ color: "var(--color-royal)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Moral & Religious Studies</h4>
                <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Grounding young hearts in moral uprightness, civic responsibility, and respect for community elders.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
