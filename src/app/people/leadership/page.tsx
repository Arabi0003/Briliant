import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "School Leadership",
  description: "Meet the Board of Governors and Academic Leadership of BFIS Maiduguri.",
};

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <PageHeader title="School Leadership" eyebrow="Governance & Management" description="Experienced visionaries dedicated to educational excellence and student welfare." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div className="about-split">
            <div className="page-image-card" style={{ aspectRatio: "4/5" }}>
              <Image src="/Interfance.png" alt="School Leadership Team" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <span style={{ color: "var(--color-royal)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Message from the Proprietor</span>
              <h2 className="text-display-38" style={{ marginBlock: "0.75rem 1.5rem" }}>
                &ldquo;We measure our success by the character and achievement of our students.&rdquo;
              </h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)", marginBottom: "1rem" }}>
                Welcome to Brilliant Future Integrated School. As leaders of this esteemed institution, our commitment to parents and the Maiduguri community is sacred: to provide an environment where every child is protected, valued, challenged, and guided toward academic distinction.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
                Our administration works tirelessly to maintain high academic standards, upgrade modern teaching infrastructure, support our devoted faculty, and foster a peaceful, orderly school climate where learning thrives.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "4rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div style={{ padding: "2rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-lg)" }}>
              <h3 style={{ color: "var(--color-navy)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Executive Directorship</h3>
              <p style={{ color: "var(--color-neutral-700)", lineHeight: 1.6 }}>Strategic policy oversight, institutional growth, community partnerships, and school development.</p>
            </div>
            <div style={{ padding: "2rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-lg)" }}>
              <h3 style={{ color: "var(--color-navy)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Academic Directorship</h3>
              <p style={{ color: "var(--color-neutral-700)", lineHeight: 1.6 }}>Curriculum alignment, teacher performance monitoring, examination standards, and student academic progress.</p>
            </div>
            <div style={{ padding: "2rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-lg)" }}>
              <h3 style={{ color: "var(--color-navy)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Pastoral & Student Affairs</h3>
              <p style={{ color: "var(--color-neutral-700)", lineHeight: 1.6 }}>Student discipline, moral guidance, counseling services, co-curricular activities, and health protocols.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
