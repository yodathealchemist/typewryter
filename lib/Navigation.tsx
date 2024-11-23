"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const dropdown = document.querySelector(".dropdown-content") as HTMLElement;

    const updateDropdownPosition = () => {
      if (!dropdown) return;
      const rect = dropdown.getBoundingClientRect();
      dropdown.style.setProperty("--dropdown-left", `${rect.left}px`);
    };

    const handleResize = () => {
      // Check if the device is desktop (hover interaction) or mobile (touch interaction)
      setIsDesktop(window.innerWidth > 768);
    };

    // Update dropdown position on hover (desktop) or when opened (mobile)
    if (isDesktop || isOpen) {
      updateDropdownPosition();
    }

    // Listen for window resize to switch between desktop and mobile interactions
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, isDesktop]);

  const handleToggle = () => {
    if (!isDesktop) {
      setIsOpen((prev) => !prev); // Toggle dropdown for mobile
    }
  };

  const handleClose = () => {
    setIsOpen(false); // Close dropdown for mobile
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
        <li
          className="dropdown"
          onMouseEnter={() => isDesktop && setIsOpen(true)} // Open on hover (desktop)
          onMouseLeave={() => isDesktop && setIsOpen(false)} // Close on hover out (desktop)
          onClick={handleToggle} // Toggle on click (mobile)
        >
          <div className="link dropdown-toggle" style={{ cursor: "pointer" }}>
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
            <li onClick={handleClose}>
              <Link href="/stories/clockmakerscurse" className="link">
                The Clockmaker&apos;s Curse
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link href="/stories/whispersverdantthrone" className="link">
                Whispers of the Verdant Throne
              </Link>
            </li>
            <li onClick={handleClose}>
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
