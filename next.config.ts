import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer';

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

    ],
  },
};

export default withContentlayer(nextConfig);

