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
  display: "swap", // Optimized font loading
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "type_wryter | Interactive Storytelling Platform",
  description: "Engage with immersive, interactive stories across various genres.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico", // Same icon for all devices
    apple: "/favicon.ico", // Apple devices
  },
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
        <title>type_wryter | Interactive Storytelling</title>
        <meta name="description" content="Engage with immersive, interactive stories across various genres." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Header Component
function Header() {
  return (
    <header>
      <Logo />
      <h1>type_wryter</h1>
      <Navigation />
    </header>
  );
}

// Logo Component
function Logo() {
  return (
    <div className="logo-container" aria-label="type_wryter Logo">
      <Image
        src="/logo.webp"
        alt="type_wryter Logo"
        width={75}
        height={75}
        priority
      />
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <nav aria-label="Footer Navigation">
        <Link href="/imprint" className="link">
          Imprint | Privacy Policy | Cookies Policy
        </Link>
      </nav>
      <p>&copy; 2024 type_wryter</p>
    </footer>
  );
}
