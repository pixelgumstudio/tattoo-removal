// src/app/api/stores/name/[slug]/route.ts
import { getStoresData } from '@/lib/parseCsv';
import { createSlug } from '@/lib/slug';



export async function GET(
  req,
  context
) {
  const { slug } = await context.params;
  const searchParams = req.nextUrl.searchParams;
  const postalCode = searchParams.get('postal');

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug parameter is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await getStoresData();
    const normalizedSlug = decodeURIComponent(slug.toLowerCase());

    const store = data.find(store => {
      const matchesSlug = createSlug(store.name || '') === normalizedSlug;
      const matchesPostal = postalCode
        ? (store.postal_code || '').toString().toLowerCase() === postalCode.toLowerCase()
        : true;
      return matchesSlug && matchesPostal;
    });

    if (!store) {
      return new Response(JSON.stringify({ error: 'Clinic not found with given slug and postal code' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(store), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API /stores/name/[slug] error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
