"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  { name: 'Week 1', users: 10000 },
  { name: 'Week 2', users: 50000 },
  { name: 'Week 3', users: 150000 },
  { name: 'Week 4', users: 300000 },
];

export default function TractionChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Projected Trajectory</h2>
           <p style={{ color: '#888', marginBottom: '4rem' }}>Target: 300k Monthly Active Users (50 trades/min)</p>
        </motion.div>

        <motion.div 
           style={{ height: '400px', width: '100%', background: 'var(--card-bg)', borderRadius: '20px', padding: '2rem', border: '1px solid var(--card-border)' }}
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip 
                     contentStyle={{ background: '#111', border: '1px solid #333', borderRadius: '8px' }}
                     itemStyle={{ color: 'var(--neon-green)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="var(--neon-green)" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: 'var(--neon-green)' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
