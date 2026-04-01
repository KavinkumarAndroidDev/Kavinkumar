"use client";
// ============================================================
// Contact.tsx — Contact form section
// ============================================================
// Simple client-side validated contact form.
// NOTE FOR FUTURE DEVELOPER:
//   The form currently has client-side validation only.
//   To wire up email sending, connect the handleSubmit function
//   to a backend endpoint (e.g., Next.js API route or Resend/Formspree).
// ============================================================

import React, { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "", email: "", phone: "", subject: "Choose Services", message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  // ─── Basic validation ─────────────────────────────────────
  const validate = (): string => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in all required fields.";
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) return "Please enter a valid email address.";
    if (form.subject === "Choose Services") return "Please select a subject.";
    return "";
  };

  // ─── Submit handler ───────────────────────────────────────
  // TODO (future developer): replace this with a real API call e.g.:
  //   const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setLoading(true);
    try {
      // Simulated delay — replace with real API call
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
      setForm(INITIAL_STATE);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-inner">
        <p className="section-title">Let&apos;s Connect</p>
        <h2 className="section-heading">Get in Touch</h2>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* ── Error / Success Messages ── */}
            {error && <p className={`${styles.errorMsg} ${styles.visible}`}>{error}</p>}
            {success && (
              <p className={`${styles.successMsg} ${styles.visible}`}>
                ✓ Your message has been sent! I&apos;ll get back to you soon.
              </p>
            )}

            {/* ── Name & Email ── */}
            <div className={styles.row}>
              <div className={styles.fieldWrapper}>
                <label className={styles.label} htmlFor="contact-name">Name *</label>
                <input
                  id="contact-name"
                  className={styles.input}
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldWrapper}>
                <label className={styles.label} htmlFor="contact-email">Email *</label>
                <input
                  id="contact-email"
                  className={styles.input}
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ── Phone & Subject ── */}
            <div className={styles.row}>
              <div className={styles.fieldWrapper}>
                <label className={styles.label} htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  className={styles.input}
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>
              <div className={styles.fieldWrapper}>
                <label className={styles.label} htmlFor="contact-subject">Subject *</label>
                <select
                  id="contact-subject"
                  className={styles.select}
                  value={form.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                >
                  <option value="Choose Services">Choose Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* ── Message ── */}
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                className={styles.textarea}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                required
              />
            </div>

            {/* ── Submit ── */}
            <div className={styles.submitRow}>
              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
