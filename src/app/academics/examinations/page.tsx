import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Examinations",
  description: "Information for Examinations",
};

export default function Page() {
  return (
    <main id="main-content">
      <PageHeader title="Examinations" eyebrow="Academics" />
      <section className="wide-section watermark-container">
        <Container>
          <div style={{ maxWidth: "800px", marginInline: "auto" }}>
            <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>
              Examinations Details
            </h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "var(--color-neutral-600)", marginBottom: "2rem" }}>
              This page has been securely generated and is ready for the school's official content.
            </p>
            
            {/* Notes for Management Box */}
            <div style={{ background: "var(--color-pale-blue)", borderLeft: "5px solid var(--color-royal)", padding: "2rem", borderRadius: "0 8px 8px 0" }}>
              <h3 style={{ color: "var(--color-royal-dark)", fontSize: "1.25rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                📝 Notes For Management
              </h3>
              <p style={{ color: "var(--color-navy)", fontWeight: 600, marginBottom: "1rem" }}>
                To complete this page, please provide the development team with:
              </p>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--color-neutral-700)", display: "flex", flexDirection: "column", gap: "0.75rem", lineHeight: 1.6 }}>
                <li><strong>Official Text:</strong> A few paragraphs explaining your Examinations.</li>
                <li><strong>Specific Details:</strong> Any policies, schedules, names, or rules that apply to this section.</li>
                <li><strong>Photographs:</strong> 1 or 2 high-quality photos to be displayed alongside the text.</li>
              </ul>
            </div>
            
          </div>
        </Container>
      </section>
    </main>
  );
}
