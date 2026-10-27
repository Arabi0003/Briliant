import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "School Gallery",
  description: "Photographs of campus life and events.",
};

const galleryImages = [
  { src: "/bg1.png", alt: "School Building exterior view" },
  { src: "/bg2.png", alt: "Campus grounds and student facilities" },
  { src: "/bg3.png", alt: "Learning environment and campus paths" },
  { src: "/Interfance.png", alt: "Students and school community interactions" },
];

export default function GalleryPage() {
  return (
    <main id="main-content">
      <PageHeader title="School Gallery" eyebrow="Visuals" description="Glimpses of daily life at Brilliant Future Integrated School." />
      <section className="wide-section watermark-container">
        <Container>
          <div style={{ maxWidth: "800px", marginInline: "auto", textAlign: "center" }}>
            <h2 className="text-display-38" style={{ marginBottom: "1rem" }}>Campus & Community</h2>
            <p style={{ fontSize: "1.125rem", color: "var(--color-neutral-600)" }}>
              A collection of official photographs showcasing our learning spaces, architecture, and student environment. 
              More event galleries will be added here throughout the academic year.
            </p>
          </div>
          
          <div className="page-image-grid">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="page-image-card">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
