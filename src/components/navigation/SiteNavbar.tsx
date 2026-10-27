"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { primaryNav } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SiteNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  // Helper to check if a main group has an active child link
  const isGroupActive = (items: { href: string }[]) => {
    if (!pathname) return false;
    return items.some(item => pathname === item.href || pathname.startsWith(item.href + "/"));
  };

  return (
    <header className="site-header">
      <Container>
        <div className="nav-container">
          <Link href="/" className="nav-brand" onClick={() => setIsMobileOpen(false)}>
            <Image src="/briliantlogo.png" alt={`${siteConfig.name} Crest`} width={56} height={56} className="nav-brand-logo" priority />
            <div className="nav-brand-text">
              <span className="nav-brand-title">Brilliant Future</span>
              <span className="nav-brand-subtitle">Integrated School</span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            {primaryNav.map((group) => {
              const groupActive = isGroupActive(group.items);
              return (
                <div key={group.label} className="nav-item">
                  <button 
                    className={`nav-link ${groupActive ? "is-active" : ""}`} 
                    aria-expanded="false" 
                    aria-haspopup="true"
                  >
                    {group.label}
                    <ChevronDown size={16} />
                  </button>
                  <div className="nav-dropdown">
                    {group.items.map((item) => {
                      const itemActive = pathname === item.href;
                      return (
                        <Link 
                          key={item.label} 
                          href={item.href} 
                          className={`dropdown-link ${itemActive ? "is-active" : ""}`}
                        >
                          <strong>{item.label}</strong>
                          {item.description && <span>{item.description}</span>}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <Link href="/admissions/enquiry" tabIndex={-1}>
              <Button variant="primary">Admissions</Button>
            </Link>
          </nav>

          <button
            className="mobile-nav-toggle"
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {isMobileOpen && (
        <div className="mobile-menu-overlay">
          {primaryNav.map((group) => (
            <div key={group.label} className="mobile-menu-group">
              <h3>{group.label}</h3>
              <div>
                {group.items.map((item) => {
                  const itemActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`mobile-menu-link ${itemActive ? "is-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <Link href="/admissions/enquiry" onClick={() => setIsMobileOpen(false)} style={{ marginTop: "1rem" }}>
            <Button variant="primary" style={{ width: "100%", background: "var(--color-white)", color: "var(--color-navy)" }}>
              Enquire for Admissions
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
