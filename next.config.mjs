/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  experimental: { appDir: true },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');
    return config;
  },
};

export default nextConfig;