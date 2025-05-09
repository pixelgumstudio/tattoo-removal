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

function generateStateImage(state: string): string {
  const known = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];
  

  const slug = state.toLowerCase().replace(/\s+/g, '-');

  if (known.includes(slug)) {
    return `/images/states/${slug}.webp`;
  }

  return `https://source.unsplash.com/featured/800x600/?${encodeURIComponent(state)},landscape`;
}


export async function GET(request: Request) {
  const data = await getStoresData();
  const { searchParams } = new URL(request.url);

  const limit = parseInt(searchParams.get('limit') || '0');
  const minLocations = parseInt(searchParams.get('min') || '0');
  const shuffle = searchParams.get('shuffle') === 'true';

  const grouped: Record<string, { locations: number; services: Set<string> }> = {};

  data.forEach(store => {
    const state = store.state;
    if (!state) return;

    if (!grouped[state]) {
      grouped[state] = { locations: 0, services: new Set() };
    }

    grouped[state].locations += 1;

    const services = parseServices(store.about);
    services.forEach(service => grouped[state].services.add(service));
  });

  let result = Object.entries(grouped)
    .map(([state, { locations, services }]) => ({
      title: state,
      locations,
      services: services.size,
      backgroundImage: generateStateImage(state),
      link: `/state/${slugify(state)}`
    }))
    .filter(item => item.locations >= minLocations); // Filter by min

  if (shuffle) {
    result = result.sort(() => Math.random() - 0.5); // Shuffle
  } else {
    result = result.sort((a, b) => b.locations - a.locations); // Default sort
  }

  if (limit > 0) result = result.slice(0, limit);

  return Response.json({ data: result });
}



// URL | Description
// /api/states | All states, sorted by locations
// api/states?shuffle=true&min=3&limit=8 | 8 random states with at least 3 clinics
// /api/states?sort=services | Sorted by number of services
// /api/states?limit=6 | Top 6 by locations
// /api/states?sort=services&limit=6 | Top 6 by services