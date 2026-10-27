import React from 'react';
import Link from 'next/link';
import { primaryNav, NavItem } from '@/lib/navigation';

export function FooterNavigation() {
  const aboutLinks = primaryNav.find((item: NavItem) => item.title === 'About Us')?.children || [];
  const academicLinks = primaryNav.find((item: NavItem) => item.title === 'Academics')?.children || [];
  const portalLinks = primaryNav.find((item: NavItem) => item.title === 'Portals')?.children || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase border-b border-gray-700 pb-2">
          About BFIS
        </h4>
        <ul className="space-y-2 text-sm text-gray-300">
          {aboutLinks.slice(0, 6).map((subItem: NavItem) => (
            <li key={subItem.href}>
              <Link href={subItem.href} className="hover:text-[#d4af37] transition-colors">
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase border-b border-gray-700 pb-2">
          Academics
        </h4>
        <ul className="space-y-2 text-sm text-gray-300">
          {academicLinks.slice(0, 6).map((subItem: NavItem) => (
            <li key={subItem.href}>
              <Link href={subItem.href} className="hover:text-[#d4af37] transition-colors">
                {subItem.title}
              </Link>
            </li>
          ))}
          <li>
              <Link href="/student-life/brain-games" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 font-bold text-[#38bdf8]">
                🧠 Brain Challenge
              </Link>
            </li>
          </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase border-b border-gray-700 pb-2">
          SMS Gateways
        </h4>
        <ul className="space-y-2 text-sm text-gray-300">
          {portalLinks.map((subItem: NavItem) => (
            <li key={subItem.href}>
              <Link href={subItem.href} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block"></span>
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterNavigation;
