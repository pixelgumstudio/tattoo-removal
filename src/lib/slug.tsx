export function createSlug(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .trim() // Trim any leading/trailing spaces
    .replace(/\s+/g, '-') // Replace all spaces with dashes
    .replace(/[^a-z0-9-&]/g, '') // Remove any non-alphanumeric characters except for - and &
    .replace(/--+/g, '-'); // Replace multiple consecutive dashes with a single dash
}
  

  