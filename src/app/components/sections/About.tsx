"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  User, MapPin, Briefcase, GraduationCap, 
  Award, FileText, ExternalLink, Quote,
  ChevronRight, BrainCircuit
} from "lucide-react";
import {
  personalInfo,
  skillGroups,
  workExperience,
  education,
  leadershipRoles,
  awardsAndHonors,
  certifications,
  certificationMoreLink,
  publications,
  testimonials,
} from "@/data/content";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <header className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-neon"
          >
            Insight
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            Behind the <span className={styles.accent}>Code</span>
          </motion.h2>
        </header>

        <div className="bento-grid">
          {/* 1. Main Bio Card (Span 2x2) */}
          <motion.div 
            className={`${styles.bioCard} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <User size={20} color="var(--color-neon-blue)" />
              <span className={styles.cardTitle}>Identity</span>
            </div>
            <div className={styles.bioContent}>
              {personalInfo.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className={styles.personalDetails}>
              <div className={styles.detail}>
                <MapPin size={16} />
                <span>{personalInfo.details.find(d => d.label === 'City')?.value}</span>
              </div>
              <div className={styles.detail}>
                <div className={styles.pulse} />
                <span>{personalInfo.details.find(d => d.label === 'Freelance')?.value} for hire</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Skills Detailed Grid (Span 2) */}
          <motion.div 
            className={`${styles.skillsDetailed} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Modern Stack</span>
            </div>
            <div className={styles.skillTags}>
              {skillGroups.flatMap(g => g.skills).slice(0, 10).map(s => (
                <span key={s.label} className={styles.skillTag}>
                  {s.label}
                  <span className={styles.skillDot} style={{ opacity: s.value / 100 }} />
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3. Awards Card (Span 2) */}
          <motion.div 
            className={`${styles.awardsCard} bento-card`} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <Award size={20} color="var(--color-neon-lime)" />
              <span className={styles.cardTitle}>Impact & Awards</span>
            </div>
            <ul className={styles.certList}>
              {awardsAndHonors.map((award, i) => (
                <li key={i}>
                  <span className={styles.certTitle}>{award.title}</span>
                  <span className={styles.certIssuer}>{award.organization} • {award.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Timeline / Journey (Span 2x2) */}
          <motion.div 
            className={`${styles.journeyCard} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <Briefcase size={20} color="var(--color-neon-blue)" />
              <span className={styles.cardTitle}>The Journey</span>
            </div>
            <div className={styles.timeline}>
              {[...workExperience, ...education].map((item: any, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelinePoint} />
                  <div className={styles.timelineContent}>
                     <span className={styles.timelineDate}>{item.period}</span>
                    <h4 className={styles.timelineRole}>{item.role || item.institution}</h4>
                    <p className={styles.timelineOrg}>{item.company || item.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Certifications Card (Span 2) */}
          <motion.div 
            className={`${styles.certCard} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className={styles.cardHeader}>
              <Award size={20} color="var(--color-neon-lime)" />
              <span className={styles.cardTitle}>Certifications</span>
            </div>
            <ul className={styles.certList}>
              {certifications.map((c, i) => (
                <li key={i}>
                  <span className={styles.certTitle}>{c.title}</span>
                  <span className={styles.certIssuer}>{c.issuer} • {c.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 6. Leadership Card (Span 2) */}
          <motion.div 
            className={`${styles.leadershipCard} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <User size={20} color="var(--color-neon-blue)" />
              <span className={styles.cardTitle}>Leadership</span>
            </div>
            <div className={styles.leadershipList}>
              {leadershipRoles.map((role, i) => (
                <div key={i} className={styles.roleItem}>
                  <p className={role.title}>{role.title}</p>
                  <span>{role.organization}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 7. Publication Card (Span 2) */}
          <motion.div 
            className={`${styles.pubCard} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <FileText size={20} color="var(--color-neon-purple)" />
              <span className={styles.cardTitle}>Publication</span>
            </div>
            <a href={publications[0].link} target="_blank" className={styles.pubLink}>
              <h4>{publications[0].title}</h4>
              <span className={styles.publisher}>{publications[0].publisher}</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* 8. Quick Stats / Info Tiles (Span 1) */}
          <motion.div 
            className="bento-card" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <BrainCircuit size={20} color="var(--color-neon-purple)" />
              <span className={styles.cardTitle}>Expertise</span>
            </div>
            <div className={styles.skillsValue}>
              <span className={styles.bigNumber}>{skillGroups[0].skills.length + skillGroups[1].skills.length}</span>
              <span className={styles.subLabel}>Core Skills</span>
            </div>
          </motion.div>

          {/* 9. Action Card (Span 1) */}
          <motion.div 
            className={`${styles.actionCard} bento-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <a href={personalInfo.cvUrl} target="_blank" className={styles.fullLink}>
              <FileText size={32} />
              <span>Full Résumé</span>
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Testimonials Reveal */}
        <div className={styles.testimonials}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.subHeading}
          >
            Voices
          </motion.h3>
          <div className={styles.testimonialScroll}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <Quote size={24} color="var(--color-neon-blue)" className={styles.quoteIcon} />
                <p>{t.quote}</p>
                <div className={styles.author}>
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className={styles.avatar} />
                  <div>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.authorRole}>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
