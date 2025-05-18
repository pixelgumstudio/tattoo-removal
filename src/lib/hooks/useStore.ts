import { useQuery } from '@tanstack/react-query';
import { fetchBySuggestedCities, fetchCities, fetchState, fetchStoreByName, fetchStores } from '../apiClient';
import { Clinic, StateCard, CityServiceCardProps } from '@/types/store';

// Fetch paginated stores
export function useStores(page = 1, pageSize = 10, filter = '') {
  return useQuery<{ stores: Clinic[]; total: number }>({
    queryKey: ['stores', page, pageSize, filter],
    queryFn: async () => {
      const response = await fetchStores(page, pageSize, filter);
      return {
        stores: response.data,     // rename 'data' to 'stores'
        total: response.meta.totalPages,     // keep 'total'
      };
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
      
  });
}

// Fetch a single store by name
export function useStoreByName(name: string | undefined) {
  return useQuery<Clinic>({
    queryKey: ['storeByName', name],
    queryFn: () => fetchStoreByName({ slug: name! }),
    enabled: !!name,
    retry: (failureCount, error) => {
      if (error instanceof Error && error.message.includes('404')) return false; // Don't retry on 404
      return failureCount < 3;
    },
  });
}

// Fetch states
export function useFetchStates(params = 'shuffle=true&min=3&limit=10') {
  return useQuery<StateCard[]>({
    queryKey: ['states', params],
    queryFn: async () => {
      const response = await fetchState(params);
      return response.data;
    },
    enabled: !!params,
  });
}

// Fetch cities
export function useFetchCities(params = 'shuffle=true&min=3&limit=8') {
  return useQuery<CityServiceCardProps[]>({
    queryKey: ['cities', params],
    queryFn: async () => {
      const response = await fetchCities(params);
      return response.data;
    },
    enabled: !!params,
  });
}


// Fetch suggested clinics by cities
export function useSuggestByCities(params = 'shuffle=true&min=3&limit=8') {
  return useQuery<Clinic[]>({
    queryKey: ['suggestedCities', params],
    queryFn: async () => {
      const response = await fetchBySuggestedCities(params);
      return response.data; // Adjust based on actual API response
    },
    enabled: !!params,
  });
}