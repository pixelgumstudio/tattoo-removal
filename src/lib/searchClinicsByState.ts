import { getStoresData } from '@/lib/parseCsv';

// function slugify(str: string): string {
//   return str.toLowerCase().replace(/\s+/g, '-');
// }

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

export type SearchType = "city" | "state" | "service" | "zip" | "name" | undefined;

export interface SearchOptions {
  query: string;
  type?: SearchType;
  page?: number;
  limit?: number;
}

  
  export async function searchClinicsByType({ query, page = 1, limit = 0 }: SearchOptions) {
    const data = await getStoresData();
    const normalizedQuery = query.toLowerCase();
   
  
    const filtered = data.filter(store => {   
      const state = store["state"]?.toLowerCase() ?? "";
      const city = store["city"]?.toLowerCase() ?? "";
      const matchExact = state === normalizedQuery || city === normalizedQuery;
      const matchPartial = state.includes(normalizedQuery) || city.includes(normalizedQuery); 
       
      // const valueToMatch = store[type] || '';
      // const matchExact = slugify(valueToMatch) === normalizedQuery;
      // const matchPartial = valueToMatch.toLowerCase().includes(normalizedQuery);
  
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
  