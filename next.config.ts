import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "gratisography.com", // Remove "https://" from hostname
        port: "", // Keep this empty if no port is used
        pathname: "/wp-content/uploads/**", // Match the correct path for the images
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Remove "https://" from hostname
        port: "", // Keep this empty if no port is used
        pathname: "/*", // Match the correct path for the images 
      }
    ]
  }
};

export default nextConfig;
