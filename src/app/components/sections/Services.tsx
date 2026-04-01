// ============================================================
// Services.tsx — Services section (CURRENTLY HIDDEN FROM PUBLIC)
// ============================================================
// This section is fully implemented but NOT visible to the public.
// The section and nav link will not render until services are ready.
//
// HOW TO ENABLE:
//   1. Set SERVICES_VISIBLE = true below.
//   2. Add "Services" link to NAV_ITEMS in Sidebar.tsx.
//   3. The section will automatically appear in the UI.
// ============================================================

import React from "react";
import { services } from "@/data/content";
import styles from "./Services.module.css";

// ─── VISIBILITY TOGGLE ────────────────────────────────────────
// Change this to `true` when you are ready to show services to the public.
const SERVICES_VISIBLE = false;

// ─── SERVICE ICONS (mapped by index) ─────────────────────────
const SERVICE_ICONS = ["📱", "🎨", "🌐"];

export default function Services() {
  // ── Guard: render nothing if services are not yet public ──
  if (!SERVICES_VISIBLE) return null;

  return (
    <section id="services" className={styles.services}>
      <div className="section-inner">
        <p className="section-title">What I Offer</p>
        <h2 className="section-heading">Top Notch Services</h2>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardIcon}>{SERVICE_ICONS[i] ?? "💡"}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.cardList}>
                {service.items.map((item) => (
                  <li key={item} className={styles.cardListItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.comingSoon}>
          <p className={styles.comingSoonText}>
            🚀 More services coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}
