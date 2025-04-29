"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import blogData from "@/data/blogData";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="flex flex-col items-center justify-center px-6 py-32">
        <h1 className="text-3xl font-bold text-gold mb-4">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300">We couldn't find the article you were looking for.</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - MiraVerse Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <main className="flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.title}
        </motion.h1>

        <motion.p
          className="text-sm text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Published on {post.date}
        </motion.p>

        <motion.div
          className="text-lg text-gray-700 dark:text-gray-300 leading-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {post.content}
        </motion.div>
      </main>
    </>
  );
}
