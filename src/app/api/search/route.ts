import { searchClinicsByType } from '@/lib/searchClinicsByState';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query') || '';
  // const service = searchParams.get('service') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  const results = await searchClinicsByType({
    query,
    // service,
    page,
    limit,
  });

  return Response.json(results);
}
