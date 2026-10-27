import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AuthLoginCard } from '@/components/auth/AuthLoginCard';

export const metadata = {
  title: "Student Portal | Brilliant Future Integrated School",
  description: "Access your grades, timetable, and assignments.",
};

export default function StudentPortalPage() {
  return (
    <main>
      <PageHeader 
        title="Student Portal"
        subtitle="Access your grades, timetable, and assignments."
      />
      <div className="auth-wrapper">
        <AuthLoginCard 
          role="Student" 
          title="Student Portal Login"
          subtitle="Enter your secure credentials to continue."
        />
      </div>
    </main>
  );
}
