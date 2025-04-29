"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = (totalScroll / windowHeight) * 100;
      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gold z-[999]"
      initial={{ width: 0 }}
      animate={{ width: `${scroll}%` }}
      transition={{ ease: "linear", duration: 0.2 }}
    />
  );
};

export default ScrollProgress;
