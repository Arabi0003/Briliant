import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const images = [
  { src: "/bg1.png", caption: "Campus architecture" },
  { src: "/bg2.png", caption: "School grounds" },
  { src: "/bg3.png", caption: "Learning spaces" },
  { src: "/Interfance.png", caption: "School community" },
] as const;

export function GalleryPreview() {
  return (
    <section className="section" aria-labelledby="gallery-heading">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "end" }}>
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse of school life"
            description="Photographs from our campus and community. Additional verified images can be added at any time."
          />
          <Link href="/gallery">
            <Button variant="secondary">Open gallery</Button>
          </Link>
        </div>
        <h2 id="gallery-heading" className="sr-only">School gallery preview</h2>
        <div className="gallery-grid">
          {images.map((image) => (
            <figure key={image.src + image.caption} className="gallery-item">
              <Image
                src={image.src}
                alt={image.caption}
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
