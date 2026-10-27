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
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/briliantlogo.png"
                alt="Brilliant Future Integrated School Crest"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#0a192f] leading-tight group-hover:text-[#0066cc] transition-colors">
                BRILLIANT FUTURE
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#0066cc] uppercase">
                INTEGRATED SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNav.map((item: NavItem) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isLinkActive(item.href);

              if (hasChildren) {
                return (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setDesktopDropdown(item.title)}
                    onMouseLeave={() => setDesktopDropdown(null)}
                  >
                    <button
                      className={
                        active
                          ? 'flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-colors text-[#0066cc] bg-blue-50 font-semibold'
                          : 'flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-colors text-gray-700 hover:text-[#0066cc] hover:bg-gray-50'
                      }
                    >
                      {item.title === 'Portals' && <Lock size={14} className="text-[#d4af37] mr-0.5" />}
                      {item.title}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>

                    {desktopDropdown === item.title && (
                      <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 transition-all duration-200">
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={
                              pathname === subItem.href
                                ? 'block px-4 py-2.5 text-sm transition-colors bg-blue-50 text-[#0066cc] font-semibold border-l-4 border-[#0066cc]'
                                : 'block px-4 py-2.5 text-sm transition-colors text-gray-700 hover:bg-gray-50 hover:text-[#0066cc]'
                            }
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
                  className={
                    active
                      ? 'px-3 py-2 rounded-md font-medium text-sm transition-colors text-[#0066cc] bg-blue-50 font-semibold'
                      : 'px-3 py-2 rounded-md font-medium text-sm transition-colors text-gray-700 hover:text-[#0066cc] hover:bg-gray-50'
                  }
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-md text-gray-700 hover:text-[#0066cc] hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Serialized Mobile Navigation Overlay with Accordion Dropdowns */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-50 overflow-y-auto border-t border-gray-200 shadow-2xl">
          <div className="px-4 py-4 space-y-2 pb-24">
            {primaryNav.map((item: NavItem) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!expandedCategories[item.title];
              const active = isLinkActive(item.href);

              if (hasChildren) {
                return (
                  <div key={item.title} className="border-b border-gray-100 pb-1">
                    <button
                      onClick={() => toggleCategory(item.title)}
                      className={
                        active
                          ? 'w-full flex justify-between items-center px-3 py-3 rounded-lg text-left font-semibold text-base transition-colors bg-blue-50 text-[#0066cc]'
                          : 'w-full flex justify-between items-center px-3 py-3 rounded-lg text-left font-semibold text-base transition-colors text-[#0a192f] hover:bg-gray-50'
                      }
                    >
                      <span className="flex items-center gap-2">
                        {item.title === 'Portals' && <Lock size={16} className="text-[#d4af37]" />}
                        {item.title}
                      </span>
                      {isExpanded ? (
                        <ChevronDown size={18} className="text-[#0066cc] transition-transform duration-200 rotate-180" />
                      ) : (
                        <ChevronRight size={18} className="text-gray-400 transition-transform duration-200" />
                      )}
                    </button>

                    {/* Serialized Accordion Sub-menu */}
                    {isExpanded && (
                      <div className="ml-4 pl-3 border-l-2 border-[#38bdf8] mt-1 space-y-1 py-1">
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={
                              pathname === subItem.href
                                ? 'block px-3 py-2.5 text-sm rounded-md transition-colors text-[#0066cc] font-bold bg-blue-50'
                                : 'block px-3 py-2.5 text-sm rounded-md transition-colors text-gray-600 hover:text-[#0066cc] hover:bg-gray-50'
                            }
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
                <div key={item.href} className="border-b border-gray-100 pb-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      active
                        ? 'block px-3 py-3 rounded-lg font-semibold text-base transition-colors bg-blue-50 text-[#0066cc] font-bold'
                        : 'block px-3 py-3 rounded-lg font-semibold text-base transition-colors text-[#0a192f] hover:bg-gray-50'
                    }
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteNavbar;
