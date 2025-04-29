"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | MiraVerse Token</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to MiraVerse Token home." />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen px-6 text-center bg-white dark:bg-secondary">
        <motion.h1
          className="text-7xl font-extrabold text-gold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Oops! This page does not exist.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/" className="inline-block bg-gold text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all">
            Go Home
          </Link>
        </motion.div>
      </main>
    </>
  );
}
