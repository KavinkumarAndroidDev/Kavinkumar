import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '@/data/content';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Articles', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Find LinkedIn URL from personalInfo.details
  const linkedinUrl = personalInfo.details.find(d => d.label === 'LinkedIn')?.href || '#';

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <motion.a 
          href="#home" 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          KAVIN<span className={styles.dot}>.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons / CTA */}
        <div className={styles.actions}>
          <a href="https://github.com/KavinkumarAndroidDev" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
