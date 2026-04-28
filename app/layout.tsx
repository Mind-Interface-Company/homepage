import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mind Interface — Your Mind. The Interface.",
  description:
    "Brain-computer interfaces built for the real world. No sci-fi promises — just technology that listens. Join the founding cohort.",
  openGraph: {
    title: "Mind Interface",
    description: "Brain-computer interfaces built for the real world.",
    siteName: "Mind Interface",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ivory text-navy antialiased">{children}</body>
    </html>
  );
}
