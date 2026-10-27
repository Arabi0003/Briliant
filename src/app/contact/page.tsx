import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Brilliant Future Integrated School Maiduguri.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader title="Contact Us" eyebrow="Get In Touch" description="We welcome visits, calls, and email inquiries from parents and community members." />
      
      <section className="wide-section watermark-container">
        <Container>
          <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div style={{ background: "var(--color-navy)", color: "white", padding: "3rem", borderRadius: "var(--radius-xl)" }}>
              <h2 style={{ fontSize: "1.75rem", color: "white", marginBottom: "2rem" }}>Main Administrative Office</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <MapPin color="var(--color-gold-light)" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--color-gold-light)", marginBottom: "0.25rem" }}>Location Address</strong>
                    <span style={{ color: "var(--color-sky-pale)" }}>{siteConfig.address.full}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <Phone color="var(--color-gold-light)" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--color-gold-light)", marginBottom: "0.25rem" }}>Telephone</strong>
                    <a href={siteConfig.contact.phoneHref} style={{ color: "white" }}>{siteConfig.contact.phone}</a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <Mail color="var(--color-gold-light)" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--color-gold-light)", marginBottom: "0.25rem" }}>Email Address</strong>
                    <a href={siteConfig.contact.emailHref} style={{ color: "white" }}>{siteConfig.contact.email}</a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <Clock color="var(--color-gold-light)" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--color-gold-light)", marginBottom: "0.25rem" }}>Official School Hours</strong>
                    <span style={{ color: "var(--color-sky-pale)", fontSize: "0.95rem" }}>
                      Mon – Thu & Sun: 7:00 AM – 4:30 PM<br/>
                      Friday & Saturday: Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-neutral-200)", boxShadow: "var(--shadow-lg)" }}>
              <h2 style={{ fontSize: "1.75rem", color: "var(--color-navy)", marginBottom: "1.5rem" }}>Send Direct Message</h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.35rem" }}>Your Full Name</label>
                  <input type="text" placeholder="Enter name" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.35rem" }}>Phone Number</label>
                  <input type="tel" placeholder="Enter phone" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.35rem" }}>Message</label>
                  <textarea rows={4} placeholder="How can we assist you?" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }}></textarea>
                </div>
                <button type="button" style={{ background: "var(--color-royal)", color: "white", padding: "1rem", borderRadius: "8px", border: "none", fontWeight: 700, cursor: "pointer" }}>Send Message</button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
