"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { statsData } from "@/data/statsData";

const Counter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = 20;
    const totalIncrements = duration * 1000 / incrementTime;
    const increment = end / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const AnimatedStats = () => {
  return (
    <section className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MiraVerse in Numbers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gold shadow-md dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <p className="text-3xl font-bold text-gold mb-1">
                <Counter value={stat.value} duration={2} />
                {stat.suffix}
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
