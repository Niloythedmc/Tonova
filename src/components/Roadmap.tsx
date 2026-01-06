"use client";

import { motion } from "framer-motion";
import styles from "./Roadmap.module.css";

const phases = [
  {
    phase: "Phase 1 - Launch (Q1 2026)",
    title: "Launch & Stability",
    items: ["Binary Options Launch (TON/USDT)", "Leaderboard Logic", "Referral System V1"],
    status: "active"
  },
  {
    phase: "Phase 2 - Q2 2026",
    title: "Ecosystem Expansion",
    items: ["Jetton Creator Studio", "NFT Minting Tools", "Partnership API"],
    status: "upcoming"
  },
  {
    phase: "Phase 3 - Q3 2026",
    title: "Marketplace & DAO",
    items: ["On-chain Order book DEX", "Governance Token TGE", "Mobile App Beta"],
    status: "upcoming"
  }
];

export default function Roadmap() {
  return (
    <section className={styles.section} id="roadmap">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Roadmap
      </motion.h2>

      <div className={styles.timeline}>
        {/* Continuous Line */}
        <div className={styles.line} />

        {phases.map((p, i) => (
          <motion.div 
            key={i} 
            className={`${styles.item} ${p.status === 'active' ? styles.completed : ''}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={styles.dot} />
            <div className={styles.content}>
              <span className={styles.phase}>{p.phase}</span>
              <h3 className={styles.h3}>{p.title}</h3>
              <ul>
                {p.items.map((item, idx) => (
                  <li key={idx} className={styles.li}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
