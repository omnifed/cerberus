import { rgbaToString } from '@cerberus/figma/helpers'
import { SemanticToken } from '../semantic-tokens.types'
import { themes } from '../tokens'
import { VariableColor } from '../types'

export function createSemanticToken(
  theme: Exclude<keyof typeof themes, 'modes'>,
  path: string,
): SemanticToken {
  const data = themes[theme]

  const darkMode = data.modes['dark-mode'] as keyof typeof token.valuesByMode
  const lightMode = data.modes['light-mode'] as keyof typeof token.valuesByMode

  const tokens = data.tokens
  const token = tokens[path as keyof typeof tokens]

  if (!token) {
    throw new Error(`Token not found for path ${path}`)
  }

  const darkToken = _formatTokenValue(token.valuesByMode[darkMode])
  const lighToken = _formatTokenValue(token.valuesByMode[lightMode])

  // v3 Note: Remove this check & kill deprecated tokens
  const newGroups = ['bg', 'fg', 'dc']
  const group: string = String(token.name.split('/')[1])
  const deprecated: boolean = !newGroups.includes(group)

  return {
    deprecated,
    description: token.description,
    value: {
      base: darkToken,
      _dark: darkToken,
      _light: lighToken,
      _osDark: darkToken,
      _osLight: lighToken,
    },
  }
}

/**
 * Formats a token value as a PandaCSS registered color primitive or an RGB value.
 * All Cerberus themes register color primitives using the naming convention of `[theme].[figmaValue]`
 *
 * @param value - The token value to format.
 * @param theme - The theme to use for formatting (default: 'cerberus').
 * @returns The formatted token value as a string.
 */
function _formatTokenValue(value: string | VariableColor): string {
  if (typeof value === 'string') {
    return `{colors.${value}}`
  } else if (typeof value === 'object') {
    return rgbaToString(value)
  }

  throw new Error(`Format of variable value is invalid: ${value}`)
}
