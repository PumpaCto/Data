"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Sun, Moon } from "react-feather";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-black text-black dark:text-gold shadow-md hover:shadow-lg border-2 border-gold transition-default"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
