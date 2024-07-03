import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens } from '../../tokens'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

type Prominences = Exclude<Prominence, 'inverse' | 300>

export interface InfoTokens {
  readonly info: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
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

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: {
        description: 'The default border color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.info.initial.$value,
            ).$value,
          },
        },
      },
    },

    bg: {
      initial: {
        description: 'The default background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.initial.$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a layout-based surface element (like a page or card) in a informational state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info.initial.$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description: 'The secondary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description: 'The tertiary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['200'].$value,
            ).$value,
          },
        },
      },
    },
  },
}
