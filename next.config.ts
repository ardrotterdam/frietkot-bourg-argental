import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Lockfiles higher on disk (e.g. C:\Users\<user>\package-lock.json) can make
// Next infer the wrong root in dev/production, which breaks Turbopack/CSS resolution.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
