import { getStoresData } from '@/lib/parseCsv';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '0');
  const limit = parseInt(searchParams.get('limit') || '0'); // fallback if no pagination

  const stateFilter = searchParams.get('state')?.toLowerCase();
  const cityFilter = searchParams.get('city')?.toLowerCase();

  if (limit > 0 && pageSize > 0) {
    return new Response(
      JSON.stringify({ error: "Do not use both 'limit' and 'pageSize'." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  let data = await getStoresData();

  // Step 1: Apply filters
  if (stateFilter) {
    data = data.filter(store => store.state?.toLowerCase() === stateFilter);
  }
  if (cityFilter) {
    data = data.filter(store => store.city?.toLowerCase() === cityFilter);
  }

  // Step 2: Shuffle (Fisher–Yates)
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  const total = data.length;
  const totalPages = pageSize > 0 ? Math.ceil(total / pageSize) : 1;

  // Step 3: Apply pagination or limit
  let result: typeof data;
  if (pageSize > 0) {
    const start = (page - 1) * pageSize;
    result = data.slice(start, start + pageSize);
  } else if (limit > 0) {
    result = data.slice(0, limit);
  } else {
    result = data;
  }

  return Response.json({
    data: result,
    meta: {
      total,
      page: pageSize > 0 ? page : undefined,
      pageSize: pageSize > 0 ? pageSize : undefined,
      totalPages: pageSize > 0 ? totalPages : undefined,
    },
  });
}

