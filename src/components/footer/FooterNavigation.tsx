import Link from "next/link";
import { primaryNav } from "@/lib/navigation";

export function FooterNavigation() {
  const schoolLinks = primaryNav.find((g) => g.label === "Our School")?.items ?? [];
  const academicLinks = primaryNav.find((g) => g.label === "Academics")?.items.slice(0, 5) ?? [];
  const admissionLinks = primaryNav.find((g) => g.label === "Admissions")?.items ?? [];

  return (
    <>
      <div>
        <h3 className="footer-heading">Our School</h3>
        <nav className="footer-links" aria-label="Footer school links">
          {schoolLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <h3 className="footer-heading">Academics & Admissions</h3>
        <nav className="footer-links" aria-label="Footer academics and admissions">
          {academicLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {admissionLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
