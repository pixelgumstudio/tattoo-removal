
export async function fetchPagesBySlug(slug: string, postal: string) {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseURL}/api/stores/name/${slug}?postal=${postal}`);
    const json = await response.json(); 
    return json;
  } catch (error) {
    console.error(`Failed to fetch product by slug (${slug}):`, error);
    return null;
  }
}