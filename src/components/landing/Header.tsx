"use client";

import { useState } from "react";

const links = [
  { href: "#how", label: "how it works" },
  { href: "#native", label: "written twice" },
  { href: "#pricing", label: "pricing" },
  { href: "#faq", label: "faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="l-header">
        <a href="#top" className="l-logo">
          solo queue<span className="l-logo-dot" aria-hidden="true" />
        </a>
        <nav aria-label="Site" className="l-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="l-row" style={{ gap: 12 }}>
          <a href="#start" className="lbtn sm desktop-only">
            Get early access
          </a>
          <button
            className="lbtn l-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </header>
      <nav
        aria-label="Mobile"
        className="l-mobile-menu"
        data-open={open}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#start" onClick={() => setOpen(false)}>
          Get early access →
        </a>
      </nav>
    </>
  );
}
