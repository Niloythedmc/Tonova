"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import styles from "./whitepaper.module.css";
import Image from "next/image";

export default function Whitepaper() {
  return (
    <main>
      <Background />
      <Navbar />
      
      <article className={styles.page}>
        <header className={styles.header}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,215,0,0.1)', border: '1px solid gold', borderRadius: '50px', color: 'gold', marginBottom: '2rem', fontWeight: 'bold' }}>
             STATUS: PRE-LAUNCH / FUNDING
          </div>
          <h1 className={styles.h1}>Tonova Masterplan</h1>
          <p>The Definitive Multi-Featured Trading Ecosystem on TON.</p>
        </header>

        <section className={styles.section}>
          <div className={styles.imgContainer}>
             <Image src="/assets/mobile_app.png" alt="Tonova App Concept" width={1200} height={800} className={styles.img} />
          </div>
          <h2 className={styles.h2}>1. Executive Summary</h2>
          <p className={styles.p}>
            Tonova is positioned to become the definitive decentralized finance (DeFi) and trading hub integrated directly into Telegram via the TON blockchain.
            Capitalizing on Telegrams 900M+ user base, we offer a frictionless "super-app" experience.
          </p>
          <p className={styles.p}>
             <strong>Immediate Goal:</strong> Capture <strong>300,000 MAU</strong> in the first month by leveraging high-velocity Binary Options trading and viral gamification.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>2. The Products</h2>
          <div className={styles.imgContainer}>
             <Image src="/assets/ecosystem.png" alt="Tonova Ecosystem" width={1200} height={675} className={styles.img} />
          </div>
          
          <h3 className={styles.h3}>Phase 1: Binary Options (The Hook)</h3>
          <p className={styles.p}>
            A high-frequency trading interface where users predict asset prices (UP/DOWN). 
            Powered by an advanced OTC algorithm ensuring fair markets and a <strong>3% platform margin</strong>.
          </p>

          <h3 className={styles.h3}>Phase 2 & 3: The Ecosystem</h3>
          <p className={styles.p}>
            <strong>Creator Studio:</strong> 1-Click Launchpad for Jettons (Meme coins) and NFT Collections.<br/>
            <strong>DEX & Marketplace:</strong> A dedicated venue for trading the assets created within our ecosystem.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>3. Financial Projections (Month 1)</h2>
          <div className={styles.imgContainer}>
             <Image src="/assets/growth_chart.png" alt="Growth Trajectory" width={1200} height={675} className={styles.img} />
          </div>
          <p className={styles.p}>
             Based on our "Blitzscaling" marketing strategy involving top TON influencers and Telegram native ads:
          </p>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Monthly Active Users</strong></td>
                <td className={styles.highlight}>300,000</td>
                <td>Driven by viral tournaments.</td>
              </tr>
              <tr>
                <td><strong>Daily Trades</strong></td>
                <td>72,000</td>
                <td>Target: 50 trades/minute avg.</td>
              </tr>
              <tr>
                <td><strong>Avg Trade Size</strong></td>
                <td>1 TON</td>
                <td>Entry level (~$2.00).</td>
              </tr>
              <tr>
                <td><strong>Daily Volume</strong></td>
                <td className={styles.highlight}>72,000 TON</td>
                <td>~$144,000 USD Volume.</td>
              </tr>
              <tr>
                <td><strong>Daily Revenue (3%)</strong></td>
                <td className={styles.highlight} style={{ color: 'gold' }}>2,160 TON</td>
                <td>~$4,320 USD / Day.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>4. Tokenomics & Fund Allocation</h2>
          <p className={styles.p}>Initial Funding Goal: <strong>$50,000</strong> (Seed)</p>
          
          <div className={styles.imgContainer}>
             <Image src="/assets/tokenomics_3d.png" alt="Tokenomics Model" width={1200} height={800} className={styles.img} />
          </div>

          <p className={styles.p}><strong>Monthly Net Profit Distribution:</strong></p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
             <li style={{ padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                <span>💰 <strong>Investors</strong></span>
                <span style={{ color: 'gold' }}>30%</span>
             </li>
             <li style={{ padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                <span>🛠️ <strong>Dev & Marketing</strong></span>
                <span style={{ color: 'var(--telegram-blue)' }}>30%</span>
             </li>
             <li style={{ padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                <span>🤝 <strong>Partners</strong></span>
                <span style={{ color: 'var(--neon-purple)' }}>25%</span>
             </li>
             <li style={{ padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                <span>⚙️ <strong>Ops & Server</strong></span>
                <span style={{ color: '#888' }}>15%</span>
             </li>
          </ul>
        </section>

      </article>

      <Footer />
    </main>
  );
}
