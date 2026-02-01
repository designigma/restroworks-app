import { MetadataRoute } from 'next';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch all pages
  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
  });

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://your-vercel-app.vercel.app';

  return pages.docs.map((page) => ({
    url: `${baseUrl}/${page.slug === 'home' ? '' : page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: 'weekly',
    priority: page.slug === 'home' ? 1 : 0.8,
  }));
}