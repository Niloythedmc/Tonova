"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react"; // Just a placeholder icon or similar
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          TONOVA<span>.</span>
        </div>
        
        <div className={styles.navLinks}>
          <a href="/whitepaper" className={styles.link} style={{ color: 'var(--neon-green)' }}>Whitepaper</a>
          <a href="#features" className={styles.link}>Features</a>
          <a href="#roadmap" className={styles.link}>Roadmap</a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
            onClick={() => window.location.href = '#waitlist'}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
