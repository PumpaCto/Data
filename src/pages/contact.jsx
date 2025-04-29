"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - MiraVerse Token</title>
        <meta name="description" content="Reach out to the MiraVerse Token team. We are here for collaborations, questions, and partnerships." />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Got questions, suggestions, or opportunities? Connect directly with the MiraVerse Token team!
        </motion.p>

        <ContactForm />
      </main>
    </>
  );
}
