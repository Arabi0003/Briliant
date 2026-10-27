import { Container } from "@/components/ui/Container";

export function SchoolValues() {
  return (
    <section className="wide-section section--pale watermark-container" aria-labelledby="values-heading">
      <Container style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span className="section-heading__eyebrow">Our Guiding Principle</span>
        <h2 id="values-heading" className="sr-only">School Values</h2>
        
        <p className="text-display-38" style={{ marginBlock: "2rem", color: "var(--color-royal-dark)" }}>
          Respect, Tolerance and Excellence.
        </p>
        
        <p style={{ color: "var(--color-neutral-600)", maxWidth: "600px", marginInline: "auto", fontSize: "1.125rem", lineHeight: 1.7 }}>
          These pillars form the foundation of our community. We cultivate an environment where every student is valued, diverse perspectives are respected, and academic rigor is celebrated.
        </p>
      </Container>
    </section>
  );
}
