import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lifeline Gedo | Humanitarian Aid in Somalia",
  description:
    "Lifeline Gedo is a Somali-led humanitarian organisation delivering life-saving health, food, water, and resilience programs in Somalia's Gedo region since 2005.",
  keywords: ["Somalia", "humanitarian", "Gedo", "NGO", "aid", "health", "food security", "WASH"],
  openGraph: {
    title: "Lifeline Gedo | Humanitarian Aid in Somalia",
    description: "Saving lives in Somalia's most neglected region since 2005.",
    url: "https://lifelineorganisation.org",
    siteName: "Lifeline Gedo",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-[family-name:var(--font-dm)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
