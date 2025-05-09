// pages/api/stores/city/[city].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getStoresData } from '@/lib/parseCsv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;
  const data = await getStoresData();

  const filtered = data.filter(store =>
    store.city?.toLowerCase() === (city as string).toLowerCase()
  );

  res.status(200).json({
    count: filtered.length,
    data: filtered,
  });
}

