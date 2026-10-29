import type { APIRoute } from 'astro';
import { pages } from '../data/sections';
import { site } from '../data/site';

/** sitemap.xml – enthält alle eingeschalteten, indexierbaren Seiten (gleiche URL wie bei Onepage). */
export const GET: APIRoute = () => {
  const urls = Object.entries(pages)
    .filter(([, p]) => p.enabled && !p.noindex)
    .map(([path]) => `  <url>\n    <loc>${site.url}${path === '/' ? '/' : path}</loc>\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
