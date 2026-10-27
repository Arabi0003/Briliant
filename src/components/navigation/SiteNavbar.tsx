'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { primaryNav, NavItem } from '@/lib/navigation';
import { Menu, X, ChevronDown, ChevronRight, Lock } from 'lucide-react';

export function SiteNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isLinkActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Logo Section */}
        <Link href="/" className="brand-link">
          <div className="brand-logo-wrap">
            <Image
              src="/briliantlogo.png"
              alt="Brilliant Future Integrated School Crest"
              width={48}
              height={48}
              priority
              style={{ objectFit: 'contain', width: '48px', height: '48px' }}
            />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">BRILLIANT FUTURE</span>
            <span className="brand-subtitle">INTEGRATED SCHOOL</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {primaryNav.map((item: NavItem) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = isLinkActive(item.href);

            if (hasChildren) {
              return (
                <div
                  key={item.title}
                  className="nav-item-rel"
                  onMouseEnter={() => setDesktopDropdown(item.title)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <button className={`nav-link-btn ${active ? 'active' : ''}`}>
                    {item.title === 'Portals' && <Lock size={14} style={{ color: '#d4af37', marginRight: '4px' }} />}
                    <span>{item.title}</span>
                    <ChevronDown size={14} />
                  </button>

                  {desktopDropdown === item.title && (
                    <div className="desktop-dropdown">
                      {item.children?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`dropdown-item-link ${pathname === subItem.href ? 'active' : ''}`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-btn ${active ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Serialized Accordion Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {primaryNav.map((item: NavItem) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = !!expandedCategories[item.title];
            const active = isLinkActive(item.href);

            if (hasChildren) {
              return (
                <div key={item.title} className="mobile-nav-group">
                  <button
                    onClick={() => toggleCategory(item.title)}
                    className={`mobile-accordion-btn ${active ? 'active' : ''}`}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.title === 'Portals' && <Lock size={16} style={{ color: '#d4af37' }} />}
                      {item.title}
                    </span>
                    {isExpanded ? (
                      <ChevronDown size={18} style={{ color: '#0066cc', transform: 'rotate(180deg)' }} />
                    ) : (
                      <ChevronRight size={18} style={{ color: '#94a3b8' }} />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mobile-sub-menu">
                      {item.children?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`mobile-sub-link ${pathname === subItem.href ? 'active' : ''}`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={item.href} className="mobile-nav-group">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-single-link ${active ? 'active' : ''}`}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default SiteNavbar;
