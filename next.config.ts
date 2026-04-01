import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external sources used in the portfolio
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    // Local images from /public/img are always allowed by default
  },
};

export default nextConfig;
