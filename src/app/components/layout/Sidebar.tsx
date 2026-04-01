"use client";
// ============================================================
// Sidebar.tsx — Fixed navigation sidebar (desktop) + mobile menu
// ============================================================
// Renders the left sidebar with avatar, nav links, and social icons.
// On mobile (<1024px), shows a top bar with a hamburger menu instead.
// ============================================================

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/data/content";
import styles from "./Sidebar.module.css";

// ─── NAV ITEMS ────────────────────────────────────────────────
// Services link is intentionally omitted (hidden from public navigation).
// Add it back when the services section is ready to be revealed.
const NAV_ITEMS = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog",      href: "#blog" },
  { label: "Contact",   href: "#contact" },
];

// ─── SOCIAL ICON RENDERER ─────────────────────────────────────
// Maps icon type string to an appropriate SVG/emoji icon.
function SocialIcon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    linkedin:    "in",
    github:      "gh",
    link:        "🔗",
    "google-play": "▶",
  };
  return <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>{icons[type] ?? "•"}</span>;
}

// ─── COMPONENT ────────────────────────────────────────────────
export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track which section is currently in view via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => i.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on section click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.avatarRing}>
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.displayName}
              width={74}
              height={74}
              className={styles.avatarImg}
              priority
            />
          </div>
          <span className={styles.logoName}>{personalInfo.shortName}</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <a
                  href={item.href}
                  className={activeSection === item.href.replace("#", "") ? styles.active : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon"
            >
              <SocialIcon type={link.icon} />
            </a>
          ))}
        </div>
      </aside>

      {/* ── Mobile Topbar ── */}
      <header className={styles.topbar}>
        <span className={styles.topbarName}>{personalInfo.shortName}</span>
        <div
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen((p) => !p)}
          role="button"
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileSocial}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon"
              onClick={handleNavClick}
            >
              <SocialIcon type={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
