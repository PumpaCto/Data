"use client";

import { motion } from "framer-motion";

const BuyNowButton = () => {
  return (
    <a
      href="https://pump.fun/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="px-8 py-4 bg-gold text-black font-extrabold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-gold hover:text-black transition-default border-2 border-black dark:border-gold dark:bg-black dark:text-gold"
      >
        Buy $MIRAVERSE
      </motion.button>
    </a>
  );
};

export default BuyNowButton;
