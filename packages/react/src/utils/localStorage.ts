'use client'

/**
 * A utility function to get a value from local storage.
 * @param key The key to get from local storage.
 * @param defaultValue The fallback value if the key is not found.
 * @returns key or defaultValue
 */
export function getLocalStorage<T extends string>(
  key: string,
  defaultValue: T,
): T {
  const value = window.localStorage.getItem(key)
  if (value) {
    return value as T
  }
  return defaultValue
}

/**
 * A utility function to set a value in local storage.
 * @param key The key to set in local storage.
 * @param value The value to set in local storage.
 */
export function setLocalStorage<T>(key: string, value: T): void {
  const stringValue = typeof value === 'string' ? value : JSON.stringify(value)
  window.localStorage.setItem(key, stringValue)
}
