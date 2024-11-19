import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Typewryter",
  description: "Interactive storytelling platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          style={{
            padding: "10px",
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <Image
            src="/logo.webp"
            alt="Typewryter Logo"
            width={40}
            height={40}
            style={{ marginRight: "10px" }}
          />

          {/* Navigation Links */}
          <div>
            <Link href="/">Home</Link> |{" "}
            <Link href="/stories/fantasy">Fantasy</Link> |{" "}
            <Link href="/stories/crime">Crime</Link> |{" "}
            <Link href="/stories/romance">Romance</Link>
          </div>
        </nav>

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
