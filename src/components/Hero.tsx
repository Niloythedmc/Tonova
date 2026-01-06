"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import styles from "./Hero.module.css";
// import { AreaChart, Area, ResponsiveContainer } from "recharts"; // Could put chart in card

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [volume, setVolume] = useState(1245900);
  const [bars, setBars] = useState<{height: number, color: string}[]>([]);

  useEffect(() => {
    // Generate bars on client only to avoid hydration mismatch
    setBars(Array.from({ length: 15 }).map(() => ({
        height: 30 + Math.random() * 60,
        color: Math.random() > 0.5 ? 'var(--neon-green)' : 'var(--neon-pink)'
    })));

    const interval = setInterval(() => {
      setVolume(prev => prev + Math.floor(Math.random() * 500));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.version}>v0.9.0 (Alpha)</span>
          
          <h1 className={styles.h1}>
            The Future of <span className="gradient-text">Trading</span><br />
            on TON is Coming.
          </h1>
          
          <p className={styles.sub}>
            The Ultimate Ecosystem: Binary Options, Jetton Launchpad, NFT Marketplace & DEX. 
            Securing Initial Funding. 300K+ Users Projected.
          </p>
          
          <div className={styles.buttonGroup}>
            <motion.button 
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--neon-green)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Trading
            </motion.button>
            
            <motion.button 
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#waitlist'}
            >
              Join Waitlist
            </motion.button>

            <a href="/whitepaper" style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', textDecoration: 'underline' }}>Read Whitepaper</a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.card}>
            {/* Visual Mockup Content */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
              <div style={{ fontWeight: 600 }}>TON/USDT</div>
              <div style={{ color: 'var(--neon-green)' }}>+4.2%</div>
            </div>
            
            <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
               {/* Simple candlestick simulation */}
               {bars.map((bar, i) => (
                 <div key={i} style={{
                   width: '100%',
                   height: `${bar.height}%`,
                   background: bar.color,
                   opacity: 0.7,
                   borderRadius: 2
                 }} />
               ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <button style={{ background: 'var(--neon-green)', border: 'none', padding: '1rem', borderRadius: 8, fontWeight: 700, color: 'black' }}>CALL</button>
              <button style={{ background: 'var(--neon-pink)', border: 'none', padding: '1rem', borderRadius: 8, fontWeight: 700, color: 'white' }}>PUT</button>
            </div>
          </div>

          <motion.div className={styles.volume} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <div className={styles.volumeLabel}>24h Volume</div>
            <div className={styles.volumeValue}>${volume.toLocaleString()}</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center', fontSize: '0.8rem', color: 'var(--neon-green)', marginTop: '4px' }}>
              <TrendingUp size={14} /> +12%
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
