export async function fetchStoreByName(slug: string, postal: string) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseURL}/api/stores/name/${slug}?postal=${postal}`, {
      cache: 'no-store',
    });
  
    if (!res.ok) {
      console.error(`[API Error] ${res.status} ${res.statusText}`);
      return null;
    }
  
    try {
      const json = await res.json();  
      // Return json.store or json directly depending on your API
      return json?.store || json;
    } catch (err) {
      console.error('[JSON Parse Error]', err);
      return null;
    }
  }
  

  
export async function fetchPagesBySlug(slug: string, postal: string) {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseURL}/api/stores/name/${slug}?postal=${postal}`);
    const json = await response.json(); 
    return json?.store || json;
  } catch (error) {
    console.error(`Failed to fetch product by slug (${slug}):`, error);
    return null;
  }
}