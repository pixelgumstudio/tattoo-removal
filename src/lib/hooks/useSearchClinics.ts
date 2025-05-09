import { useQuery } from '@tanstack/react-query';


interface SearchParams {
    query: string;
    type?: 'state' | 'city' | 'service' | "";
    // service?: string;
    page?: number;
    limit?: number;
  }
  
  export const useSearchClinics = ({ query, type = "", page = 1, limit = 50 }: SearchParams) => {
    console.log(type, "Type")

    return useQuery({
      queryKey: ['clinics', query, type, page, limit],
      queryFn: async () => {
        const params = new URLSearchParams({
          query,
          type,
          page: `${page}`,
          limit: `${limit}`,
        });
        const res = await fetch(`/api/search?${params.toString()}`);
        if (!res.ok) throw new Error('Failed to fetch clinics');
        return res.json();
      },
      enabled: !!query,
    });
  };
  