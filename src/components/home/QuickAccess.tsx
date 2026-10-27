import Link from "next/link";
import { ClipboardList, CalendarDays, Users, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    href: "/admissions",
    title: "Admissions",
    description: "Review entry information and begin an enquiry for the coming term.",
    icon: ClipboardList,
  },
  {
    href: "/academics/calendar",
    title: "Academic Calendar",
    description: "Find term dates, scheduled breaks, and key school events.",
    icon: CalendarDays,
  },
  {
    href: "/people/leadership",
    title: "School Leadership",
    description: "Meet the team responsible for academic and pastoral direction.",
    icon: Users,
  },
  {
    href: "/contact",
    title: "Contact the School",
    description: "Reach our office by telephone, email, or planned campus visit.",
    icon: Phone,
  },
] as const;

export function QuickAccess() {
  return (
    <section className="section section--pale" aria-labelledby="quick-access-heading">
      <Container>
        <SectionHeading
          eyebrow="For Parents & Visitors"
          title="Find what you need quickly"
          description="Essential routes for families exploring admissions, school information, and day-to-day contact."
        />
        <h2 id="quick-access-heading" className="sr-only">Quick access</h2>
        <div className="quick-grid">
          {items.map(({ href, title, description, icon: Icon }) => (
            <Link key={href} href={href} className="quick-card">
              <span className="quick-card__icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
