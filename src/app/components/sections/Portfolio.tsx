"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Monitor, Smartphone, Cloud, Terminal } from "lucide-react";
import { GithubIcon } from "../SocialIcons";
import { projects, Project, ProjectCategory } from "@/data/content";
import styles from "./Portfolio.module.css";

const CATEGORIES = Array.from(new Set(projects.map((p) => p.category)));
const FILTERS: { label: string; value: "All" | ProjectCategory }[] = [
  { label: "All", value: "All" },
  ...CATEGORIES.map((cat) => ({ label: cat, value: cat })),
];

const getIcon = (category: ProjectCategory) => {
  switch (category) {
    case "App": return <Smartphone size={16} />;
    case "Website": return <Monitor size={16} />;
    case "Cloud": return <Cloud size={16} />;
    case "Java": return <Terminal size={16} />;
    default: return null;
  }
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div 
      className={styles.modalOverlay} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={styles.modal}
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose} aria-label="Close modal"><X size={20} /></button>
        
        <div className={styles.modalGrid}>
          <div className={styles.modalVisual}>
            <Image src={project.thumbnail} alt={project.title} width={800} height={600} className={styles.modalImage} />
          </div>
          
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <span className="tag-neon">{project.category}</span>
              <h2 className={styles.modalTitle}>{project.title}</h2>
            </div>
            
            <p className={styles.modalDesc}>{project.description}</p>
            
            <div className={styles.modalSection}>
              <h3>Capabilities</h3>
              <ul className={styles.featureList}>
                {project.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            
            <div className={styles.modalSection}>
              <h3>Environment</h3>
              <div className={styles.techStack}>
                {project.technologies.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
            </div>
            
            <div className={styles.modalActions}>
              {project.links.filter(l => l.href).map(l => (
                <a key={l.label} href={l.href} target="_blank" className="btn-neon">
                  {l.label === 'GitHub' ? <GithubIcon size={18} /> : <ExternalLink size={18} />}
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <header className={styles.header}>
          <span className="tag-neon">Excellence</span>
          <h2 className="section-heading">Featured <span className={styles.accent}>Explorations</span></h2>
        </header>

        {/* Filters */}
        <div className={styles.filterBar}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterTab} ${activeFilter === f.value ? styles.activeTab : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.value !== 'All' && getIcon(f.value as ProjectCategory)}
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.imageBox}>
                  <Image src={project.thumbnail} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.viewLabel}>Inspect Project</span>
                      <div className={styles.cardTech}>
                        {project.technologies.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardHeader}>
                    <h3>{project.title}</h3>
                    <span className={styles.category}>{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
