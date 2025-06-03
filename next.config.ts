import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.permit.io",
      },
      {
        protocol: "https",
        hostname: "cloud.z.com",
      },
      {
        protocol: "https",
        hostname: "**.medium.com",
      },
      {
        protocol: "https",
        hostname: "**.zen8labs.com",
      },
      {
        protocol: "https",
        hostname: "**.tatvasoft.com",
      },
      {
        protocol: "https",
        hostname: "**.petermekhaeil.com",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
