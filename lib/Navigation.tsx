"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;

    const updateDropdownPosition = () => {
      if (!dropdown) return;
      const rect = dropdown.getBoundingClientRect();
      dropdown.style.setProperty("--dropdown-left", `${rect.left}px`);
    };

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const dropdownParent = document.querySelector(".dropdown");
    if (dropdownParent) {
      dropdownParent.addEventListener("mouseenter", updateDropdownPosition);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      if (dropdownParent) {
        dropdownParent.removeEventListener("mouseenter", updateDropdownPosition);
      }
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

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
            onClick={toggleDropdown}
          >
            Stories ▼
          </div>
          <ul className="dropdown-content" ref={dropdownRef}>
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
