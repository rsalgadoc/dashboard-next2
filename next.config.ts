import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/dashboard-next2',
  trailingSlash: true,
  assetPrefix: '/dashboard-next2',
};

export default nextConfig;
