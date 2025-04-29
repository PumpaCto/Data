// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.io", "cdn.miraversetoken.com"], // İleride IPFS ya da kendi CDN kullanırsak diye.
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
