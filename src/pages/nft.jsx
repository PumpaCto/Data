"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import NFTGallery from "@/components/NFTGallery";

export default function NFTPage() {
  return (
    <>
      <Head>
        <title>NFT Collection - MiraVerse Token</title>
        <meta name="description" content="Explore MiraVerse's exclusive NFT collection, blending anime art with blockchain technology." />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MiraVerse NFT Gallery
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover our limited-edition NFT characters—designed with passion, powered by utility. Each NFT unlocks in-game features, voting rights, and special privileges in the MiraVerse ecosystem.
        </motion.p>

        <NFTGallery />
      </main>
    </>
  );
}
