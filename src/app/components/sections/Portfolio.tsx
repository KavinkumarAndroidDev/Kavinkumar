"use client";
// ============================================================
// Portfolio.tsx — Filterable project grid with detail modal
// ============================================================
// Renders all projects from content.ts with category filtering.
// Clicking a card opens a modal with full project details.
// ============================================================

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { projects, Project, ProjectCategory } from "@/data/content";
import styles from "./Portfolio.module.css";

// ─── FILTER OPTIONS ───────────────────────────────────────────
const FILTERS: { label: string; value: "All" | ProjectCategory }[] = [
  { label: "All",     value: "All" },
  { label: "App",     value: "App" },
  { label: "Website", value: "Website" },
  { label: "Cloud",   value: "Cloud" },
];

// ─── PROJECT MODAL ────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal aria-label={project.title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* ── Header Image ── */}
        <div className={styles.modalHeader}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={800}
            height={450}
            className={styles.modalImage}
          />
          <button className={styles.modalClose} onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* ── Content ── */}
        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{project.title}</h2>

          <div className={styles.modalMeta}>
            <span className="tag">{project.category}</span>
            <span className="tag">{project.status}</span>
          </div>

          <p className={styles.modalDescription}>{project.description}</p>

          {/* Features */}
          <p className={styles.modalSectionTitle}>Key Features</p>
          <ul className={styles.featureList}>
            {project.features.map((f) => (
              <li key={f} className={styles.featureItem}>{f}</li>
            ))}
          </ul>

          {/* Tech stack */}
          <p className={styles.modalSectionTitle}>Technologies Used</p>
          <div className={styles.techTags}>
            {project.technologies.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div className={styles.modalLinks}>
            {project.links
              .filter((l) => l.href)
              .map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {l.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const openModal = useCallback((p: Project) => setSelectedProject(p), []);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="section-inner">
        <p className="section-title">My Work</p>
        <h2 className="section-heading">Creative Portfolio</h2>

        {/* ── Filter Tabs ── */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${activeFilter === f.value ? styles.active : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Project Grid ── */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <div
              key={project.title}
              className={styles.card}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openModal(project)}
              aria-label={`View ${project.title} details`}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardOverlayIcon}>View Details</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardMeta}>
                  <span className="tag">{project.category}</span>
                  <span className={styles.cardStatus}>{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
