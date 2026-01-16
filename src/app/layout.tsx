// /src/app/layout.css

import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const clash = localFont({
  src: "../fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

export const metadata: Metadata = {
  title: "AI Leaderboard",
  description: "Modern AI Rating Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${clash.variable} antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}