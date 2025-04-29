"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const phrases = [
  "A New Era of Crypto.",
  "Anime meets Blockchain.",
  "Welcome to MiraVerse.",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === phrases[index].length) {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setSubIndex(0);
      }, 2000);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-stars-pattern bg-cover bg-fixed bg-center overflow-hidden p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-white dark:text-white text-4xl sm:text-6xl font-extrabold tracking-wider clamp-title">
          {phrases[index].substring(0, subIndex)}
          <span className={`${blink ? "opacity-100" : "opacity-0"} ml-1`}>|</span>
        </h1>

        <p className="mt-6 text-muted dark:text-muted max-w-xl mx-auto text-lg clamp-subtitle">
          Dive into the future where anime, crypto, and gaming unite.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link href="/community">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full bg-gold text-black font-bold shadow-md hover:shadow-xl hover:bg-gold hover:text-black transition-default"
            >
              Join Community
            </motion.button>
          </Link>

          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full bg-black text-gold border-2 border-gold font-bold hover:bg-gold hover:text-black shadow-md hover:shadow-xl transition-default"
            >
              Buy Token
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Blur layer */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroSection;
