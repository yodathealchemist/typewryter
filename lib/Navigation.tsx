"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  useEffect(() => {
    const dropdown = document.querySelector(".dropdown-content") as HTMLElement;

    const updateDropdownPosition = () => {
      if (!dropdown) return;
      const rect = dropdown.getBoundingClientRect();
      dropdown.style.setProperty("--dropdown-left", `${rect.left}px`);
    };

    const dropdownParent = document.querySelector(".dropdown");
    if (dropdownParent) {
      dropdownParent.addEventListener("mouseenter", updateDropdownPosition);
    }

    return () => {
      if (dropdownParent) {
        dropdownParent.removeEventListener("mouseenter", updateDropdownPosition);
      }
    };
  }, []);

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
              <Link href="/stories/clockmakerscurse" className="link">
                The Clockmaker&apos;s Curse
              </Link>
            </li>
            <li>
              <Link href="/stories/whispersverdantthrone" className="link">
                Whispers of the Verdant Throne
              </Link>
            </li>
            <li>
              <Link href="/stories/beneathironskies" className="link">
                Beneath the Iron Skies
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
  );
}