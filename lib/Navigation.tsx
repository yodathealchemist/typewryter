"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dropdown = document.querySelector(".dropdown-content") as HTMLElement;

    const updateDropdownPosition = () => {
      if (!dropdown) return;
      const rect = dropdown.getBoundingClientRect();
      dropdown.style.setProperty("--dropdown-left", `${rect.left}px`);
    };

    const closeDropdown = () => setIsOpen(false);

    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        closeDropdown();
      }
    };

    if (isOpen) {
      updateDropdownPosition();
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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
          <div
            className="link dropdown-toggle"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Stories ▼
          </div>
          <ul
            className={`dropdown-content ${isOpen ? "visible" : ""}`}
            style={{
              visibility: isOpen ? "visible" : "hidden",
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.2s ease, visibility 0.2s ease",
            }}
          >
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
