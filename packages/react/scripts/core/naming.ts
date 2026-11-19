export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/** `itemTrigger` → `item-trigger` (matches Zag's `data-part` values) */
export function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/** Anatomy part → member name on the compound component: `root` → `Root` */
export function partExportKey(part: string): string {
  return capitalize(part)
}

/** Ark anatomies expose `.keys()`; local ones may be plain arrays. De-duplicated, in order. */
export function anatomyParts(
  anatomy: { keys: () => string[] } | readonly string[],
): string[] {
  const parts = Array.isArray(anatomy)
    ? [...anatomy]
    : (anatomy as { keys: () => string[] }).keys()
  return [...new Set(parts)]
}
