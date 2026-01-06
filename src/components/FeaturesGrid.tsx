"use client";

import { motion } from "framer-motion";
import { Zap, Trophy, Palette, BarChart2 } from "lucide-react";
import Image from "next/image";
import styles from "./FeaturesGrid.module.css";

const features = [
  {
    title: "Binary Options",
    desc: "Experience high-frequency trading with zero latency. Predict TON/USDT movements with our advanced OTC engine. 90% payouts in 30 seconds.",
    icon: <Zap size={24} />,
    image: "/assets/mobile_binary.png",
    className: styles.large
  },
  {
    title: "Tournaments",
    desc: "Compete daily for Telegram Gifts and Cash Prizes. Climb the leaderboard by earning points for every winning trade.",
    icon: <Trophy size={24} />,
    image: "/assets/mobile_tournaments.png",
    className: ""
  },
  {
    title: "Creator Studio",
    desc: "Launch your own Jetton or NFT collection in seconds. No coding required. Instant liquidity and community tools.",
    icon: <Palette size={24} />,
    image: "/assets/mobile_creator.png",
    className: styles.tall
  },
  {
    title: "Supercharts",
    desc: "Professional-grade technical analysis on mobile. Indicators, drawing tools, and multiple chart types (Heikin Ashi, Area).",
    icon: <BarChart2 size={24} />,
    image: "/assets/mobile_supercharts.png",
    className: styles.large
  }
];

export default function FeaturesGrid() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>All-In-One Ecosystem</h2>
          <p className={styles.subtitle}>Everything you need to trade, create, and win on TON.</p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} ${f.className}`}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>{f.icon}</div>
                <h3 className={styles.h3}>{f.title}</h3>
                <p className={styles.p}>{f.desc}</p>
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  width={400} 
                  height={800} 
                  className={styles.featureImage}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
