"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import styles from "./InteractiveDemo.module.css";
import { User } from "lucide-react";

const DATA = [
  { v: 100 }, { v: 120 }, { v: 110 }, { v: 140 }, { v: 130 }, { v: 160 }, { v: 180 }, { v: 170 }, { v: 190 }, { v: 210 }
];

export default function InteractiveDemo() {
  const [data, setData] = useState(DATA);
  const [toast, setToast] = useState<{msg: string, type: 'success' | 'info'} | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
     setMounted(true);
  }, []);

  const handleTrade = (type: 'UP' | 'DOWN') => {
    // Show toast
    setToast({ msg: `Trade Placed: ${type}`, type: 'success' });
    setTimeout(() => setToast(null), 3000);

    // Simulate chart movement
    const newData = [...data.slice(1), { v: data[data.length-1].v + (Math.random() * 40 - 20) }];
    setData(newData);
  };

  return (
    <section className={styles.section} id="demo">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Try the Live Demo</h2>
          <p style={{color: '#888'}}>Lightning fast execution on TON.</p>
        </div>

        <div className={styles.appShell}>
          <div className={styles.appHeader}>
            <div style={{fontWeight: 700}}>TON/USDT</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
               <div style={{background: '#333', padding: '4px 8px', borderRadius: 4, display: 'flex', gap: 4, alignItems: 'center', fontSize: '0.8rem'}}>
                 <User size={12} /> 12,402 Online
               </div>
            </div>
          </div>

          <div className={styles.appContent}>
            <div className={styles.chartContainer}>
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#229ED9" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#229ED9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="#229ED9" strokeWidth={3} fillOpacity={1} fill="url(#colorV)" isAnimationActive={true} />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              
              {/* Toast for trade feedback */}
              <AnimatePresence>
                {toast && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      background: 'white',
                      color: 'black',
                      padding: '10px 20px',
                      borderRadius: '30px',
                      fontWeight: 600,
                      boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    🚀 {toast.msg}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.btn} ${styles.btnUp}`} onClick={() => handleTrade('UP')}>
                <span>UP</span>
                <span className={styles.payout}>185% Payout</span>
              </button>
              <button className={`${styles.btn} ${styles.btnDown}`} onClick={() => handleTrade('DOWN')}>
                <span>DOWN</span>
                <span className={styles.payout}>185% Payout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
