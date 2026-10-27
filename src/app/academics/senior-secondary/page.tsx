import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Senior Secondary Section",
  description: "Senior Secondary School (SSS1 - SSS3) preparation for WAEC, NECO, and JAMB UTME at BFIS.",
};

export default function SeniorSecondaryPage() {
  return (
    <main id="main-content">
      <PageHeader title="Senior Secondary" eyebrow="Senior Years (SSS1 - SSS3)" description="Rigorous academic preparation for WAEC, NECO, JAMB UTME, and university achievement." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div className="about-split">
            <div>
              <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>Preparing Leaders for University & Future Careers</h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)", marginBottom: "1rem" }}>
                Our Senior Secondary School program (SSS1 to SSS3) provides intensive academic specialization across Science, Arts, and Commercial tracks. Under the tutelage of seasoned secondary faculty, students are prepared to sit for the West African Senior School Certificate Examination (WASSCE / WAEC), NECO SSCE, and the Joint Admissions and Matriculation Board UTME.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
                Beyond examination drills, our senior curriculum emphasizes leadership, scientific experimentation, essay synthesis, and career guidance, ensuring our graduates enter top universities with distinction.
              </p>
            </div>
            <div className="page-image-card" style={{ aspectRatio: "4/3" }}>
              <Image src="/bg3.png" alt="Senior Secondary Science & Academic Labs" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>

          <div style={{ marginTop: "4rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div style={{ background: "white", border: "1px solid var(--color-neutral-200)", padding: "2.5rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ color: "var(--color-royal)", fontWeight: 700, textTransform: "uppercase" }}>Track 01</span>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy)", marginBlock: "0.5rem" }}>Science & Technology</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6, marginBottom: "1rem" }}>For future doctors, engineers, IT specialists, and researchers.</p>
              <p style={{ fontSize: "0.95rem", color: "var(--color-neutral-800)", fontWeight: 600 }}>Physics, Chemistry, Biology, Further Mathematics, Agricultural Science, Technical Drawing.</p>
            </div>

            <div style={{ background: "white", border: "1px solid var(--color-neutral-200)", padding: "2.5rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ color: "var(--color-royal)", fontWeight: 700, textTransform: "uppercase" }}>Track 02</span>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy)", marginBlock: "0.5rem" }}>Commercial & Business</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6, marginBottom: "1rem" }}>For future economists, accountants, managers, and entrepreneurs.</p>
              <p style={{ fontSize: "0.95rem", color: "var(--color-neutral-800)", fontWeight: 600 }}>Financial Accounting, Commerce, Economics, Office Practice, Business Management.</p>
            </div>

            <div style={{ background: "white", border: "1px solid var(--color-neutral-200)", padding: "2.5rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ color: "var(--color-royal)", fontWeight: 700, textTransform: "uppercase" }}>Track 03</span>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy)", marginBlock: "0.5rem" }}>Arts & Humanities</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6, marginBottom: "1rem" }}>For future lawyers, diplomats, writers, journalists, and public administrators.</p>
              <p style={{ fontSize: "0.95rem", color: "var(--color-neutral-800)", fontWeight: 600 }}>Literature in English, Government, History, Islamic Studies, Civic Education.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
