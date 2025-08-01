import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";


const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TutorIQ ",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }}}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <Navbar />
          
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
