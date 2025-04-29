// src/pages/index.jsx

import Head from "next/head";
import dynamic from "next/dynamic";

// Bileşenleri dinamik importla yükle (performans için)
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
// Gelecekte eklenebilecek bileşenler aşağıda hazır şekilde
// const Features = dynamic(() => import("@/components/Features"));
// const Roadmap = dynamic(() => import("@/components/Roadmap"));
// const JoinCommunity = dynamic(() => import("@/components/CommunitySection"));

export default function HomePage() {
  return (
    <>
      <Head>
        <title>MiraVerse Token | The Future of Crypto</title>
        <meta name="description" content="MiraVerse Token is a visionary project combining anime storytelling, crypto technology, and AI-powered decentralized applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="MiraVerse, Crypto, Token, AI, Anime, Blockchain, Pump.fun" />
        <meta property="og:title" content="MiraVerse Token" />
        <meta property="og:description" content="Where anime meets crypto innovation." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://miraversetoken.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#FFD700" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-white transition-colors duration-300">
        <HeroSection />

        {/* Gelecekte eklemek için hazır bileşen alanları */}
        {/* <Features /> */}
        {/* <Roadmap /> */}
        {/* <JoinCommunity /> */}
      </main>
    </>
  );
}
