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

// used in the docs
export const semanticColors = rawTokens.semanticColors.dark
export const colors = rawTokens.primitives.colors

export const primitiveColorTokens = rawTokens.primitives.colors
export const text = rawTokens.primitives.typography
export const darkTokens = semanticColorsDark
export const lightTokens = semanticColorsLight

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
