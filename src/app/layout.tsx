import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ralph Riener Delena | Web Developer from the Philippines",
  description:
    "Portfolio of Ralph Riener Delena, a web developer from the Philippines specializing in frontend and backend development, clean code, and elegant digital solutions.",
  keywords: [
    "Ralph Riener Delena",
    "Web Developer Philippines",
    "Frontend Developer",
    "Backend Developer",
    "Laravel",
    "JavaScript",
    "HTML",
    "CSS",
    "Portfolio",
  ],
  authors: [{ name: "Ralph Riener Jardin Delena" }],
  openGraph: {
    title: "Ralph Riener Delena | Web Developer",
    description:
      "Explore the portfolio of Ralph Riener Delena, a web developer from the Philippines passionate about building elegant digital platforms.",
    url: "https://ralphjdelena.com",
    siteName: "Ralph Riener Delena",
    images: [
      {
        url: "/images/01.jpg",
        width: 1200,
        height: 630,
        alt: "Ralph Riener Delena Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
