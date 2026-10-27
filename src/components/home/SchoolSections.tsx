import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const pathways = [
  {
    title: "Primary Section",
    href: "/academics/primary",
    tag: "Foundation years",
    description:
      "A nurturing introduction to literacy, numeracy, and good study habits in a safe, structured environment.",
    image: "/bg1.png",
  },
  {
    title: "Junior Secondary",
    href: "/academics/junior-secondary",
    tag: "Growing independence",
    description:
      "Broad subject exposure with increasing academic expectation, guided by attentive teaching staff.",
    image: "/bg2.png",
  },
  {
    title: "Senior Secondary",
    href: "/academics/senior-secondary",
    tag: "Future readiness",
    description:
      "Focused preparation for external examinations, higher education pathways, and responsible adulthood.",
    image: "/bg3.png",
  },
] as const;

export function SchoolSections() {
  return (
    <section className="section" aria-labelledby="pathways-heading">
      <Container>
        <SectionHeading
          eyebrow="Educational Pathways"
          title="Primary to senior secondary under one vision"
          description="Each section is designed to support the next stage of learning. Specific curriculum details remain editable pending school confirmation."
        />
        <h2 id="pathways-heading" className="sr-only">School sections</h2>
        <div className="pathway-grid">
          {pathways.map((item) => (
            <article key={item.href} className="pathway-card">
              <div className="pathway-card__media">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="pathway-card__body">
                <span className="pathway-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href}>
                  <Button variant="secondary">View section overview</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
