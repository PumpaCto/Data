// src/components/HeroSection.jsx

import { motion } from "framer-motion"; import Image from "next/image"; import Link from "next/link"; import { useEffect, useState } from "react";

const stars = new Array(300).fill(0); const motivationalQuotes = [ "Built by visionaries, for dreamers.", "The future is not found. It's created.", "Anime meets blockchain, now unstoppable.", "You are early. Stay curious.", "Crypto evolution starts here." ];

const navigationLinks = [ { name: "Roadmap", href: "/roadmap" }, { name: "Tokenomics", href: "/tokenomics" }, { name: "Community", href: "/community" }, { name: "NFTs", href: "/nft" }, { name: "Contact", href: "/contact" }, ];

export default function HeroSection() { const [mounted, setMounted] = useState(false); const [currentTime, setCurrentTime] = useState(""); const [quoteIndex, setQuoteIndex] = useState(0); const [stats, setStats] = useState({ twitterFollowers: 0, telegramMembers: 0, tokenPrice: 0, marketCap: 0, holders: 0 });

useEffect(() => { setMounted(true);

const timeInterval = setInterval(() => {
  const date = new Date();
  setCurrentTime(date.toLocaleTimeString());
}, 1000);

const quoteInterval = setInterval(() => {
  setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
}, 7000);

fetchLiveStats();
const statsInterval = setInterval(fetchLiveStats, 30000); // 30s

return () => {
  clearInterval(timeInterval);
  clearInterval(quoteInterval);
  clearInterval(statsInterval);
};

}, []);

const fetchLiveStats = async () => { try { // Replace with your real API endpoints const twitter = 17400; const telegram = 6231; const tokenPrice = 0.0023; const marketCap = 351000; const holders = 14890;

setStats({
    twitterFollowers: twitter,
    telegramMembers: telegram,
    tokenPrice,
    marketCap,
    holders,
  });
} catch (err) {
  console.error("Failed to fetch live stats", err);
}

};

return ( <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">

{/* Stars */}
  <div className="absolute inset-0 z-0">
    {stars.map((_, index) => (
      <motion.div
        key={index}
        className="absolute bg-white rounded-full opacity-20 blur-sm shadow"
        style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: Math.random() * 6 + 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  {/* Navbar */}
  <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 backdrop-blur rounded-full px-6 py-2 flex gap-4 text-sm font-semibold text-yellow-300">
    {navigationLinks.map((link, i) => (
      <Link key={i} href={link.href}>
        <span className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">
          {link.name}
        </span>
      </Link>
    ))}
  </nav>

  {/* Content */}
  <motion.div
    className="z-10 max-w-5xl w-full"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.5 }}
  >
    <div className="flex justify-center mb-12">
      <div className="relative w-48 h-48 md:w-56 md:h-56">
        <Image
          src="/images/logo.png"
          alt="MiraVerse Logo"
          layout="fill"
          objectFit="contain"
          className="drop-shadow-xl rounded-full glow-animation"
          priority
        />
      </div>
    </div>

    <motion.h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
      Welcome to MiraVerse
    </motion.h1>

    <p className="text-sm text-gray-400 mb-2 italic">{currentTime}</p>
    <p className="text-md md:text-lg text-yellow-300 font-mono mb-6 animate-pulse">
      {motivationalQuotes[quoteIndex]}
    </p>

    <motion.p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
      Explore anime, blockchain, AI and real-time utility.
    </motion.p>

    <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-yellow-200 text-sm font-mono">
      <div>Twitter: {stats.twitterFollowers.toLocaleString()} followers</div>
      <div>Telegram: {stats.telegramMembers.toLocaleString()} members</div>
      <div>Price: ${stats.tokenPrice.toFixed(4)}</div>
      <div>Market Cap: ${stats.marketCap.toLocaleString()}</div>
      <div>Holders: {stats.holders.toLocaleString()}</div>
    </motion.div>

    <div className="flex flex-wrap gap-6 justify-center">
      <Link href="https://pump.fun" target="_blank">
        <button className="btn-primary px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold shadow-lg">
          Buy Now
        </button>
      </Link>
      <Link href="https://t.me/MiraVerseToken" target="_blank">
        <button className="btn-secondary px-8 py-3 rounded-full bg-black border border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-black transition">
          Join Community
        </button>
      </Link>
    </div>
  </motion.div>

  {/* Scroll */}
  {mounted && (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce text-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ↓ SCROLL
    </motion.div>
  )}
</section>

); }

