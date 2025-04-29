"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/data/blogData";

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest from MiraVerse
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden border border-gold bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cursor-pointer">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gold">{post.title}</h3>
                    <p className="mt-2 text-muted dark:text-gray-300 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-sm text-gray-400 mt-3 block">
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
