"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import FloatingDock from "./components/FloatingDock";
import styles from "./page.module.css";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ "--mouse-x": `${mousePos.x}px`, "--mouse-y": `${mousePos.y}px` } as React.CSSProperties}>
      {/* ── Immersive Background ── */}
      <div className="noise-bg" />
      <div className="spotlight" />

      {/* ── Modern Navigation ── */}
      <Navbar />

      {/* ── Main Content Area ── */}
      <main className={styles.main}>
        {/* Landing hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About: bio, skills, timeline, leadership, certs, testimonials */}
        <section id="about">
          <About />
        </section>

        {/* Services */}
        <Services />

        {/* Portfolio: filterable project grid */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Blog: recent LinkedIn articles */}
        <section id="blog">
          <Blog />
        </section>

        {/* Contact: validated form */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer strip */}
        <footer className={styles.footer}>
          <div className="container">
            <p>© {new Date().getFullYear()} Kavinkumar R. Built with Next.js &amp; ☕</p>
          </div>
        </footer>
      </main>

      {/* ── Floating app dock widget ── */}
      <FloatingDock />
    </div>
  );
}
