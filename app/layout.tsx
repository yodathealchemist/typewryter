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
  title: "TypeWryter",
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
              alt="TypeWryteR Logo"
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>

          <h1 style={{ margin: "10px 0", fontSize: "2rem", color: "#333" }}>
            Type_Wryter
          </h1>

          <nav>
            <ul
              style={{
                display: "flex",
                backgroundColor: "#f8f9fa",
                listStyle: "none",
                padding: 0,
                margin: 0,
                gap: "15px",
                fontSize: "1.2rem",
              }}
            >
              <li>
                <Link href="/" className="link">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <div className="link dropdown-toggle" style={{ cursor: "pointer" }}>
                  Stories ▼
                </div>
                <ul className="dropdown-content">
                  <li>
                    <Link href="/stories/fantasy" className="link">
                      Fantasy
                    </Link>
                  </li>
                  <li>
                    <Link href="/stories/crime" className="link">
                      Crime
                    </Link>
                  </li>
                  <li>
                    <Link href="/stories/romance" className="link">
                      Romance
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/backstage/" className="link">
                  Backstage
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main style={{ marginTop: "20px" }}>{children}</main>

        <footer
          style={{
            marginTop: "50px",
            padding: "20px",
            borderTop: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              fontSize: "0.9rem",
            }}
          >
            <li>
              <Link href="/privacy-policy" className="link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/imprint" className="link">
                Imprint
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
