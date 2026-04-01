// ============================================================
// Blog.tsx — Recent blog posts section
// ============================================================
// Renders blog cards from content.ts. All blog links are external
// (LinkedIn) but the component is ready to accept internal blog pages.
// ============================================================

import React from "react";
import Image from "next/image";
import { blogs } from "@/data/content";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className="section-inner">
        <p className="section-title">Thoughts & Insights</p>
        <h2 className="section-heading">Recent Blogs</h2>

        <div className={styles.grid}>
          {blogs.map((post) => (
            <article key={post.title} className={styles.card}>

              {/* ── Thumbnail ── */}
              <div className={styles.imageWrapper}>
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                />
                <span className={styles.dateChip}>{post.date}</span>
              </div>

              {/* ── Content ── */}
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className="tag">{post.category}</span>
                  <span className={styles.author}>
                    By <strong>Kavinkumar</strong>
                  </span>
                </div>

                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.title}
                >
                  {post.title}
                </a>

                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-ghost ${styles.readMore}`}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
