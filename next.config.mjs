import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Force Next.js to transpile these packages to fix "default.default" error
  transpilePackages: [
    '@payloadcms/next', 
    '@payloadcms/richtext-lexical', 
    'lucide-react'
  ],
  
  // 2. Keep the compiler safe
  experimental: {
    reactCompiler: false,
  },
}

export default withPayload(nextConfig)