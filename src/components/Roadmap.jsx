"use client";

import { motion } from "framer-motion";
import { roadmapData } from "@/data/roadmapData";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Roadmap
          </motion.h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            MiraVerse Token's ambitious journey to revolutionize anime, gaming, and crypto.
          </p>
        </div>

        <div className="relative border-l-2 border-gold ml-4">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-gold rounded-full left-[-10px] top-2"></div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
