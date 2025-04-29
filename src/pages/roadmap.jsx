"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import roadmapData from "@/data/roadmapData";

export default function RoadmapPage() {
  return (
    <>
      <Head>
        <title>Roadmap - MiraVerse Token</title>
        <meta name="description" content="Explore the full roadmap of MiraVerse Token: From anime series to crypto gaming revolution." />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Roadmap
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-secondary border border-gold p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
