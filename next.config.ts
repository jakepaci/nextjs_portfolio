import type { NextConfig } from "next";

const nextConfig: NextConfig & { experimental?: { appDir?: boolean } } = {
  experimental: {
    appDir: true, // enable App Router
  },
};

export default nextConfig;
