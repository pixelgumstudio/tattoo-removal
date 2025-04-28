import { getStoresData } from '@/lib/parseCsv';

function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-');
}

// function parseServices(about?: string): string[] {
//   try {
//     const json = about && JSON.parse(about);
//     if (!json || typeof json !== 'object') return [];

//     const fromBusiness = json['From the business'] || {};
//     const options = json['Service options'] || {};
//     const accessibility = json['Accessibility'] || {};

//     return [...Object.keys(fromBusiness), ...Object.keys(options), ...Object.keys(accessibility)];
//   } catch {
//     return [];
//   }
// }

interface SearchOptions {
    query: string;
    // service?: string;
    type?: 'state' | 'city' | 'service';
    page?: number;
    limit?: number;
  }
  
  export async function searchClinicsByType({ query,  type = 'state', page = 1, limit = 0 }: SearchOptions) {
    const data = await getStoresData();
    const normalizedQuery = query.toLowerCase();
  
    const filtered = data.filter(store => {
      const valueToMatch = store[type] || '';
      const matchExact = slugify(valueToMatch) === normalizedQuery;
      const matchPartial = valueToMatch.toLowerCase().includes(normalizedQuery);
  
  
      return (matchExact || matchPartial);
    });
  
    const total = filtered.length;
    const start = (page - 1) * limit;
    const paginated = limit > 0 ? filtered.slice(start, start + limit) : filtered;
  
    return {
      total,
      page,
      limit,
      data: paginated,
    };
  }
  