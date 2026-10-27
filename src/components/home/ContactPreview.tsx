import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ContactPreview() {
  return (
    <section className="section section--navy" aria-labelledby="contact-preview-heading">
      <Container>
        <SectionHeading
          eyebrow="Visit"
          title="We welcome your questions"
          description="Speak with our office about admissions, academic programmes, or a planned visit to the campus."
        />
        <h2 id="contact-preview-heading" className="sr-only">Contact information</h2>
        <div className="contact-strip">
          <div className="contact-card">
            <h3>Address</h3>
            <p>{siteConfig.address.full}</p>
          </div>
          <div className="contact-card">
            <h3>Call or email</h3>
            <p>
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              <br />
              <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Office hours</h3>
            <p>
              Monday–Thursday &amp; Sunday
              <br />
              7:00 AM – 4:30 PM
              <br />
              Friday &amp; Saturday: Closed
            </p>
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
