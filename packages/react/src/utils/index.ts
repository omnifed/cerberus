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

export * from './localStorage'
