import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { BASE_URL } from "@/lib/config";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  alternates: {
    canonical: "./",
  },

  title: {
    default: "Mindful Treks & Wellness Journeys in Nepal",
    template: "%s | Mountain Trail Nepal",
  },

  description:
    "Join guided day hikes, wellness treks, yoga and meditation retreats, and Ayurveda and sound healing experiences across Nepal with certified wilderness and yoga guides.",

  applicationName: "Mountain Trail Nepal",
  keywords:
    "Nepal Trekking, Wellness Retreats, Yoga and Meditation, Ayurveda, Mountain Trail Nepal",

  openGraph: {
    title: "Mindful Treks & Wellness Journeys in Nepal",
    description:
      "Join guided day hikes, wellness treks, yoga and meditation retreats, and Ayurveda and sound healing experiences across Nepal.",
    url: BASE_URL,
    siteName: "Mountain Trail Nepal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="font-primary">{children}</body>
    </html>
  );
}