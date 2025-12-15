import primitiveColors from './data/primitive-colors.base.json' with { type: 'json' }
import semanticColorsDark from './data/semantic-colors.cerberus-dark-mode.json' with { type: 'json' }
import semanticColorsLight from './data/semantic-colors.cerberus-light-mode.json' with { type: 'json' }
// import acheronDarkMode from './data/semantic-colors.acheron-dark-mode.json' with { type: 'json' }
// import acheronLightMode from './data/semantic-colors.acheron-light-mode.json' with { type: 'json' }
import textStyles from './data/text-styles.json' with { type: 'json' }
import spacingTokens from './data/spacing.mode-1.json' with { type: 'json' }

/**
 * The base Object collection for all the tokens synced from Figma.
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

// PandaCSS

export interface CerbyTokenValue {
  base: string
  _darkMode: string
  _lightMode: string
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

// Types

export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never
