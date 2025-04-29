"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import NFTGallery from "@/components/NFTGallery";
import CommunitySection from "@/components/CommunitySection";
import PartnerSection from "@/components/PartnerSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import AnimatedStats from "@/components/AnimatedStats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MiraVerse Token - Home</title>
        <meta name="description" content="Discover the MiraVerse Token: The future of anime, AI, and crypto combined." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <AnimatedStats />
        <Roadmap />
        <Tokenomics />
        <NFTGallery />
        <CommunitySection />
        <PartnerSection />
        <FAQSection />
        <BlogPreview />
        <Footer />
      </main>
    </>
  );
}
