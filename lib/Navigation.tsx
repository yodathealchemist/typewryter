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

    const closeDropdown = () => {
      if (dropdown) {
        dropdown.style.display = "none";
      }
    };

    const openDropdown = () => {
      if (dropdown) {
        dropdown.style.display = "block";
      }
    };

    const dropdownParent = document.querySelector(".dropdown");

    if (dropdownParent) {
      dropdownParent.addEventListener("mouseenter", openDropdown);
      dropdownParent.addEventListener("mouseleave", closeDropdown);
      dropdownParent.addEventListener("click", closeDropdown); // Close on item click
    }

    // Ensure dropdown closes on touch devices
    dropdown?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDropdown);
    });

    return () => {
      if (dropdownParent) {
        dropdownParent.removeEventListener("mouseenter", openDropdown);
        dropdownParent.removeEventListener("mouseleave", closeDropdown);
        dropdownParent.removeEventListener("click", closeDropdown);
      }
      dropdown?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeDropdown);
      });
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
