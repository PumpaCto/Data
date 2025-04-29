import "@/styles/globals.css";
import "@/styles/themes.css";
import "@/styles/animations.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>MiraVerse Token</title>
        <meta
          name="description"
          content="The future of crypto powered by anime, AI, and community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <CustomCursor />
        <ScrollProgress />
        {loading ? <Loader /> : <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
