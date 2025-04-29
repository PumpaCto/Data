"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>About MiraVerse Token</title>
        <meta name="description" content="Learn more about the team and vision behind MiraVerse Token: Crypto, Anime, AI, and Web3 revolution combined." />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MiraVerse Token is born from a dream: a place where anime passion, crypto innovation, and AI technology collide to create the future of digital entertainment.
          Founded by the creative minds behind RedStar Animation, MiraVerse unites decades of storytelling, animation excellence, and crypto market experience.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          In Q3 2025, we will release an AI-integrated crypto trading game with anime effects. In early 2026, our first full anime series will debut on major streaming platforms. 
          And this is just the beginning. MiraVerse Token is your ticket to a universe of unlimited possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-md text-gray-500 dark:text-gray-400">
            Join us. Create history. Shape the MiraVerse.
          </p>
        </motion.div>
      </main>
    </>
  );
}
