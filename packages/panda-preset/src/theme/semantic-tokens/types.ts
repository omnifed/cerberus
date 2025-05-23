import type { Simplify } from '../../types'

// [sentiment?]-[usage]-[prominence?]-[interaction?]

/**
 * The categories of a theme.
 * @description **adjective**, how something is perceived.
 * @readonly **required**
 */
export type Sentiment =
  | 'page'
  | 'action'
  | 'secondaryAction'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dataViz'

/**
 * How a color is presented (can be a CSS property or HTML element).
 * @description **noun**, how something is used within an interface.
 * @readonly **required**
 */
export type Usage =
  | 'backdrop'
  | 'bg'
  | 'border'
  | 'navigation'
  | 'surface'
  | 'text'
  | 'ghost'

/**
 * The use or level of emphasis of a color.
 * @description **noun**, how something stands out.
 * @readonly **optional**
 */
export type Prominence =
  | 'initial'
  | 'inverse'
  | 'static'
  | 100
  | 200
  | 300
  | 400

/**
 * The state of an color.
 * @description **noun**, action or influence.
 * @readonly **optional**
 */
export type Interaction = 'hover' | 'active' | 'visited' | 'focus' | 'disabled'

/**
 * The use of a gradient.
 * @description **noun**, how a gradient is used.
 * @readonly **required**
 */
export type GradientUsage = 'start' | 'end' | 'text'

/**
 * The Cerberus theme of a color.
 */
export type Themes = 'cerberusTheme' | 'acheronTheme'
export type RawThemes = 'cerberus' | 'acheron'

/**
 * The mode option of a Cerberus theme.
 */
export type Modes = 'lightMode' | 'darkMode'
export type RawModes = 'light' | 'dark' | 'system'

export type PandaSelectors<T extends string, V> = {
  readonly [K in `_${T}`]: V
}

export type ModeSelectors = PandaSelectors<Modes, string>

export type Token = Simplify<
  {
    readonly base: string
  } & ModeSelectors
>

/**
 * The semantic token options of a color.
 */
export type SemanticToken = {
  description?: string
  value: Token
}

export type SentimentConfig = {
  [key in Sentiment]?: {
    [key in Usage]?:
      | SemanticToken
      | {
          readonly [key in Prominence]?: SemanticToken
        }
      | {
          readonly [key in Interaction]?: SemanticToken
        }
  }
}
