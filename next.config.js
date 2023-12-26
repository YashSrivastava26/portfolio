/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: false,
  cacheOnFrontendNav: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  },
  swcMinify: true,
});

const nextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
