import { searchClinicsByType, SearchType } from '@/lib/searchClinicsByState';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query') || '';
  const type = searchParams.get('type') as SearchType || undefined; // default to 'state' if not provided
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const results = await searchClinicsByType({
    query,
    type,
    page,
    limit,
  });

  return Response.json(results);
}
