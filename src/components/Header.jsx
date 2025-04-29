"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "NFTs", href: "/nft" },
    { label: "Community", href: "/community" },
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/80 dark:bg-secondary/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/">
            <span className="text-2xl font-bold text-gold tracking-widest cursor-pointer">
              MiraVerse
            </span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-default"
            >
              <Link href={item.href}>
                <span className="cursor-pointer hover:text-gold dark:hover:text-gold transition-colors">
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
