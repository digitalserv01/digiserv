import { MetadataRoute } from 'next';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { ArticleDocument } from '@/types/article';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amadigiconseils.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
     {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
     {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const articlesCol = collection(db, 'articles');
  const q = query(articlesCol, orderBy('createdAt', 'desc'));
  const articlesSnapshot = await getDocs(q);

  const articleRoutes: MetadataRoute.Sitemap = articlesSnapshot.docs.map(doc => {
     const data = doc.data() as ArticleDocument;
     const createdAt = data.createdAt?.toDate() || new Date();
    return {
      url: `${siteUrl}/blog/${data.slug}`,
      lastModified: createdAt,
      changeFrequency: 'never',
      priority: 0.8,
    };
  });


  return [...staticRoutes, ...articleRoutes];
}
