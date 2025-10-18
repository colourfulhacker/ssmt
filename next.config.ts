import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.zyrosite.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    allowedDevOrigins: process.env.REPLIT_DEV_DOMAIN 
      ? [`https://${process.env.REPLIT_DEV_DOMAIN}`] 
      : [],
  },
};

export default nextConfig;
