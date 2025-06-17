import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Egor Kolev - Fullstack Developer Portfolio",
  description: "Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies. Experienced in building scalable applications from frontend interfaces to backend architecture.",
  keywords: [
    "Egor Kolev",
    "Fullstack Developer", 
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Web Applications",
    "UI/UX Development",
    "API Development",
    "Database Design",
    "Responsive Design",
    "Modern Web Technologies"
  ],
  authors: [{ name: "Egor Kolev" }],
  creator: "Egor Kolev",
  publisher: "Egor Kolev",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Egor Kolev - Fullstack Developer Portfolio",
    description: "Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies. Experienced in building scalable applications from frontend interfaces to backend architecture.",
    siteName: "Egor Kolev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egor Kolev - Fullstack Developer Portfolio",
    description: "Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
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
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          dark:text-[#00FF00] 
          dark:bg-[#0f0a1b] 
          text-slate-800 
          dark:font-medium
          bg-slate-300 
          antialiased 
          font-bold 
        `}
      >
        {children}
      </body>
    </html>
  );
}
