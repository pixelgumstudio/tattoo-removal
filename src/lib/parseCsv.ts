// lib/parseCsv.ts
import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

const filePath = path.join(process.cwd(), 'public', 'data.csv');

let cachedData: Record<string, string>[] = [];

export async function getStoresData(): Promise<Record<string, string>[]> {
  if (cachedData.length) return cachedData;

  const results: Record<string, string>[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        cachedData = results;
        resolve(results);
      })
      .on('error', reject);
  });
}


