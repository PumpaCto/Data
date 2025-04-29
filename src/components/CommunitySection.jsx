"use client";

import { motion } from "framer-motion";
import { Twitter, Send } from "react-feather";

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-secondary text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the MiraVerse Community
        </motion.h2>
        <p className="text-lg text-gray-300 mb-10">
          Be part of something legendary. Connect with other traders, anime lovers, and builders shaping the future of crypto storytelling.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://x.com/MiraVersaToken"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-6 py-3 bg-gold text-black font-bold rounded-full shadow-md hover:shadow-xl transition-default"
          >
            <Twitter size={20} />
            Follow on Twitter
          </motion.a>

          <motion.a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full shadow-md hover:shadow-xl transition-default"
          >
            <Send size={20} />
            Join Telegram
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
