"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            Stories {isDropdownOpen ? "▲" : "▼"}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link href="/stories/clockmakerscurse" className="link" onClick={closeDropdown}>
                  The Clockmaker&apos;s Curse
                </Link>
              </li>
              <li>
                <Link href="/stories/whispersverdantthrone" className="link" onClick={closeDropdown}>
                  Whispers of the Verdant Throne
                </Link>
              </li>
              <li>
                <Link href="/stories/beneathironskies" className="link" onClick={closeDropdown}>
                  Beneath the Iron Skies
                </Link>
              </li>
            </ul>
          )}
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
