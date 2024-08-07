import primitiveColors from './primitive-colors.cerberus.json' with { type: 'json' }
import primitiveTypography from './primitive-typography.value.json' with { type: 'json' }
import semanticColorsDark from './semantic-colors.dark-mode.json' with { type: 'json' }
import semanticColorsLight from './semantic-colors.light-mode.json' with { type: 'json' }
import TextStyles from './text-styles.desktop.json' with { type: 'json' }

/**
 * This module is a collection of raw tokens that are used to generate the theme.
 * @module rawTokens
 */

export interface RawTokens {
  primitives: {
    colors: typeof primitiveColors
    typography: typeof primitiveTypography
  }
  semanticColors: {
    dark: typeof semanticColorsDark
    light: typeof semanticColorsLight
  }
  textStyles: typeof TextStyles
}

export const rawTokens: RawTokens = {
  primitives: {
    colors: primitiveColors,
    typography: primitiveTypography,
  },
  semanticColors: {
    dark: semanticColorsDark,
    light: semanticColorsLight,
  },
  textStyles: TextStyles,
}

export const colors = rawTokens.primitives.colors
export const text = rawTokens.primitives.typography
export const semanticColors = semanticColorsDark

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
