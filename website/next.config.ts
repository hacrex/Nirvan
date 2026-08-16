import type { NextConfig } from 'next';

const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? '/Revia' : '',
  assetPrefix: isGitHubPagesBuild ? '/Revia/' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
