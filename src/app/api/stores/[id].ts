// pages/api/stores/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getStoresData } from '@/lib/parseCsv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const data = await getStoresData();

  const index = parseInt(id as string);
  if (isNaN(index) || index < 0 || index >= data.length) {
    return res.status(404).json({ error: 'Store not found' });
  }

  res.status(200).json(data[index]);
}
