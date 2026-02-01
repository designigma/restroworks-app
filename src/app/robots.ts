import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://your-vercel-app.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}