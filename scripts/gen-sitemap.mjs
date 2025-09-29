import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lokaksema.io';

const staticRoutes = [
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

const sitemapBody = staticRoutes
  .map((route) => {
    return   <url>\n    <loc></loc>\n    <changefreq>weekly</changefreq>\n  </url>;
  })
  .join('\n');

const xml = <?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n</urlset>;

writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), xml);
console.log('Sitemap generated at public/sitemap.xml');
