"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Background() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(34, 158, 217, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(157, 0, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      {/* Grid Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }} />
      
      {/* Moving Particles (Simplified for performance) */}
      {[...Array(5)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}

function Particle({ index }: { index: number }) {
    const [style, setStyle] = useState<React.CSSProperties | null>(null);

    useEffect(() => {
        setStyle({
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        });
    }, []);

    if (!style) return null;

    return (
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={style}
        />
    );
}
