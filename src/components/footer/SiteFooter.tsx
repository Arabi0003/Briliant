import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { FooterNavigation } from "@/components/footer/FooterNavigation";
import { FooterContact } from "@/components/footer/FooterContact";
import { PrayerTimesCard } from "@/components/footer/PrayerTimesCard";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Container>
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-top">
                <Image
                  src="/briliantlogo.png"
                  alt={`${siteConfig.name} crest`}
                  width={64}
                  height={64}
                  className="footer-logo"
                />
                <div>
                  <p className="footer-brand-name">{siteConfig.name}</p>
                  <p className="footer-motto">{siteConfig.motto}</p>
                </div>
              </div>
              <p className="footer-intro">
                A professional learning community in Maiduguri dedicated to academic
                growth, character formation, and a brilliant future for every student.
              </p>
            </div>

            <FooterNavigation />
            <FooterContact />
          </div>

          <div className="footer-prayer-wrap">
            <PrayerTimesCard />
          </div>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-inner">
            <div className="footer-copy-block">
              <p className="footer-copy">
                © {year} {siteConfig.name}. All rights reserved.
              </p>
              <p className="footer-powered">
                Powered by{" "}
                <a
                  href="https://www.yalerima.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-powered-link"
                >
                  Yalerima Technologies Limited
                </a>
              </p>
            </div>
            <nav className="footer-legal" aria-label="Legal">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/accessibility">Accessibility Statement</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}
