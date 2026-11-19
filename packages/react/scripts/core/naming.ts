export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/** `itemTrigger` → `item-trigger` (matches Zag's `data-part` values) */
export function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/** `date-picker`, `DatePicker` or `date picker` → `DatePicker` */
export function toPascalCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => capitalize(word.toLowerCase()))
    .join('')
}

/** `date-picker` → `datePicker` */
export function toCamelCase(str: string): string {
  const pascal = toPascalCase(str)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

const RESERVED_WORDS = new Set(
  'break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with yield'.split(
    ' ',
  ),
)

/**
 * Panda recipe export name: `date-picker` → `datePicker`. Reserved words get a
 * `Recipe` suffix (`switch` → `switchRecipe`), matching the preset's convention.
 */
export function toRecipeName(key: string): string {
  const camel = toCamelCase(key)
  return RESERVED_WORDS.has(camel) ? `${camel}Recipe` : camel
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
