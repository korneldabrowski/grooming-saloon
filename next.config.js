/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos", "images.unsplash.com", "images.pexels.com"],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.**.com",
    //   },
    // ],
  },
};

module.exports = nextConfig;
