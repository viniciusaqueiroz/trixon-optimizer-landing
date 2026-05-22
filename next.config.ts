import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/trixon-optimizer-landing" : "",
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? "/trixon-optimizer-landing" : undefined,
  assetPrefix: isGitHubPages ? "/trixon-optimizer-landing/" : undefined,
};

export default nextConfig;
