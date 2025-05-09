import { getStoresData } from '@/lib/parseCsv';

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function parseServices(about: string | undefined): string[] {
  try {
    const json = about && JSON.parse(about);
    if (!json || typeof json !== 'object') return [];

    const fromBusiness = json['From the business'] || {};
    const options = json['Service options'] || {};
    const accessibility = json['Accessibility'] || {};

    return [...Object.keys(fromBusiness), ...Object.keys(options), ...Object.keys(accessibility)];
  } catch {
    return [];
  }
}

function generateCityImage(state: string): string {
  const slug = slugify(state);
  return `/images/${slug}.webp`; // Adjust this if you have per-city images
}

export async function GET(request: Request) {
  const data = await getStoresData();
  const { searchParams } = new URL(request.url);

  const limit = parseInt(searchParams.get('limit') || '0');
  const minLocations = parseInt(searchParams.get('min') || '0');
  const shuffle = searchParams.get('shuffle') === 'true';

  // Group by city + state
  const grouped: Record<string, { city: string, state: string, services: Set<string>, count: number }> = {};

  data.forEach(store => {
    const city = store.city;
    const state = store.state;
    if (!city || !state) return;

    const key = `${city}__${state}`;
    if (!grouped[key]) {
      grouped[key] = { city, state, services: new Set(), count: 0 };
    }

    grouped[key].count += 1;

    const services = parseServices(store.about);
    services.forEach(service => grouped[key].services.add(service));
  });

  let result = Object.values(grouped)
    .filter(item => item.count >= minLocations)
    .map(item => ({
      image: generateCityImage(item.state),
      city: item.city,
      state: item.state,
      servicesCount: item.services.size
    }));

  if (shuffle) {
    result = result.sort(() => Math.random() - 0.5);
  } else {
    result = result.sort((a, b) => b.servicesCount - a.servicesCount);
  }

  if (limit > 0) result = result.slice(0, limit);

  return Response.json({ data: result });
}




// URL | Result
// /api/cities?shuffle=true&limit=6 | 6 random cities
// /api/states?shuffle=true&min=3&limit=8 | 8 random states with at least 3 clinics
// /api/cities?min=4 | All cities with 4+ clinics, sorted by location count