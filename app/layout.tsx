import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robin Jarůšek - Frontend Engineer",
  description:
    "Portfolio of Robin Jarůšek, a passionate frontend engineer building accessible tools for the web.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
