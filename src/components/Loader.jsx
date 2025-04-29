"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-secondary text-white">
      {/* Glow spinning ring */}
      <motion.div
        className="relative w-32 h-32 rounded-full border-4 border-gold border-t-transparent animate-spin glow-gold"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.4,
        }}
      />

      {/* Static Logo or Title in center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Uncomment below if you want to use image logo */}
        {/* <Image src="/images/logo.png" width={60} height={60} alt="MiraVerse Logo" className="mx-auto mb-2" /> */}
        <motion.h1
          className="text-xl sm:text-2xl font-bold text-gold tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Loading MiraVerse...
        </motion.h1>
      </div>
    </div>
  );
};

export default Loader;
