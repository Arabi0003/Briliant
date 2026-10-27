import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { SchoolIntroduction } from "@/components/home/SchoolIntroduction";
import { SchoolValues } from "@/components/home/SchoolValues";
import { QuickAccess } from "@/components/home/QuickAccess";
import { SchoolSections } from "@/components/home/SchoolSections";
import { AcademicHighlights } from "@/components/home/AcademicHighlights";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { AdmissionsSection } from "@/components/home/AdmissionsSection";
import { StudentLifeSection } from "@/components/home/StudentLifeSection";
import { NewsPreview } from "@/components/home/NewsPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { ContactPreview } from "@/components/home/ContactPreview";
import { SchoolVideoSection } from "@/components/home/SchoolVideoSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Brilliant Future Integrated School in Maiduguri, Borno State — quality primary and secondary education guided by Respect, Tolerance and Excellence.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <SchoolIntroduction />
      <SchoolValues />
      <QuickAccess />
      <SchoolSections />
      <AcademicHighlights />
      <LeadershipPreview />
      <AdmissionsSection />
      <StudentLifeSection />
      <NewsPreview />
      <GalleryPreview />
      <FaqPreview />
      <ContactPreview />
      <SchoolVideoSection />
    </main>
  );
}

