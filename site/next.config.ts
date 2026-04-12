import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/girl-boy-power-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
