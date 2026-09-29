import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", /*this makes it work so taht it can be hosted on github pages. add to before anything in public folder is linked*/
  basePath: "/xaviercaldwell2026",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;