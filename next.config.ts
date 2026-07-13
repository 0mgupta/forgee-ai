import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@cline/core', '@cline/sdk', '@cline/agents', '@cline/llms', '@cline/shared'],
};

export default nextConfig;
