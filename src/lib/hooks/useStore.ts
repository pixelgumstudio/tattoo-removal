// hooks/useStores.ts
import { useQuery } from '@tanstack/react-query';
import { fetchCities, fetchState, fetchStoreByName, fetchStores } from '../apiClient';
import { Clinic, StateCard } from '@/types/store';
export function useStores(page = 1, limit = 10) {
  return useQuery({
    queryKey: ['stores', page, limit],
    queryFn: () => fetchStores(page, limit),
    placeholderData: undefined, // helpful for pagination
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useStoreByName(name: string | undefined) {
  return useQuery<Clinic>({
    queryKey: ['store', name],
    queryFn: () => fetchStoreByName(name!),
    enabled: !!name,
  });
}

export function useFetchStates(params = 'shuffle=true&min=3&limit=10') {
    return useQuery<StateCard[]>({
      queryKey: ['store', params],
      queryFn: async () => {
        const response = await fetchState(params!);
        return response.data; // Return only the `data` array to match the expected type
      },
      enabled: !!params,
    });
  }


  
export function useFetchCities(params = 'shuffle=true&min=3&limit=8') {
    return useQuery<StateCard[]>({
      queryKey: ['store', params],
      queryFn: async () => {
        const response = await fetchCities(params!);
        return response.data; // Return only the `data` array to match the expected type
      },
      enabled: !!params,
    });
  }
