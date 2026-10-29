import { getSemanticTokens, getTokenByPath, TokenVal } from '@/lib/design-system'
import { TokenPath } from '@/styled-system/types'
import type { RawThemes, Sentiment } from '@cerberus/tokens'

export type SpecToken = {
  category: 'colors'
  cssVar: string // --cerberus-colors-action-bg-active
  originalValue?: string // {colors.danger.20}
  description: string
  semantic: boolean
  source: number
}
export type SpecValue = {
  token: string // colors.action.bg.active
  condition: string // _dark
  value: string // raw hex value
  refs: string[] // colors.brand.70
}

/**
 * Dynamically filters the semantic tokens array for a specific palette prefix.
 * Deduplicates tokens since the spec generator can output duplicates.
 */
export function getPaletteTokens(
  theme: RawThemes | string,
  palette: Sentiment | string,
): TokenVal[] {
  const tokens = getSemanticTokens()
  const uniqueTokens = new Map<string, TokenVal>()
  const prefix = `colors.${palette}.`

  tokens.entries.forEach((tok) => {
    if (tok.startsWith(prefix)) {
      uniqueTokens.set(tok, { ...tokens.results[tok], key: tok as TokenPath })
    }
  })

  return Array.from(uniqueTokens.values())
}

/**
 * Resolves a semantic token reference (e.g., "{colors.neutral.80}")
 * into its raw Hex or RGBA value by looking up the primitive in the theme data.
 */
export function resolveHexValue(origVal: string | undefined): string | null {
  if (!origVal) return null
  if (origVal.startsWith('#') || origVal.startsWith('rgb')) {
    return formatRgba(origVal)
  }
  const origPath: string = origVal.replace(/[{}]/g, '')
  const token: TokenVal | null = getTokenByPath(origPath as TokenPath)
  if (!token) return null
  return token.originalValue ?? null
}

export function formatRgba(rgba: string): string {
  // Fast fail if it doesn't match the expected prefix
  if (!rgba.startsWith('rgba(') && !rgba.startsWith('rgb(')) {
    return rgba
  }

  // Extract the raw numbers inside the parentheses
  const match = rgba.match(/rgba?\(([^)]+)\)/)
  if (!match) return rgba

  // Split by comma and clean up whitespace
  const parts = match[1].split(',').map((str) => str.trim())

  if (parts.length < 3) return rgba

  // Round R, G, B to nearest integer
  const r = Math.round(parseFloat(parts[0]))
  const g = Math.round(parseFloat(parts[1]))
  const b = Math.round(parseFloat(parts[2]))

  // If there is an alpha channel, round it to 2 decimal places (e.g., 0.800000011920929 -> 0.8)
  if (parts.length === 4) {
    const a = Math.round(parseFloat(parts[3]) * 100) / 100
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  return `rgb(${r}, ${g}, ${b})`
}
