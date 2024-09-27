import primitiveColors from './data/primitive-colors.cerberus.json' with { type: 'json' }
import primitiveTypography from './data/primitive-typography.value.json' with { type: 'json' }
import semanticColorsDark from './data/semantic-colors.dark-mode.json' with { type: 'json' }
import semanticColorsLight from './data/semantic-colors.light-mode.json' with { type: 'json' }
import acheronDarkMode from './data/semantic-colors.acheron-dark-mode.json' with { type: 'json' }
import acheronLightMode from './data/semantic-colors.acheron-light-mode.json' with { type: 'json' }

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
}

// used in the docs
export const semanticColors = rawTokens.semanticColors.dark
export const colors = rawTokens.primitives.colors

export const primitiveColorTokens = rawTokens.primitives.colors
export const text = rawTokens.primitives.typography
export const darkTokens = semanticColorsDark
export const lightTokens = semanticColorsLight

// additional themes
export const acheronDarkTokens = acheronDarkMode
export const acheronLightTokens = acheronLightMode

export type PrimitiveCollection =
  | RawTokens['primitives']['colors']
  | RawTokens['primitives']['typography']

// helpers

export type PandaColor = {
  [palette: string]: {
    [prominence: string | number]: {
      value: string
    }
  }
}

export function formatPrimitiveColors(): PandaColor {
  return Object.entries(primitiveColors.colors).reduce(
    (acc, [palette, prominence]) => {
      acc[palette] = Object.entries(prominence).reduce(
        (acc, [prominence, value]) => {
          acc[prominence] = { value: value.$value }
          return acc
        },
        {} as PandaColor[string],
      )
      return acc
    },
    {} as PandaColor,
  )
}

export function getSemanticToken(path: string): string {
  return `{${path}}`
}
