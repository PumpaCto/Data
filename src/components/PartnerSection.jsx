"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partnersData } from "@/data/partnersData";

const PartnerSection = () => {
  return (
    <section id="partners" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Strategic Partners
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center bg-white dark:bg-gray-800 border border-gold rounded-lg p-4 shadow-md hover:shadow-lg transition-default"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="object-contain max-h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
