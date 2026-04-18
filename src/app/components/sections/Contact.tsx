"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../SocialIcons";
import styles from "./Contact.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "", email: "", message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setSuccess(true);
    setForm(INITIAL_STATE);
    setLoading(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.layout}>
          {/* Info Side */}
          <div className={styles.info}>
            <motion.header 
              className={styles.header}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="tag-neon">Available</span>
              <h2 className={styles.title}>Let&apos;s build something <span className={styles.accent}>legendary</span>.</h2>
            </motion.header>

            <motion.div 
              className={styles.contacts}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:codebykavin@gmail.com" className={styles.contactValue}>codebykavin@gmail.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Salem, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.socials}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="https://www.linkedin.com/in/kavinkumar442005/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://github.com/KavinkumarAndroidDev" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub"><GithubIcon /></a>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name-hero">Tell me your name</label>
                <input 
                  id="name-hero"
                  type="text" 
                  placeholder="Kavin Kumar" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email-hero">Email address</label>
                <input 
                  id="email-hero"
                  type="email" 
                  placeholder="hello@world.com" 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message-hero">How can I help?</label>
                <textarea 
                  id="message-hero"
                  placeholder="Tell me about your vision..." 
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  required 
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={styles.success}
                    >
                      <CheckCircle size={20} />
                      <span>Transmitted!</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={styles.idle}
                    >
                      <span>{loading ? "Transmitting..." : "Send Signal"}</span>
                      <Send size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
