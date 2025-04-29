// src/components/HeroSection.jsx

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Yıldız arkaplanı için fake yıldız datası
const stars = new Array(50).fill(0);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        {stars.map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8"
        >
          <Image src="/images/logo.png" alt="MiraVerse Logo" width={160} height={160} className="drop-shadow-lg" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-heading text-primary mb-4 glow leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Welcome to MiraVerse
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Anime, Blockchain, AI and Endless Adventures Await You.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Buy Now Button */}
          <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
            <button className="relative overflow-hidden btn-primary px-8 py-3 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
              <span className="relative z-10">Buy Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-20 blur-lg"></span>
            </button>
          </Link>

          {/* Join Community Button */}
          <Link href="https://t.me/MiraVerseToken" target="_blank" rel="noopener noreferrer">
            <button className="relative overflow-hidden btn-primary px-8 py-3 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
              <span className="relative z-10">Join Community</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-20 blur-lg"></span>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Animation */}
      {mounted && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary animate-bounce z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          ↓ Scroll Down
        </motion.div>
      )}
    </section>
  );
}
