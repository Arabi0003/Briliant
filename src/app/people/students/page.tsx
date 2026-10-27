import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Student Community",
  description: "Life, leadership, and representation at BFIS.",
};

export default function StudentsPage() {
  return (
    <main id="main-content">
      <PageHeader title="Student Community" eyebrow="People" description="A vibrant, diverse, and respectful student body." />
      <section className="wide-section watermark-container">
        <Container>
          <div className="about-split">
            <div>
              <h2 className="text-display-38" style={{ marginBottom: "1.5rem" }}>Building Character Together</h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "var(--color-neutral-600)", marginBottom: "1rem" }}>
                Our students are the heart of Brilliant Future Integrated School. Drawn from diverse backgrounds across Maiduguri, they are united by our shared values of Respect, Tolerance and Excellence.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "var(--color-neutral-600)" }}>
                Through classroom collaboration, peer leadership, and shared activities, our students learn to support one another, forming lifelong friendships and habits of good citizenship.
              </p>
            </div>
            <div className="page-image-card" style={{ aspectRatio: "4/5" }}>
              <Image src="/Interfance.png" alt="Students gathering at BFIS" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
