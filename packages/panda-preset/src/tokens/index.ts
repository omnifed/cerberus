import primitiveColors from './data/primitive-colors.base.json' with { type: 'json' }
import semanticColorsDark from './data/semantic-colors.cerberus-dark-mode.json' with { type: 'json' }
import semanticColorsLight from './data/semantic-colors.cerberus-light-mode.json' with { type: 'json' }
import acheronDarkMode from './data/semantic-colors.acheron-dark-mode.json' with { type: 'json' }
import acheronLightMode from './data/semantic-colors.acheron-light-mode.json' with { type: 'json' }
import textStyles from './data/text-styles.json' with { type: 'json' }
import spacingTokens from './data/spacing.mode-1.json' with { type: 'json' }
import type { RawThemes, SemanticToken, Token } from '../theme'

/**
 * This module is a collection of raw tokens that are used to generate the theme.
 * @module rawTokens
 */

export interface RawTokens {
  primitives: {
    colors: typeof primitiveColors
    textStyles: typeof textStyles
    spacing: typeof spacingTokens
  }
  semanticColors: {
    dark: typeof semanticColorsDark
    light: typeof semanticColorsLight
  }
}

export const rawTokens: RawTokens = {
  primitives: {
    colors: primitiveColors,
    textStyles,
    spacing: spacingTokens,
  },
  semanticColors: {
    dark: semanticColorsDark,
    light: semanticColorsLight,
  },
}

// used in the docs
export const semanticColors = rawTokens.semanticColors.dark
export const colors = rawTokens.primitives.colors
export const spacing = rawTokens.primitives.spacing

export const primitiveColorTokens = rawTokens.primitives.colors
export const darkTokens = semanticColorsDark
export const lightTokens = semanticColorsLight

// additional themes
export const acheronDarkTokens = acheronDarkMode
export const acheronLightTokens = acheronLightMode

export const themeTokens = {
  cerberus: {
    dark: darkTokens,
    light: lightTokens,
  },
  acheron: {
    dark: acheronDarkTokens,
    light: acheronLightTokens,
  },
}

export const themeGradients = {
  acheron: {
    dark: {
      ...acheronDarkTokens.gradient,
    },
    light: {
      ...acheronLightTokens.gradient,
    },
  },
  cerberus: {
    dark: {
      ...darkTokens.gradient,
    },
    light: {
      ...lightTokens.gradient,
    },
  },
}

export type PrimitiveCollection = RawTokens['primitives']['colors']

// helpers

export type FigmaToken = {
  $type: 'color'
  $value: string | number
  $description: string
  $extensions: {
    'com.figma': {
      hiddenFromPublishing: boolean
      scopes: ['FRAME_FILL', 'SHAPE_FILL', 'STROKE_COLOR']
      codeSyntax: object
    }
  }
}

export type PandaColor = {
  [theme: string]: {
    [palette: string]: {
      [prominence: string | number]: {
        value: string
      }
    }
  }
}

export interface PandaGradientColor {
  [theme: string]: {
    [mode: string]: {
      [gradient: string]: {
        value: string
      }
    }
  }
}

export interface PandaGradient {
  [theme: string]: {
    [mode: string]: {
      [gradient: string]: {
        value: PandaGradientValue
      }
    }
  }
}

export interface PandaGradientValue {
  type: 'linear' | 'radial'
  placement: string | number
  stops:
    | Array<{
        color: string
        position: number
      }>
    | Array<string>
}

export interface PandaToken {
  [key: string]: {
    description: string
    value: string
  }
}

export function formatSpacingTokens(): PandaToken {
  return Object.entries(spacingTokens).reduce((acc, [key, value]) => {
    if (key === 'corner-radii') return acc
    acc[key] = {
      description: (value as FigmaToken).$description,
      value: `${((value as FigmaToken).$value as number) / 16}rem`,
    }
    return acc
  }, {} as PandaToken)
}

export function formatPrimitiveColors(): PandaColor {
  // primitive colors includes "spacing"
  const { acheron, cerberus } = primitiveColors
  const onlyThemePrimitiveColors = { acheron, cerberus }

  // format the primitive colors to match the Panda CSS format
  return Object.entries(onlyThemePrimitiveColors).reduce(
    (acc, [theme, palette]) => {
      acc[theme] = Object.entries(palette).reduce(
        (acc, [palette, prominence]) => {
          acc[palette] = Object.entries(prominence).reduce(
            (acc, [prominence, value]) => {
              acc[prominence] = { value: value.$value }
              return acc
            },
            {} as PandaColor[string][string],
          )
          return acc
        },
        {} as PandaColor[string],
      )
      return acc
    },
    {} as PandaColor,
  )
}

export function formatPrimitiveGradients(): PandaGradient {
  // gradient tokens are nested in the semantic-tokens
  const { acheron, cerberus } = themeGradients
  const onlyThemePrimitiveGradients = { acheron, cerberus }

  // format the primitive colors to match the Panda CSS format
  return Object.entries(onlyThemePrimitiveGradients).reduce(
    (acc, [theme, palette]) => {
      acc[theme] = Object.entries(palette).reduce(
        (acc, [mode, gradients]) => {
          acc[mode] = Object.entries(gradients).reduce(
            (acc, [gradient, tokens]) => {
              acc[gradient] = {
                value: {
                  type: 'linear',
                  placement: 'to left bottom',
                  stops: [
                    getSemanticToken(tokens.start.$value),
                    getSemanticToken(tokens.end.$value),
                  ],
                },
              }
              return acc
            },
            {} as PandaGradient[string][string],
          )
          return acc
        },
        {} as PandaGradient[string],
      )
      return acc
    },
    {} as PandaGradient,
  )
}

