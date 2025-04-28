// src/app/api/stores/name/[slug]/route.ts
import { getStoresData } from '@/lib/parseCsv';

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  try {
    const { slug } = context.params;
    const data = await getStoresData();

    const store = data.find(store =>
      slugify(store.name || '') === decodeURIComponent(slug.toLowerCase())
    );

    if (!store) {
      return new Response(JSON.stringify({ error: 'Store not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(store), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error fetching store:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
