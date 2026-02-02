import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@payloadcms/next',
    '@payloadcms/richtext-lexical',
    'lucide-react',
    'payload'
  ],

  serverExternalPackages: [
    'pino', 
    'pino-pretty', 
    'sharp', 
    'graphql', 
    'mongoose',
    '@payloadcms/db-mongodb'
  ],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'lucide-react': 'lucide-react/dist/esm/icons/index.js',
    };
    return config;
  },

  experimental: {
    reactCompiler: false,
  },
}

export default withPayload(nextConfig)