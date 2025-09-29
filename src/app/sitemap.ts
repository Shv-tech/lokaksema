import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lokaksema.io';
  const routes = [
    '',
    '/about',
    '/speakers',
    '/sponsors',
    '/schedule',
    '/workshops',
    '/venue',
    '/press',
    '/blog',
    '/code-of-conduct',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: ${baseUrl},
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
