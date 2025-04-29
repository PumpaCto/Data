// src/components/Loader.jsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingTexts = [
  "Loading MiraVerse Universe...",
  "Initializing Crypto Anime Engine...",
  "Booting AI Blockchain Core...",
  "Synchronizing with Pump.fun Network...",
  "Preparing NFT Reality..."
];

export default function Loader() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Arka planda hareketli yıldızlar */}
      <StarsBackground />

      <motion.div
        className="z-10 text-2xl md:text-4xl font-bold text-gold glow-soft text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        {loadingTexts[currentText]}
      </motion.div>
    </div>
  );
}

function StarsBackground() {
  const stars = new Array(70).fill(0);

  return (
    <div className="absolute inset-0 z-0">
      {stars.map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
