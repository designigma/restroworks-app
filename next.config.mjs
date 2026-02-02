import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Force strict transpilation for the problem packages
  transpilePackages: [
    '@payloadcms/next',
    '@payloadcms/richtext-lexical',
    'lucide-react', // <--- This is usually the culprit
    'payload'
  ],

  // 2. Prevent Next.js from trying to bundle server-side Node modules
  serverExternalPackages: [
    'pino', 
    'pino-pretty', 
    'sharp', 
    'graphql', 
    'mongoose',
    '@payloadcms/db-mongodb'
  ],

  // 3. Webpack Override (The Nuclear Fix for Windows)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Force lucide-react to use the correct entry point
      'lucide-react': 'lucide-react/dist/esm/icons/index.js',
    };
    return config;
  },

  experimental: {
    reactCompiler: false, // Keep disabled for stability
  },
}

export default withPayload(nextConfig)