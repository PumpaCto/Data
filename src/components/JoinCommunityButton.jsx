"use client";

import { motion } from "framer-motion";
import { Send } from "react-feather";

const JoinCommunityButton = () => {
  return (
    <motion.a
      href="https://t.me/MiraVerseToken"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Send size={18} />
      Join Community
    </motion.a>
  );
};

export default JoinCommunityButton;
