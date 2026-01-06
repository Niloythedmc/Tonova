"use client";

import { Twitter, Send, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #222', padding: '4rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        
        <div>
          <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>TONOVA.</h4>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>© 2026 Tonova Protocol. All rights reserved.</p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} aria-label="Telegram">
            <Send size={20} />
          </a>
          <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} aria-label="Github">
            <Github size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
