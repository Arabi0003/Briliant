import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Admissions Overview",
  description: "Join the Brilliant Future Integrated School community in Maiduguri.",
};

export default function AdmissionsPage() {
  return (
    <main id="main-content">
      <PageHeader title="Admissions Overview" eyebrow="Enrollment Guide" description="Step-by-step guidance on joining the Brilliant Future educational family." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div style={{ textAlign: "center", maxWidth: "800px", marginInline: "auto", marginBottom: "4rem" }}>
            <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>Invest in Your Child’s Brilliant Future</h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral-700)" }}>
              We welcome prospective families who seek an exceptional education grounded in academic discipline, moral integrity, and personal respect. Admissions are open for Primary, Junior Secondary, and Senior Secondary classes.
            </p>
          </div>

          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div style={{ padding: "2.5rem", background: "white", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ fontSize: "2rem", color: "var(--color-royal)", fontWeight: 700 }}>01</span>
              <h3 style={{ fontSize: "1.3rem", color: "var(--color-navy)", marginBlock: "0.75rem 0.5rem" }}>Online Enquiry / Form</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Submit an enquiry via our website or pick up an application form at the school main administrative office.</p>
            </div>

            <div style={{ padding: "2.5rem", background: "white", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ fontSize: "2rem", color: "var(--color-royal)", fontWeight: 700 }}>02</span>
              <h3 style={{ fontSize: "1.3rem", color: "var(--color-navy)", marginBlock: "0.75rem 0.5rem" }}>Entrance Assessment</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Prospective pupils sit for a placement assessment in English, Mathematics, and General Knowledge.</p>
            </div>

            <div style={{ padding: "2.5rem", background: "white", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ fontSize: "2rem", color: "var(--color-royal)", fontWeight: 700 }}>03</span>
              <h3 style={{ fontSize: "1.3rem", color: "var(--color-navy)", marginBlock: "0.75rem 0.5rem" }}>Parent Interview</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>A brief conversation with school management to align expectations and answer questions.</p>
            </div>

            <div style={{ padding: "2.5rem", background: "white", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ fontSize: "2rem", color: "var(--color-royal)", fontWeight: 700 }}>04</span>
              <h3 style={{ fontSize: "1.3rem", color: "var(--color-navy)", marginBlock: "0.75rem 0.5rem" }}>Official Offer & Registration</h3>
              <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6 }}>Successful applicants receive an offer letter, fee details, uniform fitting, and term schedule.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/admissions/enquiry">
              <Button size="lg" variant="primary">Submit Online Admission Enquiry</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
