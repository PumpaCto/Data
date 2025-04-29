import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // loader 1.5sn görünsün
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>MiraVerse Token</title>
        <meta name="description" content="The future of crypto powered by anime, AI, and community." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {loading ? <Loader /> : <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
