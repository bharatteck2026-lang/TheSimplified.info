import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google"; // Correct imports
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation"; // Import animation handler

// Configure fonts
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Home | Simplified Media Studio",
  description: "Simplified Media Studio - Premium Video Production and Photography Agency. We craft cinematic visual experiences for brands.",
  keywords: "Video Production, Photography, Post-Production, Brand Storytelling, Cinematic, Media Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lato.variable} antialiased`}>
        <Navbar />
        <ScrollAnimation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
