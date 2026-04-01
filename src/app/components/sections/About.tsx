"use client";
// ============================================================
// About.tsx — Bio, Skills, Timeline, Leadership, Certs, Testimonials
// ============================================================
// Full about section rendering all personal data from content.ts.
// Skill bars animate on mount using IntersectionObserver.
// ============================================================

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

// ─── SKILL BAR ─────────────────────────────────────────────
// Animates the bar fill width on scroll into view
function SkillBar({ label, value }: { label: string; value: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.skillItem} ref={ref}>
      <div className={styles.skillItemHeader}>
        <span className={styles.skillLabel}>{label}</span>
        <span className={styles.skillValue}>{value}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: animated ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// ─── COMPONENT ─────────────────────────────────────────────
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="section-inner">

        {/* ── Section Header ── */}
        <p className="section-title">Who I Am</p>
        <h2 className="section-heading">About Me</h2>

        {/* ── Bio & Skills Row ── */}
        <div className={styles.grid}>

          {/* Bio */}
          <div className={styles.bioCard}>
            {personalInfo.bio.map((para, i) => (
              <p key={i} className={styles.bioText}>{para}</p>
            ))}

            {/* Personal Details */}
            <ul className={styles.detailsList}>
              {personalInfo.details.map((d) => (
                <li key={d.label} className={styles.detailItem}>
                  <span className={styles.detailLabel}>{d.label}</span>
                  <span className={styles.detailValue}>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer">{d.value}</a>
                    ) : d.value}
                  </span>
                </li>
              ))}
            </ul>

            <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download CV
            </a>
          </div>

          {/* Skills */}
          <div className={styles.skillsCard}>
            {skillGroups.map((group) => (
              <div key={group.title} className={styles.skillGroup}>
                <p className={styles.skillGroupTitle}>{group.title}</p>
                {group.skills.map((skill) => (
                  <SkillBar key={skill.label} label={skill.label} value={skill.value} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline: Work & Education ── */}
        <div className={styles.timelineSection}>
          <p className="section-title">My Journey</p>
          <h2 className="section-heading">Timeline</h2>
          <div className={styles.timelineGrid}>

            {/* Work Experience */}
            <div className={styles.timelineCard}>
              <p className={styles.timelineCardTitle}>Working Experience</p>
              <ul>
                {workExperience.map((w) => (
                  <li key={w.company} className="timeline-item">
                    <h3 className={styles.timelineItemRole}>{w.role}</h3>
                    <p className={styles.timelineItemOrg}>{w.company}</p>
                    <span className={styles.timelineItemPeriod}>{w.period}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className={styles.timelineCard}>
              <p className={styles.timelineCardTitle}>Educational Experience</p>
              <ul>
                {education.map((e) => (
                  <li key={e.institution} className="timeline-item">
                    <h3 className={styles.timelineItemRole}>{e.institution}</h3>
                    <p className={styles.timelineItemOrg}>{e.degree}</p>
                    <span className={styles.timelineItemPeriod}>{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Leadership & Awards ── */}
        <div className={styles.timelineSection}>
          <p className="section-title">Impact</p>
          <h2 className="section-heading">Leadership & Recognition</h2>
          <div className={styles.accoladeGrid}>

            {/* Leadership */}
            <div className={styles.accoladCard}>
              <p className={styles.accoladeCardTitle}>Leadership & Organizational Roles</p>
              <ul>
                {leadershipRoles.map((r) => (
                  <li key={r.title + r.period} className={styles.accoladeItem}>
                    <p className={styles.accoladeTitle}>{r.title}</p>
                    <p className={styles.accoladeOrg}>{r.organization}</p>
                    <p className={styles.accoladePeriod}>{r.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div className={styles.accoladCard}>
              <p className={styles.accoladeCardTitle}>Honors & Awards</p>
              <ul>
                {awardsAndHonors.map((a, i) => (
                  <li key={i} className={styles.accoladeItem}>
                    <p className={styles.accoladeTitle}>{a.title}</p>
                    <p className={styles.accoladeOrg}>{a.organization}</p>
                    <p className={styles.accoladePeriod}>{a.year}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Certifications & Publications ── */}
        <div className={styles.timelineSection}>
          <p className="section-title">Expertise</p>
          <h2 className="section-heading">Expertise & Contributions</h2>
          <div className={styles.accoladeGrid}>

            {/* Certifications */}
            <div className={styles.accoladCard}>
              <p className={styles.accoladeCardTitle}>Certifications</p>
              <ul>
                {certifications.map((c) => (
                  <li key={c.title} className={styles.accoladeItem}>
                    <p className={styles.accoladeTitle}>{c.title}</p>
                    <p className={styles.accoladeOrg}>{c.issuer}</p>
                    <p className={styles.accoladePeriod}>{c.year}</p>
                  </li>
                ))}
                <li className={styles.accoladeItem}>
                  <a
                    href={certificationMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ marginTop: "0.5rem" }}
                  >
                    See More on LinkedIn →
                  </a>
                </li>
              </ul>
            </div>

            {/* Publications */}
            <div className={styles.accoladCard}>
              <p className={styles.accoladeCardTitle}>Publications</p>
              <ul>
                {publications.map((pub) => (
                  <li key={pub.title} className={styles.accoladeItem}>
                    <div className={styles.pubCard}>
                      <h3 className={styles.pubTitle}>{pub.title}</h3>
                      <div className={styles.pubPublisher}>
                        <span className="tag">{pub.publisher}</span>
                      </div>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        View Paper
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className={styles.testimonialsSection}>
          <p className="section-title">What Others Say</p>
          <h2 className="section-heading">Testimonial</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <span className={styles.quoteIcon}>&ldquo;</span>
                <p className={styles.testimonialText}>{t.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className={styles.authorAvatar}
                  />
                  <div>
                    <p className={styles.authorName}>{t.name}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
