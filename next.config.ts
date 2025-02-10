import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Desativa a otimização automática de imagens
    domains: ['utfs.io'], 
  },
  output:'export',

 
};

export default nextConfig;
