export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'About Us',
    href: '/about',
    children: [
      { title: 'Overview', href: '/about' },
      { title: 'Mission & Vision', href: '/about/mission-vision' },
      { title: 'Leadership & Board', href: '/about/leadership' },
      { title: 'Crest, Motto & Anthem', href: '/about/crest-anthem' },
      { title: 'School History', href: '/about/history' },
      { title: 'Campus Facilities', href: '/about/facilities' },
    ],
  },
  {
    title: 'Academics',
    href: '/academics',
    children: [
      { title: 'Overview', href: '/academics' },
      { title: 'Early Childhood', href: '/academics/early-childhood' },
      { title: 'Primary School', href: '/academics/primary' },
      { title: 'Junior Secondary', href: '/academics/junior-secondary' },
      { title: 'Senior Secondary', href: '/academics/senior-secondary' },
      { title: 'Islamic & Tahfeez', href: '/academics/islamic-studies' },
      { title: 'STEM & Robotics', href: '/academics/stem-innovations' },
      { title: 'Academic Calendar', href: '/academics/calendar' },
    ],
  },
  {
    title: 'Admissions',
    href: '/admissions',
    children: [
      { title: 'Overview', href: '/admissions' },
      { title: 'Admissions Process', href: '/admissions/process' },
      { title: 'Requirements & Age', href: '/admissions/requirements' },
      { title: 'Fee Structure', href: '/admissions/fee-structure' },
      { title: 'Apply Online', href: '/admissions/apply-online' },
      { title: 'Transfer Students', href: '/admissions/transfer' },
      { title: 'Admissions FAQ', href: '/admissions/faq' },
    ],
  },
  {
    title: 'Portals',
    href: '/portals/student',
    children: [
      { title: 'Student SMS Portal', href: '/portals/student' },
      { title: 'Parent SMS Portal', href: '/portals/parent' },
      { title: 'Staff SMS Portal', href: '/portals/staff' },
      { title: 'Admin SMS Portal', href: '/portals/admin' },
    ],
  },
  {
    title: 'News & Events',
    href: '/news',
    children: [
      { title: 'School News', href: '/news' },
      { title: 'Upcoming Events', href: '/news/events' },
      { title: 'Photo Gallery', href: '/news/gallery' },
      { title: 'Termly Newsletter', href: '/news/newsletter' },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
    children: [
      { title: 'Contact Us', href: '/contact' },
      { title: 'Location & Map', href: '/contact/location-map' },
      { title: 'Career Opportunities', href: '/contact/careers' },
    ],
  },
];

export const MAIN_NAVIGATION = primaryNav;
