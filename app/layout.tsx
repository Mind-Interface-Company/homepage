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
  title: "Mind Interface Company — A Voice For The Voiceless.",
  description:
    "Non-invasive, EEG-based technology that lets people with locked-in syndrome, ALS, and other conditions that block speech and movement turn their thoughts into text — no surgery required.",
  openGraph: {
    title: "Mind Interface Company",
    description:
      "Non-invasive brain-computer interfaces that turn thought into communication.",
    siteName: "Mind Interface Company",
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
