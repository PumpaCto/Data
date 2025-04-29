"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { nftData } from "@/data/nftData";

import "swiper/css";
import "swiper/css/pagination";

const NFTGallery = () => {
  return (
    <section id="nfts" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured NFT Collection
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {nftData.map((nft, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl border-4 border-gold overflow-hidden shadow-lg hover:shadow-xl transition-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={nft.image}
                  alt={nft.title}
                  width={400}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gold">{nft.title}</h3>
                  <p className="text-sm text-muted dark:text-gray-300 mt-2">
                    {nft.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NFTGallery;
