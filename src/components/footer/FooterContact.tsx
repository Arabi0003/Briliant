import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FooterContact() {
  return (
    <div>
      <h3 className="footer-heading">Visit & Contact</h3>
      <div className="footer-contact-list">
        <div className="footer-contact-item">
          <MapPin size={18} aria-hidden="true" />
          <span>{siteConfig.address.full}</span>
        </div>
        <div className="footer-contact-item">
          <Phone size={18} aria-hidden="true" />
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
        </div>
        <div className="footer-contact-item">
          <Mail size={18} aria-hidden="true" />
          <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
        </div>
        <div className="footer-contact-item">
          <Clock size={18} aria-hidden="true" />
          <div style={{ width: "100%" }}>
            <strong style={{ color: "var(--color-white)" }}>Opening Hours</strong>
            <div className="footer-hours">
              {siteConfig.hours.map((entry) => (
                <div
                  key={entry.day}
                  className={entry.open ? "footer-hours-row" : "footer-hours-row footer-hours-row--closed"}
                >
                  <span>{entry.day}</span>
                  <span>{entry.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
