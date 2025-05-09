// lib/hooks/useStoreBySlug.ts
import { useQuery } from '@tanstack/react-query';
import { fetchStoreByName } from '@/lib/apiClient';
import { Clinic } from '@/types/store';

export function useStoreByName(name: string | undefined, postal?: string) {
  return useQuery<Clinic>({
    queryKey: ['store', name],
    queryFn: () => fetchStoreByName({ slug: name!, postal }),
    enabled: !!name,
  });
}
