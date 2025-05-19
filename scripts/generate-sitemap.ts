import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import fs from 'fs';
import path from 'path';

// Load JSON data using fs to avoid ESM assert errors
const clinicsRaw = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));

const hostname = 'https://www.tattooremovalplace.com';

interface ClinicInfo {
  name: string;
  city: string;
  state: string;
  postal?: number;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
}

async function generateSitemap(): Promise<void> {
  const smStream = new SitemapStream({ hostname });
  const pipeline = smStream.pipe(createGzip());

  const staticPages = [
    '/',
    '/about-us',
    '/contact-us',
    '/blog',
    '/clinic-by-city',
    '/clinic-by-state',
  ];

  for (const url of staticPages) {
    smStream.write({ url, changefreq: 'monthly', priority: 0.8 });
  }

  const seenStates = new Set<string>();
  const seenCities = new Set<string>();

  clinicsRaw.forEach((clinic: ClinicInfo) => {
    const nameSlug = slugify(clinic.name);
    const citySlug = slugify(clinic.city);
    const stateSlug = slugify(clinic.state);
    const postal = clinic.postal || 'N/A';

    // Individual clinic page
    smStream.write({
      url: `/clinic/${nameSlug}?postal=${postal}`,
      changefreq: 'monthly',
      priority: 0.7,
    });

    // City page
    const cityKey = `${citySlug}-${stateSlug}`;
    if (!seenCities.has(cityKey)) {
      smStream.write({
        url: `/clinic-by-city/${citySlug}?state=${clinic.state}`,
        changefreq: 'monthly',
        priority: 0.6,
      });
      seenCities.add(cityKey);
    }

    // State page
    if (!seenStates.has(stateSlug)) {
      smStream.write({
        url: `/clinic-by-state/${stateSlug}`,
        changefreq: 'monthly',
        priority: 0.6,
      });
      seenStates.add(stateSlug);
    }
  });

  smStream.end();

  const publicPath = path.resolve(process.cwd(), 'public', 'sitemap.xml.gz');
  const writeStream = fs.createWriteStream(publicPath);
  const sitemap = await streamToPromise(pipeline);

  writeStream.write(sitemap);
  writeStream.end();

  console.log('✅ Sitemap successfully generated at /public/sitemap.xml.gz');
}

generateSitemap().catch(console.error);
