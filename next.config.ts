import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Ensure Next.js does not optimize local images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gratisography.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "", // Ensure static assets load correctly
  output: "export",
};

export default nextConfig;
