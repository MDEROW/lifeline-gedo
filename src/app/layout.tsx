import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lifeline Gedo | Humanitarian Aid in Somalia",
  description:
    "Lifeline Gedo is a Somali humanitarian organization delivering life-saving health, food, water, and resilience programs in the Gedo region of Somalia.",
  keywords: ["Somalia", "humanitarian", "Gedo", "NGO", "aid", "health", "food security"],
  openGraph: {
    title: "Lifeline Gedo | Humanitarian Aid in Somalia",
    description: "Saving lives in Somalia's most neglected region.",
    url: "https://lifelineorganisation.org",
    siteName: "Lifeline Gedo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F9F6F0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
