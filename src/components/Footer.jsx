"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Send, Globe } from "react-feather";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-secondary border-t border-gold text-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-xl font-bold text-gold">MiraVerse</h3>
          <p className="text-sm mt-2">© {year} MiraVerse Token. All rights reserved.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 items-center"
        >
          <a
            href="https://x.com/MiraVersaToken"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            <Send />
          </a>
          <Link href="/">
            <span className="hover:text-gold transition-colors cursor-pointer">
              <Globe />
            </span>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
