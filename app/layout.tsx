import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Emmanuel Foundation - Empowering Communities",
  description:
    "Team Emmanuel Foundation is dedicated to empowering communities through education, healthcare, and sustainable development programs.",

  keywords: [
    "charity",
    "foundation",
    "donate",
    "community",
    "Kenya",
    "Africa",
    "education",
    "healthcare",
  ],

  manifest: "/manifest.json",

  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Team Emmanuel Foundation",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
