import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

// https://github.com/vercel/next.js/issues/77482
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const nextConfig: NextConfig = {
  // break jest tests
  transpilePackages: ["@noble/ciphers", "@noble/hashes", "jose"],
};

export default withBundleAnalyzer(nextConfig);
