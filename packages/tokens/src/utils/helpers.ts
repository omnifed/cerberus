/**
 * Converts an arbitrary string to kebab-case.
 *
 * Handles:
 * - CamelCase/PascalCase boundaries (e.g., "myVariable" -> "my-variable")
 * - Acronyms (e.g., "XMLHttp" -> "xml-http")
 * - Mixed delimiters (spaces, underscores, special chars)
 * - Leading/trailing non-alphanumeric characters
 *
 * @param input - The raw string to convert
 * @returns The normalized kebab-case string
 */
export function toKebabCase(input: string): string {
  if (!input) return ''

  return (
    input
      // 1. Handle CamelCase and Acronyms
      // Inserts a hyphen between a lowercase letter and an uppercase letter
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      // Inserts a hyphen between an uppercase letter and a following uppercase-then-lowercase sequence
      // This handles "XMLHttpRequest" -> "XML-Http-Request"
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')

      // 2. Normalize Delimiters
      // Replace any sequence of non-alphanumeric characters with a single hyphen
      .replace(/[^a-zA-Z0-9]+/g, '-')

      // 3. Standardization
      // Convert to lowercase
      .toLowerCase()

      // 4. Cleanup
      // Remove leading or trailing hyphens resulting from non-alphanumeric start/end chars
      .replace(/^-+|-+$/g, '')
  )
}
