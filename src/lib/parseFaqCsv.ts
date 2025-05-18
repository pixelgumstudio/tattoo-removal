// lib/parseFaqCsv.ts
import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

const filePath = path.join(process.cwd(), 'public', 'faq.csv');

let cachedFaqData: Record<string, string>[] = [];

export async function getFaqData(): Promise<Record<string, string>[]> {
  if (cachedFaqData.length) return cachedFaqData;

  const results: Record<string, string>[] = [];

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      return reject(new Error(`CSV file not found at ${filePath}`));
    }

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        cachedFaqData = results;
        resolve(results);
      })
      .on('error', (err) => {
        console.error('CSV parse error:', err);
        reject(err);
      });
  });
}
