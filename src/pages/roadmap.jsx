// src/pages/roadmap.jsx

import { useEffect, useState } from "react"; import { motion } from "framer-motion"; import Head from "next/head"; import { FaRocket, FaLock, FaUsers, FaCogs, FaGift, FaCloud } from "react-icons/fa"; import { IoDiamond } from "react-icons/io5"; import { GiTempleDoor } from "react-icons/gi"; import { MdOutlineAutoGraph } from "react-icons/md";

const roadmapData = [ { quarter: "Q2 2025", title: "Genesis & Launch", items: [ "MiraVerse Token Smart Contract Creation", "Official Website Launch", "Viral Anime Trailer on Twitter & TikTok", "Pump.fun Listing & First Holder Drive", "Stealth Marketing through Meme Forces" ], icon: <FaRocket />, status: "live", }, { quarter: "Q3 2025", title: "Community Expansion", items: [ "Twitter Spaces AMA Series", "Partnerships with Crypto Influencers", "Discord & Telegram Community Games", "First NFT Character Reveal", "Anime Meme Contest w/ Prizes" ], icon: <FaUsers />, status: "pending", }, { quarter: "Q4 2025", title: "Product Ecosystem", items: [ "Launch Mira App v1 (iOS / Android)", "Integrate AI-Powered Token Tracker", "NFT Mint & Marketplace Alpha", "Web3 Wallet Integration", "DAO Planning Begins" ], icon: <FaCogs />, status: "locked", }, { quarter: "Q1 2026", title: "Web Game Universe", items: [ "Launch Open World Anime Game", "AI Story Engine + Token Rewards", "Staking for Power-Ups", "Rare NFT Drops Based on Actions", "First Founder NFT Collection" ], icon: <GiTempleDoor />, status: "locked", }, { quarter: "Q2 2026", title: "Mainstream Presence", items: [ "Exchange Listings (Tier 1 Goals)", "Live-Action Promo Collaboration", "Merch Store Launch", "Leaderboard & Seasonal Rankings", "Holders-Only Private Events" ], icon: <MdOutlineAutoGraph />, status: "locked", }, { quarter: "Q3 2026", title: "?? Mysterious Future", items: [ "Encrypted Roadmap Files on-chain", "Only NFT Holders See What Comes Next..." ], icon: <FaLock />, status: "mystery", } ];

const statusColors = { live: "border-green-500 bg-green-900/30", pending: "border-yellow-400 bg-yellow-900/20", locked: "border-gray-600 bg-gray-800/30", mystery: "border-purple-600 bg-purple-900/30 animate-pulse", };

export default function RoadmapPage() { const [mounted, setMounted] = useState(false);

useEffect(() => { setMounted(true); }, []);

return ( <> <Head> <title>Roadmap | MiraVerse</title> <meta name="description" content="Explore MiraVerse's vision from token launch to game universe domination." /> </Head>

<div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20">
    <h1 className="text-4xl md:text-6xl font-bold text-center text-primary mb-12 glow">MiraVerse Master Plan</h1>

    <div className="space-y-16 max-w-5xl mx-auto relative">
      {roadmapData.map((stage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`border-l-4 pl-6 rounded-lg shadow-lg ${statusColors[stage.status]}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-2xl text-yellow-400">{stage.icon}</div>
            <div>
              <p className="text-sm uppercase tracking-widest text-yellow-400">{stage.quarter}</p>
              <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
            </div>
          </div>
          <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
            {stage.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      {/* Final mystery reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 2 }}
        className="text-center text-sm text-gray-500 italic pt-8"
      >
        Built with love, driven by the community. Your journey has just begun.
      </motion.div>
    </div>
  </div>
</>

); }

