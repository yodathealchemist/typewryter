"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  // Check if the link is active (matches exactly or starts with the given href)
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href; // Strict match for Home ("/")
    }
    return pathname.startsWith(href); // General check for other paths
  };

  return (
  <nav>
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
        margin: 0,
        justifyContent: "space-around",
        fontSize: "1.2rem",
      }}
    >
      <li style={{ flex: 1, textAlign: "center" }}>
        <Link href="/" className={`link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
      </li>
      <li style={{ flex: 1, textAlign: "center" }} className="dropdown">
        <div
          className={`link dropdown-toggle ${
            isActive("/stories") ? "active" : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          Stories ▼
        </div>
        <ul className="dropdown-content">
          <li>
            <Link
              href="/stories/clockmakerscurse"
              className={`link ${
                isActive("/stories/clockmakerscurse") ? "active" : ""
              }`}
            >
              The Clockmaker&apos;s Curse
            </Link>
          </li>
          <li>
            <Link
              href="/stories/whispersverdantthrone"
              className={`link ${
                isActive("/stories/whispersverdantthrone") ? "active" : ""
              }`}
            >
              Whispers of the Verdant Throne
            </Link>
          </li>
          <li>
            <Link
              href="/stories/beneathironskies"
              className={`link ${
                isActive("/stories/beneathironskies") ? "active" : ""
              }`}
            >
              Beneath the Iron Skies
            </Link>
          </li>
        </ul>
      </li>
      <li style={{ flex: 1, textAlign: "center" }}>
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
