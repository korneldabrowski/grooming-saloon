/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      "picsum.photos",
      "images.unsplash.com",
      "images.pexels.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     // remotePatterns: [
//     //   {
//     //     protocol: "https",
//     //     hostname: "res.cloudinary.com",
//     //     pathname: "/dhby7umil/image/upload/**",
//     //   },
//     // ],
//     // domains: [
//     //   // "picsum.photos",
//     //   // "images.unsplash.com",
//     //   // "images.pexels.com",
//     //   "res.cloudinary.com",
//     // ],

//     loader: "cloudinary",
//     path: "https://res.cloudinary.com/dhby7umil/image/upload",

//     // remotePatterns: [
//     //   {
//     //     protocol: "https",
//     //     hostname: "res.cloudinary.com",
//     //     port: "",
//     //     pathname: "dhby7umil/image/upload/",
//     //   },
//     // ],

//     // remotePatterns: [
//     //   {
//     //     protocol: "https",
//     //     hostname: "**.**.com",
//     //   },
//     // ],
//   },
// };

// module.exports = nextConfig;
