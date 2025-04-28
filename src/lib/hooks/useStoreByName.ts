// lib/hooks/useStoreBySlug.ts
import { useQuery } from '@tanstack/react-query';
import { fetchStoreByName } from '@/lib/apiClient';
import { Clinic } from '@/types/store';

export function useStoreByName(name: string | undefined) {
  return useQuery<Clinic>({
    queryKey: ['store', name],
    queryFn: () => fetchStoreByName(name!),
    enabled: !!name,
  });
}
