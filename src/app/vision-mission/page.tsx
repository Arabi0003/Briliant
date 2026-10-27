import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Vision and Mission",
  description: "The core principles, vision, and mission guiding Brilliant Future Integrated School.",
};

export default function VisionMissionPage() {
  return (
    <main id="main-content">
      <PageHeader title="Vision & Mission" eyebrow="Guiding Principles" description="The foundational beliefs that inspire our daily pursuit of educational distinction." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginBottom: "4rem" }}>
            <div style={{ background: "var(--color-white)", border: "2px solid var(--color-royal)", padding: "3rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)" }}>
              <span style={{ color: "var(--color-royal)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Our Vision</span>
              <h2 style={{ fontSize: "2rem", color: "var(--color-navy)", marginBlock: "1rem" }}>Building Global Leaders</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
                To be the premier educational institution in Northeastern Nigeria, recognized for graduating intellectually formidable, morally upright, and socially responsible citizens who drive positive transformation in society.
              </p>
            </div>

            <div style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-royal-dark) 100%)", color: "var(--color-white)", padding: "3rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)" }}>
              <span style={{ color: "var(--color-gold-light)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Our Mission</span>
              <h2 style={{ fontSize: "2rem", color: "var(--color-white)", marginBlock: "1rem" }}>Holistic Formation</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-sky-pale)" }}>
                To deliver a balanced, rigorous, and inclusive education across primary and secondary levels; fostering critical thinking, ethical discipline, mutual tolerance, and academic excellence within a safe and nurturing environment.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", maxWidth: "800px", marginInline: "auto" }}>
            <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>Our Three Sacred Pillars</h2>
            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: "2rem" }}>
              <div style={{ padding: "1.5rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ color: "var(--color-royal-dark)", marginBottom: "0.5rem" }}>RESPECT</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-neutral-700)", lineHeight: 1.6 }}>Honoring self, elders, peers, and the rule of law in every interaction.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ color: "var(--color-royal-dark)", marginBottom: "0.5rem" }}>TOLERANCE</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-neutral-700)", lineHeight: 1.6 }}>Embracing diversity, fostering peace, and living harmoniously with all people.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ color: "var(--color-royal-dark)", marginBottom: "0.5rem" }}>EXCELLENCE</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-neutral-700)", lineHeight: 1.6 }}>Striving for highest quality in academics, personal conduct, and service.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
