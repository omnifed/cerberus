import PrimitiveColors from './primitive-colors.cerberus.json' assert { type: 'json' }
import PrimitiveTypography from './primitive-typography.value.json' assert { type: 'json' }
import SemanticColorsDark from './semantic-colors.dark-mode.json' assert { type: 'json' }
import SemanticColorsLight from './semantic-colors.light-mode.json' assert { type: 'json' }
import TextStyles from './text-styles.desktop.json' assert { type: 'json' }

/**
 * This module is a collection of raw tokens that are used to generate the theme.
 * @module rawTokens
 */

export interface RawTokens {
  primitives: {
    colors: typeof PrimitiveColors
    typography: typeof PrimitiveTypography
  }
  semanticColors: {
    dark: typeof SemanticColorsDark
    light: typeof SemanticColorsLight
  }
  textStyles: typeof TextStyles
}

export const rawTokens: RawTokens = {
  primitives: {
    colors: PrimitiveColors,
    typography: PrimitiveTypography,
  },
  semanticColors: {
    dark: SemanticColorsDark,
    light: SemanticColorsLight,
  },
  textStyles: TextStyles,
}

export const colors = rawTokens.primitives.colors
export const text = rawTokens.primitives.typography

export type PrimitiveCollection =
  | RawTokens['primitives']['colors']
  | RawTokens['primitives']['typography']

// helpers

export function deepGet(obj: PrimitiveCollection, keys: string[]) {
  return keys.reduce(
    (xs, x) => xs?.[x as keyof PrimitiveCollection] ?? null,
    obj,
  )
}

type DeepReturn = {
  $value: string
}

export function deepGetByPaths(
  obj: PrimitiveCollection,
  path: string,
): DeepReturn {
  return deepGet(
    obj,
    path
      .replace(/\[([^[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t) => t !== ''),
  ) as unknown as DeepReturn
}
