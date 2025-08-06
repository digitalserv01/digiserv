import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amadigiconseils.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/test', '/login'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
