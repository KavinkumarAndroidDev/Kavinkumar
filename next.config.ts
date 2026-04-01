import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external sources used in the portfolio
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    // Local images from /public/img are always allowed by default
  },
  // Fix for "Blocked cross-origin request" when accessing via network IP
  allowedDevOrigins: ["10.132.119.228"],
};

export default nextConfig;
