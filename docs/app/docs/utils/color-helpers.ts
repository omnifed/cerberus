import { presetAcheronTheme as acheronTheme } from '@cerberus/preset-acheron-theme'
import { presetCerberusTheme as cerberusTheme } from '@cerberus/preset-cerberus-theme'
import {
  RawThemes,
  type SemanticToken,
  type Sentiment,
  type SentimentConfig,
  type Token,
} from '@cerberus/tokens'

export function getTokenList(
  palette: Sentiment,
  theme: RawThemes = 'cerberus',
): SentimentConfig[Sentiment] {
  const acheronTokens = acheronTheme?.themes?.acheron?.semanticTokens as {
    colors: SentimentConfig
  }
  const cerberusTokens = cerberusTheme?.themes?.cerberus?.semanticTokens as {
    colors: SentimentConfig
  }

  const tokens: SentimentConfig =
    theme === 'acheron' ? acheronTokens.colors : cerberusTokens.colors

  switch (palette) {
    case 'page':
      return tokens.page
    case 'action':
      return tokens.action
    case 'secondaryAction':
      return tokens.secondaryAction
    case 'info':
      return tokens.info
    case 'success':
      return tokens.success
    case 'warning':
      return tokens.warning
    case 'danger':
      return tokens.danger
    case 'dataViz':
      return tokens.dataViz
    default:
      throw new Error('Invalid color palette')
  }
}

export function normalizeTokens(
  tokens: SentimentConfig[Sentiment],
  palette: Sentiment,
) {
  const usage = Object.keys(tokens!)
  return usage.reduce((acc, key) => {
    const token = tokens![key as keyof typeof tokens]
    const tokenKeys = Object.keys(token!)
    const nestedTokenKeys = tokenKeys.filter(
      (tokenKey) => typeof token![tokenKey as keyof typeof token] === 'object',
    )

    const nestedTokens = normalizeNestedTokens({
      nestedTokenKeys,
      token,
      key,
      palette,
    })

    return { ...acc, ...nestedTokens }
  }, {})
}

interface NormalizeNestedTokensProps {
  nestedTokenKeys: string[]
  token: SemanticToken
  key: string
  palette: Sentiment
}

export function normalizeNestedTokens(data: NormalizeNestedTokensProps) {
  const { token, key, palette } = data
  return data.nestedTokenKeys.reduce((acc, tokenKey) => {
    const nestedToken = token![tokenKey as keyof typeof token] as Token

    if (nestedToken.hasOwnProperty('value'))
      return { ...acc, [`${palette}-${key}-${tokenKey}`]: nestedToken }

    const nestedTokenKeys = Object.keys(nestedToken)
    const normalizedNestedToken = nestedTokenKeys.reduce(
      (acc, nestedTokenKey) => {
        const value = nestedToken[nestedTokenKey as keyof typeof nestedToken]
        const tokenName = `${palette}-${key}-${tokenKey}-${nestedTokenKey}`
        return { ...acc, [tokenName]: value }
      },
      {},
    )
    return { ...acc, ...normalizedNestedToken }
  }, {})
}

/**
 * Extracts the primitive token reference from a semantic token value
 * @param tokenValue - The semantic token value object containing base/_light/_dark values
 * @param mode - Current theme mode ('light', 'dark', or 'system')
 * @returns The primitive token reference (e.g., "cerberus.neutral.80")
 */
export function getPrimitiveTokenReference(
  tokenValue: SemanticToken['value'],
  mode: 'light' | 'dark' | 'system' = 'dark',
): string | null {
  // Handle system mode by defaulting to dark mode
  const resolvedMode = mode === 'system' ? 'dark' : mode

  // Get the appropriate value based on mode
  const modeKey = `_${resolvedMode}` as keyof typeof tokenValue
  const rawValue = tokenValue[modeKey] || tokenValue.base

  if (!rawValue) return null

  // Extract the primitive token reference from the {colors.xxx} format
  const match = rawValue.match(/\{colors\.(.+)\}/)
  return match ? match[1] : rawValue
}

/**
 * Resolves a primitive token reference to its actual hex color value
 * @param tokenReference - The primitive token reference (e.g., "cerberus.neutral.80")
 * @returns The hex color value (e.g., "#201935") or null if not found
 */
export function resolvePrimitiveTokenToHex(
  tokenReference: string,
): string | null {
  if (typeof document === 'undefined') return null

  // Convert the token reference to CSS variable format
  // "cerberus.neutral.80" -> "--cerberus-colors-cerberus-neutral-80"
  // But we need to use the actual theme: "acheron.neutral.80" -> "--cerberus-colors-acheron-neutral-80"
  const cssVarName = `--cerberus-colors-${tokenReference.replace(/\./g, '-')}`

  // Get the computed value from the document's style
  const computedValue = getComputedStyle(document.documentElement)
    .getPropertyValue(cssVarName)
    .trim()

  // Return the value if it exists and looks like a hex color
  if (
    computedValue &&
    (computedValue.startsWith('#') || computedValue.startsWith('rgb'))
  ) {
    return computedValue
  }

  return null
}

/**
 * Gets the resolved hex color value for a semantic token
 * @param tokenValue - The semantic token value object containing base/_light/_dark values
 * @param mode - Current theme mode ('light', 'dark', or 'system')
 * @returns The resolved hex color value or null if not found
 */
export function getSemanticTokenHexValue(
  tokenValue: SemanticToken['value'],
  mode: 'light' | 'dark' | 'system' = 'dark',
): string | null {
  const primitiveRef = getPrimitiveTokenReference(tokenValue, mode)
  if (!primitiveRef) return null

  return resolvePrimitiveTokenToHex(primitiveRef)
}
