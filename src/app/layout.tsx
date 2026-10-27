import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/navigation/SiteNavbar";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { SchoolAIAssistant } from "@/components/ui/SchoolAIAssistant";
import { SplashScreen } from "@/components/ui/SplashScreen";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Brilliant Future Integrated School | Maiduguri, Borno State",
    template: "%s | Brilliant Future Integrated School",
  },
  description:
    "Brilliant Future Integrated School provides quality education from primary through senior secondary levels in Maiduguri, Borno State, Nigeria. Respect, Tolerance and Excellence.",
  keywords: [
    "Brilliant Future Integrated School",
    "BFIS",
    "Maiduguri school",
    "Borno State education",
    "primary school Maiduguri",
    "secondary school Maiduguri",
  ],
  icons: {
    icon: [
      { url: "/briliantlogo.png", type: "image/png" },
    ],
    shortcut: "/briliantlogo.png",
    apple: "/briliantlogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Brilliant Future Integrated School",
    title: "Brilliant Future Integrated School",
    description:
      "Quality education from primary through senior secondary in Maiduguri, Borno State, Nigeria.",
    images: [{ url: "/briliantlogo.png", width: 512, height: 512, alt: "BFIS Crest" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        <link rel="preload" href="/briliantlogo.png" as="image" type="image/png" />
      </head>
      <body>
        <SplashScreen />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteNavbar />
        {children}
        <SiteFooter />
        <SchoolAIAssistant />
      </body>
    </html>
  );
}
