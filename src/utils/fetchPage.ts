import { getPayload } from 'payload';
import configPromise from '@payload-config';

export const fetchPage = async (slug: string, locale: 'en' | 'es' = 'en') => {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: 'pages' as any,
    where: { slug: { equals: slug } },
    locale: locale as any,
    depth: 2,
  });
  return result.docs[0] || null;
};