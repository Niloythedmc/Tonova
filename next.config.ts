import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Tonova',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
