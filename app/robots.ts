import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';

export default function robots(): MetadataRoute.Robots {
  // Normalize domain to eliminate duplicate trailing slashes
  const baseUrl = siteConfig.domain.replace(/\/+$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
