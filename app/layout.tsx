import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Robin Jarůšek - AI & Fullstack Engineer",
  description:
    "Portfolio of Robin Jarůšek, a passionate AI & fullstack engineer building accessible tools.",
  icons: {
    icon: "/portfolio.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
