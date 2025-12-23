import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alwin Kunjachan - Portfolio",
  description: "Software Engineer | Full Stack Developer | Portfolio of Alwin Kunjachan",
  keywords: ["Alwin Kunjachan", "Software Engineer", "Full Stack Developer", "Portfolio", "ZeroNorth", "Angular", "Node.js"],
  authors: [{ name: "Alwin Kunjachan" }],
  openGraph: {
    title: "Alwin Kunjachan - Portfolio",
    description: "Software Engineer | Full Stack Developer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alwin Kunjachan - Portfolio",
    description: "Software Engineer | Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}

