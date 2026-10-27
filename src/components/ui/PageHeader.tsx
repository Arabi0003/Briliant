import React from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="page-header watermark-container">
      <Container>
        {eyebrow && <span className="section-heading__eyebrow" style={{ color: "var(--color-gold-light)" }}>{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Container>
    </header>
  );
}
