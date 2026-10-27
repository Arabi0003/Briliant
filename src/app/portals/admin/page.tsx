import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Admin / Super-Admin - SMS Access",
  description: "Secure login portal for Brilliant Future Integrated School.",
};

export default function PortalAccess() {
  return (
    <main id="main-content" style={{ minHeight: "80vh", display: "flex", alignItems: "center", background: "var(--color-neutral-50)" }}>
      <Container>
        <div style={{ maxWidth: "500px", marginInline: "auto", background: "var(--color-white)", padding: "3rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)", textAlign: "center", borderTop: "6px solid var(--color-royal)" }}>
          <span style={{ color: "var(--color-gold-light)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>
            School Management System
          </span>
          <h1 style={{ color: "var(--color-navy)", fontSize: "2rem", marginBlock: "1rem" }}>Admin / Super-Admin</h1>
          <p style={{ color: "var(--color-neutral-600)", lineHeight: 1.6, marginBottom: "2rem" }}>
            School Management System core configuration.
          </p>
          
          <div style={{ padding: "1.5rem", background: "var(--color-pale-blue)", borderRadius: "var(--radius-md)", border: "1px dashed var(--color-sky-light)" }}>
            <p style={{ color: "var(--color-royal-dark)", fontSize: "0.95rem", fontWeight: 500 }}>
              🔒 Secure Authentication required.<br/><br/>
              This interface prepares the architecture for the future database-driven School Management System (SMS). Login credentials will be issued by the school administration once the database phase is deployed.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