/**
 * This function loops through each of our supported themes and returns the expected Panda CSS theme token format for each token.
 * @param path `background.neutral.initial`
 * @returns
 * ```typescript
 * {
 *  description: string
 *  value: {
 *   _cerberusTheme: {
 *    base: string
 *    darkMode: string
 *    lightMode: string
 *   }
 * }
 * ```
 */
export function formatSemanticTokenValue(
  path: string,
  theme?: RawThemes,
): SemanticToken {
  return {
    description: getNestedProperty(
      themeTokens.cerberus,
      `dark.${path}.$description`,
    ),
    value: getThemeTokenByPath(path, theme),
  }
}

export function getThemeTokenByPath(
  path: string,
  theme?: RawThemes,
): SemanticToken['value'] {
  const darkPath = `dark.${path}.$value`
  const lightPath = `light.${path}.$value`
  return getThemeSelector(darkPath, lightPath, theme)
}

/**
 * This function returns the value of a token for a specific theme.
 * @param theme
 * @param darkPath
 * @param lightPath
 * @returns
 * ```typescript
 * {
 * _cerberusTheme: {
 *   base: string
 *   darkMode: string
 *   lightMode: string
 * }
 */
function getThemeSelector(
  darkPath: string,
  lightPath: string,
  theme?: RawThemes,
): Token {
  const themeKey = theme ?? 'cerberus'
  const darkToken = getSemanticToken(
    getNestedProperty(themeTokens[themeKey], darkPath),
  )
  const lightToken = getSemanticToken(
    getNestedProperty(themeTokens[themeKey], lightPath),
  )

  const tokenValue: Token = {
    base: darkToken,
    _darkMode: darkToken,
    _lightMode: lightToken,
  }

  return tokenValue
}

export type TokenObj =
  | (typeof themeTokens)['acheron']
  | (typeof themeTokens)['cerberus']

/**
 * This function returns the value of a nested property from an Object.
 * @param obj - The object to search
 * @param path -
 **/
function getNestedProperty(obj: TokenObj, path: string): string {
  const splitPath = path.split('.')
  return splitPath.reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key as keyof typeof acc]
    }
    return ''
  }, obj) as string
}

/**
 * This function updates the raw Figma $value to match the format which
 * PandaCSS expects for mapping to primitive colors.
 * @param path
 * @returns ```{colors.cerberus.success.70}```
 */
export function getSemanticToken(path: string): string {
  return `{colors.${path}}`
}

// text styles

export interface NormalizedTextStyle {
  items: string[]
  results: {
    [key: string]: CerberusTextStyle
  }
}

export interface CerberusTextStyle {
  /**
   * The node-id from Figma: `6750-8547`
   */
  node_id: string
  /**
   * The readable name for the text style: `display-lg`
   */
  name: string
  /**
   * The description for the text style: `The h1 - Used for large marketing headlines`
   */
  description: string
  /**
   * The styles for the text style: `{ fontSize: 48, lineHeight: 56 }`
   */
  styles: {
    fontFamily: string
    fontPostScriptName: string
    fontWeight: number
    textAutoResize: 'WIDTH_AND_HEIGHT'
    fontSize: number
    textAlignHorizontal: 'LEFT'
    textAlignVertical: 'TOP'
    letterSpacing: number
    lineHeightPx: number
    lineHeightPercent: number
    lineHeightPercentFontSize: number
    lineHeightUnit: 'FONT_SIZE_%'
  }
}

/**
 * Creates a map of the readable names for each text style from the raw node-id
 * from Figma.
 *
 * - 6750-8547: display-lg
 * - 6750-8548: display-md
 * - 6750-8549: display-sm
 * - 6750-5204: h1
 * - 6750-5210: h2
 * - 6750-5212: h3
 * - 6750-5214: h4
 * - 6750-5216: h5
 * - 6750-5218: h6
 * - 13983-8564: heading-2xs
 * - 6750-5220: body-lg
 * - 6750-5229: body-md
 * - 6750-5231: body-sm
 * - 6750-5233: label-sm
 * - 6750-8545: label-md
 * - 6750-5235: button
 * - 11875-39189: mono-xl
 * - 11875-39776: mono-lg
 * - 11875-39778: mono-md
 * - 11875-39780: mono-sm
 * - 11875-39782: mono-xs
 */
export function formatTextStyles(): NormalizedTextStyle {
  const rawTextStyles = textStyles as RawTokens['primitives']['textStyles']

  return Object.entries(rawTextStyles).reduce(
    (acc, [node_id, data]) => {
      const key = node_id as keyof typeof textStyles
      const styleNode = data.document.styles?.text as keyof typeof data.styles

      if (!styleNode) return acc

      acc.items.push(key)
      acc.results[key] = {
        node_id: key,
        name: (data.styles[styleNode] as { name: string })?.name,
        description: (data.styles[styleNode] as { description: string })
          ?.description,
        styles: data.document.style as CerberusTextStyle['styles'],
      }
      return acc
    },
    {
      items: [],
      results: {},
    } as NormalizedTextStyle,
  )
}
