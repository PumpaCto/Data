import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="description" content="MiraVerse Token - The future of crypto powered by anime, AI, and community." />
        <meta name="theme-color" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miraversetoken.com/" />
        <meta property="og:title" content="MiraVerse Token" />
        <meta property="og:description" content="The next revolution: Anime, Crypto, AI - united." />
        <meta property="og:image" content="/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://miraversetoken.com/" />
        <meta property="twitter:title" content="MiraVerse Token" />
        <meta property="twitter:description" content="The next revolution: Anime, Crypto, AI - united." />
        <meta property="twitter:image" content="/images/logo.png" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

        {/* Preload important images */}
        <link rel="preload" href="/images/background-stars.jpg" as="image" />
        <link rel="preload" href="/images/logo.png" as="image" />

        {/* Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Additional SEO Optimizations */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MiraVerse Team" />
        <meta name="keywords" content="Crypto, Anime, AI, NFT, MiraVerse Token, Blockchain, Web3" />
      </Head>
      <body className="bg-white text-black dark:bg-secondary dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
