import styles from "./RevenueWheel.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  { name: 'Investors', value: 30, color: '#FFD700' }, // Gold
  { name: 'Dev & Marketing', value: 30, color: '#229ED9' }, // Blue
  { name: 'Partners', value: 25, color: '#9D00FF' }, // Purple
  { name: 'Ops/Server', value: 15, color: '#808080' }, // Gray
];

export default function RevenueWheel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className={styles.section} id="tokenomics">
      <div className={styles.container}>
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Revenue Split</h2>
          <p style={{ color: '#888', marginBottom: '2rem', lineHeight: 1.6 }}>
            Our sustainable business model ensures long-term growth and rewards for all stakeholders.
          </p>
          
          <div className={styles.legend}>
            {data.map((item, index) => (
              <div key={index} className={styles.legendItem}>
                <div className={styles.colorBox} style={{ background: item.color }} />
                <span className={styles.itemLabel}>{item.name}</span>
                <span className={styles.itemValue}>{item.value}%</span>
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
             <h4 className={styles.h4}>Initial Fund Strategy</h4>
             <p className={styles.desc}>
               Starting with <strong>$50,000</strong> for development, marketing, partnership, and early bird rewards.
             </p>
             <h4 className={styles.h4}>Projected Revenue</h4>
             <p className={styles.desc}>
               Targeting <strong>3%</strong> of total daily volume in average profit.
             </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.chartContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ background: '#111', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
