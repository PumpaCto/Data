import { motion } from "framer-motion"; import Image from "next/image"; import Link from "next/link"; import { useState, useEffect } from "react";

const stars = new Array(300).fill(0);

const motivationalQuotes = [ "Built by visionaries, for dreamers.", "The future is not found. It's created.", "Anime meets blockchain, now unstoppable.", "You are early. Stay curious.", "Crypto evolution starts here." ];

const navigationLinks = [ { name: "Roadmap", href: "/roadmap" }, { name: "Tokenomics", href: "/tokenomics" }, { name: "Community", href: "/community" }, { name: "NFTs", href: "/nft" }, { name: "Contact", href: "/contact" }, { name: "About", href: "/about" } // About sayfası eklendi ];

export default function HeroSection() { const [mounted, setMounted] = useState(false); const [currentTime, setCurrentTime] = useState(""); const [quoteIndex, setQuoteIndex] = useState(0);

useEffect(() => { setMounted(true);

const timeInterval = setInterval(() => {
  const date = new Date();
  setCurrentTime(date.toLocaleTimeString());
}, 1000);

const quoteInterval = setInterval(() => {
  setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
}, 7000);

return () => {
  clearInterval(timeInterval);
  clearInterval(quoteInterval);
};

}, []);

return ( <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black"> {/* Background Stars */} <div className="absolute inset-0 z-0"> {stars.map((_, index) => ( <motion.div key={index} className="absolute bg-white rounded-full opacity-30 blur-sm shadow-lg" style={{ width: ${Math.random() * 2 + 1}px, height: ${Math.random() * 2 + 1}px, top: ${Math.random() * 100}%, left: ${Math.random() * 100}%, }} animate={{ y: [0, 20, 0] }} transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", }} /> ))} </div>

{/* Navigation Links */}
  <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 backdrop-blur rounded-full px-6 py-2 flex gap-4 text-sm font-semibold text-yellow-300">
    {navigationLinks.map((link, i) => (
      <Link key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}>
        <span className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">
          {link.name}
        </span>
      </Link>
    ))}
  </nav>

  {/* Main Content */}
  <motion.div
    className="z-10 max-w-5xl w-full"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.5 }}
  >
    {/* Logo */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center mb-12 relative group"
    >
      <div className="relative w-48 h-48 md:w-56 md:h-56">
        <Image
          src="/images/logo.png"
          alt="MiraVerse Logo"
          layout="fill"
          objectFit="contain"
          className="drop-shadow-xl rounded-full glow-animation"
          priority
        />
        <div className="absolute top-full left-0 w-full h-full opacity-20 transform scale-y-[-1] blur-xl">
          <Image
            src="/images/logo.png"
            alt="Reflection"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </motion.div>

    {/* Title */}
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold font-heading text-primary mb-6 glow leading-tight tracking-wide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      Welcome to MiraVerse
    </motion.h1>

    {/* Dynamic Time + Quote */}
    <p className="text-sm text-gray-400 mb-2 italic">Current time: {currentTime}</p>
    <motion.p
      key={quoteIndex}
      className="text-md md:text-lg text-yellow-300 font-mono mb-6 animate-pulse"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {motivationalQuotes[quoteIndex]}
    </motion.p>

    {/* Subtitle */}
    <motion.p
      className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      Anime, Blockchain, AI and Endless Adventures Await You. Experience a next-gen token ecosystem designed for the future.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      className="flex flex-wrap gap-6 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
        <button className="relative overflow-hidden btn-primary px-10 py-4 font-bold rounded-full shadow-xl transition-transform transform hover:scale-105">
          <span className="relative z-10">Buy Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-20 blur-lg"></span>
        </button>
      </Link>

      <Link href="https://t.me/MiraVerseToken" target="_blank" rel="noopener noreferrer">
        <button className="relative overflow-hidden btn-secondary px-10 py-4 font-bold rounded-full shadow-xl transition-transform transform hover:scale-105">
          <span className="relative z-10">Join Community</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-20 blur-lg"></span>
        </button>
      </Link>
    </motion.div>
  </motion.div>

  {/* Scroll Indicator */}
  {mounted && (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce z-10 font-mono text-sm tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
    >
      ↓ SCROLL
    </motion.div>
  )}
</section>

); }
