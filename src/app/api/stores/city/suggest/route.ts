import { getStoresData } from '@/lib/parseCsv';

function slugify(str: string): string {
  return str.toLowerCase().trim().replace(/\s+/g, '-');
}

function parseServices(about: string | undefined): string[] {
  try {
    const json = about && JSON.parse(about);
    if (!json || typeof json !== 'object') return [];

    return [
      ...Object.keys(json['From the business'] || {}),
      ...Object.keys(json['Service options'] || {}),
      ...Object.keys(json['Accessibility'] || {}),
    ];
  } catch {
    return [];
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityQuery = searchParams.get('city')?.toLowerCase().trim();
  const limit = parseInt(searchParams.get('limit') || '0');
  const min = parseInt(searchParams.get('min') || '0');
  const shuffle = searchParams.get('shuffle') === 'true';

  if (!cityQuery) {
    return Response.json([], { status: 200 });
  }

  const data = await getStoresData();

  // Filter and enrich based on city
  let result = data
    .filter(store => store.city && slugify(store.city) === slugify(cityQuery))
    .map(store => ({
      ...store,
      services: parseServices(store.about),
    }))
    .filter(store => store.services.length >= min);

  if (shuffle) result = result.sort(() => Math.random() - 0.5);
  if (limit > 0) result = result.slice(0, limit);

  return Response.json(result);
}


// GET /api/stores/city/suggest?city=Denver&min=3&limit=5&shuffle=true
// GET /api/stores/city/suggest?city=Denver&min=3&limit=5&shuffle=false