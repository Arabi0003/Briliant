import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    meta: "Announcements",
    title: "School notices and family updates",
    excerpt:
      "Official announcements will appear here as they are approved by the school office.",
  },
  {
    meta: "Academics",
    title: "Term information for parents",
    excerpt:
      "Calendar reminders, timetable notes, and academic guidance will be shared throughout the year.",
  },
  {
    meta: "Community",
    title: "Campus life highlights",
    excerpt:
      "Stories from classrooms, activities, and school events will be published with verified photographs.",
  },
] as const;

export function NewsPreview() {
  return (
    <section className="section section--pale" aria-labelledby="news-heading">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "end" }}>
          <SectionHeading
            eyebrow="News"
            title="Announcements & updates"
            description="A dedicated newsroom for verified school communication."
          />
          <Link href="/news">
            <Button variant="outline">All news</Button>
          </Link>
        </div>
        <h2 id="news-heading" className="sr-only">News and announcements</h2>
        <div className="news-grid">
          {posts.map((post) => (
            <article key={post.title} className="news-card">
              <div className="news-card__body">
                <p className="news-card__meta">{post.meta}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
