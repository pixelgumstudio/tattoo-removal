import { NextResponse } from 'next/server';
import { getFaqData } from '@/lib/parseFaqCsv';
import { createSlug } from '@/lib/slug';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = decodeURIComponent(searchParams.get('state') || '');

  if (!state) {
    return NextResponse.json(
      { error: 'Missing `state` query parameter' },
      { status: 400 }
    );
  }

  try {
    const data = await getFaqData();
    const filtered = data.filter(
      (item) => createSlug(item.state.toLowerCase()) === createSlug(state.toLowerCase())
    );
    console.log(filtered, " data");

    return NextResponse.json({ faqs: filtered });
  } catch {
    return NextResponse.json(
      { error: 'Failed to load FAQ data' },
      { status: 500 }
    );
  }
}
