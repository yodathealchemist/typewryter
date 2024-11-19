import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "TypeWryteR",
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
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f9", // Update with your logo's background color
          color: "#333",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* Logo */}
          <Image src="/logo.webp" alt="TypeWryteR Logo" width={80} height={80} />

          {/* TWR Under the Logo */}
          <h1 style={{ margin: "10px 0", fontSize: "2rem", color: "#333" }}>
            TWR
          </h1>

          {/* Menu */}
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                padding: 0,
                margin: 0,
                gap: "15px",
                fontSize: "1.2rem",
              }}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/stories/fantasy">Fantasy</a>
              </li>
              <li>
                <a href="/stories/crime">Crime</a>
              </li>
              <li>
                <a href="/stories/romance">Romance</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ marginTop: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
