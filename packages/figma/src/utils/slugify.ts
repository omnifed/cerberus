export function slugify(text: string): string {
  if (!text) return ''

  return text
    .toString() // Ensure it's a string
    .normalize('NFD') // Normalize unicode characters (separate accents from letters)
    .replace(/[\u0300-\u036f]/g, '') // Remove the accent marks
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars (except -)
    .replace(/--+/g, '-') // Replace multiple - with single -
}
