import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About the School",
  description: "Learn about the foundation, growth, and educational philosophy of Brilliant Future Integrated School in Maiduguri.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader title="About Our School" eyebrow="Our Heritage & Philosophy" description="Nurturing academic excellence, moral integrity, and leadership in Borno State." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div className="about-split">
            <div className="page-image-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/bg1.png" alt="Brilliant Future Integrated School Main Campus" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>A Beacon of Knowledge and Character</h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)", marginBottom: "1rem" }}>
                Brilliant Future Integrated School was founded with a singular, resolute purpose: to provide the children of Maiduguri and Borno State with a world-class education anchored in moral discipline and academic rigor.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
                From our early foundation, we recognized that true education transcends simple classroom learning. It requires an environment where intellect is challenged, character is refined, and every child is empowered to discover their innate potential under the guidance of devoted educators.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "4rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div style={{ background: "var(--color-pale-blue)", padding: "2.5rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-sky-light)" }}>
              <h3 style={{ color: "var(--color-navy)", fontSize: "1.5rem", marginBottom: "1rem" }}>Integrated Learning</h3>
              <p style={{ color: "var(--color-neutral-700)", lineHeight: 1.7 }}>
                Our curriculum harmoniously blends the Nigerian National Curriculum with modern STEM methodologies and moral instruction, ensuring our graduates excel in national examinations while maintaining grounded cultural and ethical values.
              </p>
            </div>

            <div style={{ background: "var(--color-navy)", color: "var(--color-white)", padding: "2.5rem", borderRadius: "var(--radius-xl)" }}>
              <h3 style={{ color: "var(--color-gold-light)", fontSize: "1.5rem", marginBottom: "1rem" }}>Safe & Inspiring Haven</h3>
              <p style={{ color: "var(--color-sky-pale)", lineHeight: 1.7 }}>
                We have invested heavily in creating a secure, beautifully maintained campus equipped with bright classrooms, modern science laboratories, an extensive library, and recreational areas designed for physical wellness.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
