// ============================================================
// page.tsx — The main portfolio page assembling all sections
// ============================================================
// This is the single-page entry point. Each section is a separate
// React component driven by content.ts data.
//
// TO ADD/REMOVE SECTIONS: simply import and place the component here.
// TO ENABLE SERVICES: flip SERVICES_VISIBLE in Services.tsx to `true`.
// ============================================================

import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import FloatingDock from "./components/FloatingDock";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── Ambient background orbs ── */}
      <div className="orb orb-1" aria-hidden />
      <div className="orb orb-2" aria-hidden />

      {/* ── Sidebar Navigation ── */}
      <Sidebar />

      {/* ── Main Content Area ── */}
      <main className={styles.main}>

        {/* Landing hero */}
        <Hero />

        {/* About: bio, skills, timeline, leadership, certs, testimonials */}
        <About />

        {/* Services: hidden until SERVICES_VISIBLE = true in Services.tsx */}
        <Services />

        {/* Portfolio: filterable project grid */}
        <Portfolio />

        {/* Blog: recent LinkedIn articles */}
        <Blog />

        {/* Contact: validated form */}
        <Contact />

        {/* Footer strip */}
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Kavinkumar R. Built with Next.js &amp; ☕</p>
        </footer>
      </main>

      {/* ── Floating app dock widget ── */}
      <FloatingDock />
    </>
  );
}
