"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import FeaturesGrid from "@/components/FeaturesGrid";
import RevenueWheel from "@/components/RevenueWheel";
import TractionChart from "@/components/TractionChart";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Modal from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      <Background />
      <Navbar />
      
      <Hero onOpenModal={() => setModalOpen(true)} />
      
      <InteractiveDemo />
      <FeaturesGrid />
      <RevenueWheel />
      <TractionChart />
      <Roadmap />
      <Footer />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
