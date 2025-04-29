"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import PartnerSection from "@/components/PartnerSection";

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Partners - MiraVerse Token</title>
        <meta name="description" content="Meet the strategic partners empowering MiraVerse Token's future in anime, gaming, and crypto." />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Partners
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          MiraVerse Token is proud to collaborate with top-tier organizations in the fields of animation, blockchain, and Web3 innovation. Together, we redefine the future.
        </motion.p>

        <PartnerSection />
      </main>
    </>
  );
}
