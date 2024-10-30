import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/fcitx5-theme-designer' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
