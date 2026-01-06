"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={onClose}><X /></button>
            
            <h2 className={styles.title}>Join the Waitlist</h2>
            <p className={styles.desc}>Get early access and a 10 TON sign-up bonus when we launch.</p>
            
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining!"); onClose(); }}>
              <input type="email" placeholder="Enter your email" className={styles.input} required />
              <button type="submit" className={styles.submit}>Join Now</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
