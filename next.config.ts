import path from "path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    root: import.meta.dirname,
  },
  outputFileTracingRoot: path.join(import.meta.dirname),
};

export default withMDX(nextConfig);
