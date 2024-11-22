import { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/lib/Navigation";
import "./globals.css";

// Fonts
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

// Metadata
export const metadata: Metadata = {
  title: "type_wryter",
  description: "Interactive storytelling platform.",
};

// Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>type_wryter</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "Arial, sans-serif", color: "#333" }}
      >
        <Header />
        <main style={{ marginTop: "20px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Header Component
function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Logo />
      <h1 style={{ margin: "10px 0", fontSize: "2rem", color: "#333" }}>
        type_wryter
      </h1>
      <Navigation />
    </header>
  );
}

// Logo Component
function Logo() {
  return (
    <div
      style={{
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/logo.webp"
        alt="type_wryter Logo"
        width={75}
        height={75}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "20px",
        borderTop: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <Link href="/imprint" className="link">
        <b>Imprint | Privacy Policy | Cookies Policy</b>
      </Link>
    </footer>
  );
}
