'use client';

import React from 'react';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  description?: string;
}

export function PageHeader({ title, subtitle, eyebrow, description }: PageHeaderProps) {
  const displaySubtitle = subtitle || description;
  return (
    <section className="page-header watermark-container">
      <div className="container">
        {eyebrow && <span className="brand-subtitle" style={{ color: '#d4af37', marginBottom: '0.5rem', display: 'block' }}>{eyebrow}</span>}
        <h1>{title}</h1>
        {displaySubtitle && <p>{displaySubtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
