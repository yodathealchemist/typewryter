"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
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
          <Link href="/" className={`link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
        </li>
        <li className="dropdown">
          <div className="link dropdown-toggle" style={{ cursor: "pointer" }}>
            Stories ▼
          </div>
          <ul className="dropdown-content">
            <li>
              <Link
                href="/stories/clockmakerscurse"
                className={`link ${
                  isActive("/stories/clockmakerscurse") ? "active" : ""}`}
              >
                The Clockmaker&apos;s Curse
              </Link>
            </li>
            <li>
              <Link
                href="/stories/whispersverdantthrone"
                className={`link ${
                  isActive("/stories/whispersverdantthrone") ? "active" : ""}`}
              >
                Whispers of the Verdant Throne
              </Link>
            </li>
            <li>
              <Link
                href="/stories/beneathironskies"
                className={`link ${
                  isActive("/stories/beneathironskies") ? "active" : ""}`}
              >
                Beneath the Iron Skies
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/backstage/"
            className={`link ${isActive("/backstage") ? "active" : ""}`}
          >
            Backstage
          </Link>
        </li>
      </ul>
    </nav>
  );
}
