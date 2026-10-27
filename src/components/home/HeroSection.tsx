import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackgroundSlideshow } from "@/components/home/BackgroundSlideshow";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <BackgroundSlideshow />
      <div className="hero-overlay" />
      <div className="hero-content">
        <Container>
          <span className="hero-eyebrow">Maiduguri, Borno State</span>
          <h1 id="hero-heading">{siteConfig.name}</h1>
          <p className="hero-lead">{siteConfig.motto}</p>
          <p className="hero-sub">
            A carefully guided learning community offering primary through senior
            secondary education, grounded in character, academic discipline, and opportunity.
          </p>
          <div className="hero-actions">
            <Link href="/admissions">
              <Button variant="primary" size="lg">Begin Admissions Enquiry</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">Discover Our School</Button>
            </Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>Location</strong>
              <span>{siteConfig.address.full}</span>
            </div>
            <div className="hero-meta-item">
              <strong>Telephone</strong>
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="hero-meta-item">
              <strong>School Day</strong>
              <span>Mon–Thu &amp; Sun · 7:00 AM – 4:30 PM</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
