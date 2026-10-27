export const siteConfig = {
  name: "Brilliant Future Integrated School",
  shortName: "BFIS",
  motto: "RESPECT, TOLERANCE AND EXCELLENCE.",
  description:
    "Brilliant Future Integrated School provides quality education from primary through senior secondary levels in Maiduguri, Borno State, Nigeria.",

  address: {
    full: "610111, Maiduguri, Borno State, Nigeria",
  },

  contact: {
    phone: "+234 813 829 8218",
    phoneHref: "tel:+2348138298218",
    // FLAGGED FOR VERIFICATION: "briliant" and "intergrated" may contain typos.
    // Preserved exactly as supplied per project instructions.
    email: "info@briliantfutureintergratedschool.com",
    emailHref: "mailto:info@briliantfutureintergratedschool.com",
  },

  hours: [
    { day: "Monday", time: "7:00 AM \u2013 4:30 PM", open: true },
    { day: "Tuesday", time: "7:00 AM \u2013 4:30 PM", open: true },
    { day: "Wednesday", time: "7:00 AM \u2013 4:30 PM", open: true },
    { day: "Thursday", time: "7:00 AM \u2013 4:30 PM", open: true },
    { day: "Friday", time: "Closed", open: false },
    { day: "Saturday", time: "Closed", open: false },
    { day: "Sunday", time: "7:00 AM \u2013 4:30 PM", open: true },
  ] as const,

  timezone: "Africa/Lagos",

  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
  },

  video: {
    youtubeId: "",
    title: "Welcome to Brilliant Future Integrated School",
    description:
      "Discover our vibrant learning community, dedicated staff, and the values that drive educational excellence in Maiduguri.",
  },

  prayerTimes: {
    apiEndpoint: "",
    apiKey: "",
    city: "Maiduguri",
    country: "Nigeria",
    latitude: 11.8469,
    longitude: 13.1571,
    method: 3,
  },
} as const;

export type SiteConfig = typeof siteConfig;
