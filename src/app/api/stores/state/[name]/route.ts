// src/app/api/stores/route.ts
import { getStoresData } from '@/lib/parseCsv';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  const data = await getStoresData();

  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + limit);

  return Response.json({
    total: data.length,
    page,
    limit,
    data: paginated,
  });
}
