import { TokenPath } from '@/styled-system/types'
import data from 'styled-system/specs/design-system.json'

/**
 * Get the variant options for data with only keys and no values
 */
export function getVariantKeys(group: keyof typeof data): string[] {
  if (!group) return []
  return Object.keys(data[group])
}

/**
 * Get the token keys for category data
 */
export function getCategoryKeys(group: keyof typeof data.categories): TokenPath[] {
  if (!group) return []
  const [start, end] = data.categories[group]
  return data.paths.slice(start, end) as TokenPath[]
}

/**
 * Get the token value by the path returned from `getCategoryKeys`
 */
export function getTokenByPath(path: TokenPath): TokenVal | null {
  if (!path) return null
  return data.tokens[path as keyof typeof data.tokens]
}

/**
 * Returns the user facing token name from a TokenPath
 */
export function getTokenNameFromPath(path: TokenPath): string {
  if (!path) return ''
  return path.split('.').slice(1).join() || ''
}

/**
 * Get all tokens that match a category name
 */
export function getTokensByCategory(category: string): TokenVal[] {
  if (!category) return []
  const result: TokenVal[] = Object.values(data.tokens).filter(
    (tok) => tok.category === category,
  )
  return result || []
}

/**
 * Helper to sort size-related variants in order from the raw design-system.json reference.
 */
export function sortSizeVariants<T>(variants: T[]): T[] {
  const sizeWeights = {
    '2xs': 1,
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
    '2xl': 7,
    '3xl': 8,
    '4xl': 9,
  }
  return variants.sort(
    (a, b) =>
      sizeWeights[a as keyof typeof sizeWeights] -
      sizeWeights[b as keyof typeof sizeWeights],
  )
}

// Types

export type TokenVal = {
  category: string // colors, shadows, etc.
  source: number
  cssVar?: string // --cerberus-shadows-inset-2xs
  originalValue?: string //'{colors.success.50}'
  description?: string
  semantic?: boolean
}
