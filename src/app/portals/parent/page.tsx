import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AuthLoginCard } from '@/components/auth/AuthLoginCard';

export const metadata = {
  title: "Parent Portal | Brilliant Future Integrated School",
  description: "Monitor your child's performance and pay fees.",
};

export default function ParentPortalPage() {
  return (
    <main>
      <PageHeader 
        title="Parent Portal"
        subtitle="Monitor your child's performance and pay fees."
      />
      <div className="auth-wrapper">
        <AuthLoginCard 
          role="Parent" 
          title="Parent Portal Login"
          subtitle="Enter your secure credentials to continue."
        />
      </div>
    </main>
  );
}
