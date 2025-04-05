import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "superheroapi.com",
        port: "",
        pathname: "*",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.superherodb.com",
        port: "",
        pathname: "/pictures2/portraits/10/100/639.jpg",
        search: "",
      },
    ],
  },
};

export default nextConfig;
