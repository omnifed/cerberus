import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens } from '../../tokens'

type Prominences = Exclude<Prominence, 'inverse' | 300>

export interface WarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: {
        description: 'The default border color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.warning.initial.$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for static (surface) elements that display a warning state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning.initial.$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description: 'The secondary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description: 'The tertiary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['200'].$value,
            ).$value,
          },
        },
      },
    },
  },
}
