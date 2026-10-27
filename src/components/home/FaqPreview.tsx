import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "What sections does the school offer?",
    a: "Brilliant Future Integrated School provides primary, junior secondary, and senior secondary pathways.",
  },
  {
    q: "When is the school office open?",
    a: "Monday to Thursday and Sunday, 7:00 AM to 4:30 PM. Friday and Saturday are closed.",
  },
  {
    q: "How do I start an admissions enquiry?",
    a: "Use the Online Admissions Enquiry page or contact the school office by telephone or email.",
  },
  {
    q: "How can I contact the school?",
    a: `Call ${siteConfig.contact.phone} or email ${siteConfig.contact.email}.`,
  },
] as const;

export function FaqPreview() {
  return (
    <section className="section section--pale" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          eyebrow="Help"
          title="Frequently asked questions"
          description="Quick answers for visiting families. A fuller FAQ page will expand as more school-approved guidance is provided."
        />
        <h2 id="faq-heading" className="sr-only">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <article key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/faq">
            <Button variant="outline">View all FAQs</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
