"use client";
// ============================================================
// Hero.tsx — Landing section with animated avatar and typewriter tagline
// ============================================================
// Renders the full-screen hero with rotating avatar ring, gradient name,
// typewriter role animation, CTA buttons, and scroll indicator.
// ============================================================

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  // ─── Typewriter state ─────────────────────────────────────
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = personalInfo.taglines[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      // Typing
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      // Pause before deleting
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      // Move to next role
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % personalInfo.taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className={styles.hero}>
      {/* Decorative dot-grid background */}
      <div className={styles.gridDecor} aria-hidden />

      <div className={styles.content}>
        {/* ─── Avatar ─── */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.displayName}
                width={132}
                height={132}
                priority
                className={styles.avatarImg}
              />
            </div>
          </div>
        </div>

        {/* ─── Name ─── */}
        <h1 className={styles.name}>{personalInfo.displayName}</h1>

        {/* ─── Typewriter tagline ─── */}
        <div className={styles.taglineWrapper} aria-label={`Role: ${displayed}`}>
          <span className={styles.taglinePrefix}>I&apos;m a</span>
          <span className={styles.taglineText}>{displayed}</span>
        </div>

        {/* ─── CTAs ─── */}
        <div className={styles.actions}>
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download CV
          </a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div className={styles.scrollIndicator} aria-hidden>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
