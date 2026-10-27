export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const primaryNav: NavGroup[] = [
  {
    label: "Our School",
    items: [
      { label: "About the School", href: "/about", description: "Our history and commitment to excellence" },
      { label: "Vision and Mission", href: "/vision-mission", description: "The principles that guide us" },
      { label: "School Facilities", href: "/facilities", description: "Campus infrastructure" },
      { label: "School Policies", href: "/policies", description: "Guidelines and regulations" },
    ],
  },
  {
    label: "Academics",
    items: [
      { label: "Primary Section", href: "/academics/primary", description: "Foundation years" },
      { label: "Junior Secondary", href: "/academics/junior-secondary", description: "Building confidence" },
      { label: "Senior Secondary", href: "/academics/senior-secondary", description: "Preparing for higher education" },
      { label: "Curriculum & Subjects", href: "/academics/curriculum", description: "What we teach" },
      { label: "Academic Calendar", href: "/academics/calendar", description: "Key dates and terms" },
    ],
  },
  {
    label: "People",
    items: [
      { label: "School Leadership", href: "/people/leadership", description: "Our management team" },
      { label: "Teaching Staff", href: "/people/teachers", description: "Dedicated educators" },
      { label: "Student Community", href: "/people/students", description: "Life at BFIS" },
    ],
  },
  {
    label: "Admissions",
    items: [
      { label: "Overview", href: "/admissions", description: "How to join our school" },
      { label: "Requirements", href: "/admissions/requirements", description: "Entry criteria" },
      { label: "Online Enquiry", href: "/admissions/enquiry", description: "Submit an enquiry" },
    ],
  },
  {
    label: "Student Life",
    items: [
      { label: "Activities", href: "/student-life/activities", description: "Clubs and sports" },
      { label: "Gallery", href: "/gallery", description: "Photographs of school life" },
      { label: "News", href: "/news", description: "Announcements" },
    ],
  },
  {
    label: "Portals",
    items: [
      { label: "Student Portal", href: "/portals/student", description: "SMS Access for Students" },
      { label: "Parent Portal", href: "/portals/parent", description: "SMS Access for Parents" },
      { label: "Staff Portal", href: "/portals/staff", description: "SMS Access for Teachers" },
      { label: "Admin Login", href: "/portals/admin", description: "School Management System" },
    ],
  },
];

export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];
