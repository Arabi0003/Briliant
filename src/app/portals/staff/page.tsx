import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AuthLoginCard } from '@/components/auth/AuthLoginCard';

export const metadata = {
  title: "Staff Portal | Brilliant Future Integrated School",
  description: "Manage attendance, enter scores, and HR docs.",
};

export default function StaffPortalPage() {
  return (
    <main>
      <PageHeader 
        title="Staff Portal"
        subtitle="Manage attendance, enter scores, and HR docs."
      />
      <div className="auth-wrapper">
        <AuthLoginCard 
          role="Staff" 
          title="Staff Portal Login"
          subtitle="Enter your secure credentials to continue."
        />
      </div>
    </main>
  );
}
