import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bilal | Full-Stack Developer",
  description:
    "Professional portfolio showcasing expertise in C#, .NET, ASP.NET, SQL, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "C#",
    ".NET",
    "ASP.NET",
    "SQL",
    "Next.js",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
