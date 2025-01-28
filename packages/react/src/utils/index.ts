/**
 * This module contains utility functions that are used across your app.
 * @module Utils
 */

/**
 * Formats the count of notifications to be displayed in the notification badge.
 * @param count - The number of notifications.
 * @returns The formatted count of notifications.
 * @example
 * ```tsx
 * const count = formatNotifyCount(100)
 * console.log(count) // '99+'
 * ```
 */
export function formatNotifyCount(count: number): string {
  if (count > 99) return '99+'
  return count.toString()
}

/**
 * Splits the properties of an object into multiple groups based on lists of keys.
 * @param props - The object to split.
 * @param keyGroups - The lists of keys to include in each group.
 * @returns An array of objects: each containing the properties specified in the corresponding key group, and the last object containing the remaining keys.
 */
export function splitProps<T extends object>(
  props: T,
  ...keyGroups: (keyof T)[][]
): { [K in keyof T]?: T[K] }[] {
  const result = keyGroups.map(() => ({}) as { [K in keyof T]?: T[K] })
  const rest = {} as { [K in keyof T]?: T[K] }

  for (const key in props) {
    let assigned = false
    for (let i = 0; i < keyGroups.length; i++) {
      if (keyGroups[i].includes(key as keyof T)) {
        result[i][key as keyof T] = props[key]
        assigned = true
        break
      }
    }
    if (!assigned) {
      rest[key as keyof T] = props[key]
    }
  }

  return [...result, rest]
}

export * from './localStorage'
