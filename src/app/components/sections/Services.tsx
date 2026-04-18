"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Palette, Globe, Check } from "lucide-react";
import { services } from "@/data/content";
import styles from "./Services.module.css";

const SERVICE_ICONS = [
  <Smartphone key="app" size={32} />,
  <Palette key="design" size={32} />,
  <Globe key="web" size={32} />
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <header className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-neon"
          >
            Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            Specialized <span className={styles.accent}>Services</span>
          </motion.h2>
        </header>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div 
              key={service.title} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconBox}>{SERVICE_ICONS[i]}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.list}>
                {service.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <Check size={14} color="var(--color-neon-blue)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
