"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="main-content">
      <PageHeader title="Online Admissions Enquiry" eyebrow="Admissions" description="Complete the form below to begin the application process for your child." />
      
      <section className="wide-section watermark-container">
        <Container width="narrow">
          {submitted ? (
            <div style={{ background: "var(--color-pale-blue)", border: "2px solid var(--color-royal)", padding: "3rem", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
              <h2 style={{ color: "var(--color-royal-dark)", fontSize: "2rem", marginBottom: "1rem" }}>Enquiry Received!</h2>
              <p style={{ fontSize: "1.1rem", color: "var(--color-neutral-700)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Thank you for your interest in Brilliant Future Integrated School. Our admissions officer will review your details and contact you via telephone or email within 24 to 48 hours.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Enquiry</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)", border: "1px solid var(--color-neutral-200)" }}>
              <h2 style={{ color: "var(--color-navy)", fontSize: "1.75rem", marginBottom: "1.5rem" }}>Student & Guardian Details</h2>
              
              <div style={{ display: "grid", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Child's Full Name *</label>
                  <input required type="text" placeholder="e.g. Ibrahim Abubakar" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                </div>

                <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Child's Age *</label>
                    <input required type="number" placeholder="e.g. 10" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Target Class *</label>
                    <select required style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)", background: "white" }}>
                      <option value="">Select Level</option>
                      <option value="Primary 1-6">Primary Section</option>
                      <option value="JSS 1-3">Junior Secondary (JSS1-3)</option>
                      <option value="SSS 1-3">Senior Secondary (SSS1-3)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Parent / Guardian Full Name *</label>
                  <input required type="text" placeholder="e.g. Alh. Mustapha Abubakar" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                </div>

                <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Phone Number *</label>
                    <input required type="tel" placeholder="+234 800 000 0000" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Email Address</label>
                    <input type="email" placeholder="parent@example.com" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Additional Message / Questions</label>
                  <textarea rows={4} placeholder="Tell us about your child or ask any specific questions..." style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--color-neutral-300)" }}></textarea>
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" style={{ width: "100%" }}>Submit Enquiry</Button>
            </form>
          )}
        </Container>
      </section>
    </main>
  );
}
