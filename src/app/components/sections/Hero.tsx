"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";
import styles from "./Hero.module.css";
import { ChevronRight, ArrowDownRight } from "lucide-react";

/**
 * Hero Section - Redesigned for "Deep Obsidian & Neon Fluid"
 * Balanced 2-column layout to prevent overlaps.
 */
export default function Hero() {
  const { name, taglines, avatar } = personalInfo;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.canvas}>
        <div className={styles.fluidBg} />
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Text Content */}
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="tag-neon">Available for hire</span>
              <h1 className={styles.headline}>
                <span className={styles.outline}>Crafting</span>{' '}
                <span className={styles.gradientText}>Digital</span>{' '}
                Phenomena
              </h1>
            </motion.div>

            <motion.p 
              className={styles.subheadline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I am <span className={styles.highlight}>{name}</span>, an {taglines[0]} specializing in architecture that feels like the future.
            </motion.p>

            <motion.div 
              className={styles.ctaGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#portfolio" className="btn-neon">
                <span>Explore Works</span>
                <ArrowDownRight size={18} />
              </a>
              <a href="#contact" className="btn-ghost">
                <span>Start Project</span>
                <ChevronRight size={18} />
              </a>
            </motion.div>
        </div>
      </div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={styles.mouse}
        />
      </div>
    </section>
  );
}
