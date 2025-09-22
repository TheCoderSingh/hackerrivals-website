#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://hackerrivals.com';
const currentDate = new Date().toISOString().split('T')[0];

const urls = [
  {
    loc: '/',
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '1.0',
  },
  {
    loc: '/#home',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    loc: '/#esports',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    loc: '/#schedule',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    loc: '/#venue',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    loc: '/#register',
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '0.9',
  },
  {
    loc: '/#sponsors',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    loc: '/#faq',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7',
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('')}
  
</urlset>`;

const outputPath = join(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap);
console.log('✅ Sitemap generated successfully at:', outputPath);
