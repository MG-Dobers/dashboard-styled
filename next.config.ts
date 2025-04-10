import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['babypoint.pl'],
  },
  env: {
    NEXT_PUBLIC_WP_API_URL: process.env.NEXT_PUBLIC_WP_API_URL,
    NEXT_PUBLIC_WP_CONSUMER_KEY: process.env.NEXT_PUBLIC_WP_CONSUMER_KEY,
    NEXT_PUBLIC_WP_CONSUMER_SECRET: process.env.NEXT_PUBLIC_WP_CONSUMER_SECRET,
  },
};

export default nextConfig;
