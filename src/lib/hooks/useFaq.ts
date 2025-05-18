// hooks/useFaqs.ts
import { useQuery } from '@tanstack/react-query';

const fetchFaqs = async (state: string) => {
  const res = await fetch(`/api/faqs?state=${encodeURIComponent(state)}`);
  if (!res.ok) {
    throw new Error('Failed to fetch FAQs');
  }
  const data = await res.json();
  return data.faqs;
};

export const useFaqs = (state: string) => {
  return useQuery({
    queryKey: ['faqs', state],
    queryFn: () => fetchFaqs(state),
    enabled: !!state, // only run query if state is provided
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
};
