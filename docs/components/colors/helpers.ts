import data from '@/styled-system/specs/design-system.json'
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
 * @deprecated no longer necessary
 */
export function getThemeData(theme: RawThemes | string) {
  console.log('getThemeData', theme)
  // return themesData.data.find((t) => t.name === theme)
}

/**
 * Dynamically filters the semantic tokens array for a specific palette prefix.
 * Deduplicates tokens since the spec generator can output duplicates.
 */
export function getPaletteTokens(
  theme: RawThemes | string,
  palette: Sentiment | string,
): SpecValue[] {
  // const themeData = getThemeData(theme)
  // if (!themeData || !themeData.semanticTokens?.length) return []

  const uniqueTokens = new Map<string, SpecValue>()
  const prefix = `${palette}.`

  data.semanticTokens[0].values.forEach((tok) => {
    if (tok.name.startsWith(prefix)) {
      uniqueTokens.set(tok.name, tok as SpecValue)
    }
  })

  return Array.from(uniqueTokens.values())
}

/**
 * Extracts the exact string value for a given semantic token based on the active mode.
 */
export function getConditionValue(
  values: SpecValue['values'],
  theme: string,
  mode: 'light' | 'dark' | 'system' = 'dark',
): string {
  const resolvedMode = mode === 'system' ? 'dark' : mode
  const targetCondition = `${theme}.${resolvedMode}Mode`
  const baseCondition = `${theme}.base`

  const matched = values.find((v) => v.condition === targetCondition)
  if (matched) return matched.value

  const base = values.find((v) => v.condition === baseCondition)
  return base ? base.value : values[0]?.value || ''
}

/**
 * Resolves a semantic token reference (e.g., "{colors.neutral.80}")
 * into its raw Hex or RGBA value by looking up the primitive in the theme data.
 */
export function resolveHexValue(theme: string, rawValue: string): string | null {
  if (!rawValue) return null
  if (rawValue.startsWith('#') || rawValue.startsWith('rgb'))
    return formatRgba(rawValue)

  // Extract primitive reference: {colors.neutral.80} -> neutral.80
  const match = rawValue.match(/\{colors\.([^}]+)\}/)
  const primitiveName = match ? match[1] : rawValue

  // Some refs include the theme prefix like {colors.acheron.brand.20}
  const cleanPrimitiveName = primitiveName.replace(`${theme}.`, '')

  const themeData = getThemeData(theme)
  if (!themeData || !themeData.tokens?.length) return formatRgba(rawValue)

  const primitive = themeData.tokens[0].values.find(
    (t: any) => t.name === cleanPrimitiveName,
  )
  if (!primitive) return formatRgba(rawValue)

  const pVal = primitive.values[0]?.value
  return pVal ? formatRgba(pVal) : formatRgba(rawValue)
}

/**
 * Strips the {colors.xxx} wrapper to return a clean primitive reference name.
 */
export function getPrimitiveTokenReference(rawValue: string): string | null {
  if (!rawValue) return null
  const match = rawValue.match(/\{colors\.([^}]+)\}/)
  return match ? match[1] : rawValue
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
