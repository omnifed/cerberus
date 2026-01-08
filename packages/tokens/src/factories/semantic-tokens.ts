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

  return {
    description: token.description,
    value: {
      base: _formatTokenValue(token.valuesByMode[darkMode]),
      _darkMode: _formatTokenValue(token.valuesByMode[darkMode]),
      _lightMode: _formatTokenValue(token.valuesByMode[lightMode]),
    },
  }
}

// Private

function _formatTokenValue(value: string | VariableColor): string {
  if (typeof value === 'string') {
    return `{colors.${value}}`
  } else if (typeof value === 'object') {
    return `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`
  }

  throw new Error(`Format of variable value is invalid: ${value}`)
}
