"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import CommunitySection from "@/components/CommunitySection";

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Community - MiraVerse Token</title>
        <meta name="description" content="Join the MiraVerse Token community across Telegram, Twitter, and more. Be part of the revolution." />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Community
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Connect with thousands of anime fans, crypto enthusiasts, and Web3 pioneers. The MiraVerse journey is better together!
        </motion.p>

        <CommunitySection />
      </main>
    </>
  );
}
