// ============================================================
// FloatingDock.tsx — Floating app store shortcut widget
// ============================================================
// Renders a fixed bottom-right pill with app icons linking to codebykavin.netlify.app.
// ============================================================

import React from "react";
import Image from "next/image";
import { floatingDock } from "@/data/content";
import styles from "./FloatingDock.module.css";

export default function FloatingDock() {
  return (
    <div className={styles.dock}>
      <a
        href={floatingDock.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={floatingDock.label}
      >
        <div className={styles.icons}>
          {floatingDock.icons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className={styles.icon}
            />
          ))}
        </div>
        <span className={styles.text}>{floatingDock.label}</span>
      </a>
    </div>
  );
}
