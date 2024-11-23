"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Detect if it's desktop or mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    if (!isDesktop) {
      setIsOpen((prev) => !prev); // Toggle dropdown on mobile
    }
  };

  const handleClose = () => {
    if (!isDesktop) {
      setIsOpen(false); // Close dropdown on mobile
    }
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
        >
          <div
            className="link dropdown-toggle"
            style={{ cursor: "pointer" }}
            onClick={handleToggle} // Toggle on click (mobile)
          >
            Stories ▼
          </div>
          {isOpen && (
            <ul
              className="dropdown-content"
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                border: "1px solid #ddd",
                zIndex: 1,
                listStyle: "none",
                padding: "10px",
                margin: 0,
                backgroundColor: "#f8f9fa",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
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
