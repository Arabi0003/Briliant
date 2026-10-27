import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AuthLoginCard } from '@/components/auth/AuthLoginCard';

export const metadata = {
  title: "Administrator Portal | Brilliant Future Integrated School",
  description: "Full system configuration and SMS management.",
};

export default function AdminPortalPage() {
  return (
    <main>
      <PageHeader 
        title="Administrator Portal"
        subtitle="Full system configuration and SMS management."
      />
      <div className="auth-wrapper">
        <AuthLoginCard 
          role="Admin" 
          title="Administrator Portal Login"
          subtitle="Enter your secure credentials to continue."
        />
      </div>
    </main>
  );
}
